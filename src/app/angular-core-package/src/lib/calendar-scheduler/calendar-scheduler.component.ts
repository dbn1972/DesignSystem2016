import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @component CalendarScheduler
 * @description Appointment booking calendar
 *
 * @example
 * // Passport Appointment Booking
 * <ux4g-calendar-scheduler
 *   [availableSlots]="availableAppointments"
 *   [bookedSlots]="bookedAppointments"
 *   [minDate]="tomorrow"
 *   [maxDate]="threeMonthsLater"
 *   (slotSelected)="bookAppointment($event)"
 * ></ux4g-calendar-scheduler>
 *
 * @example
 * // Aadhaar Enrollment Slots
 * <ux4g-calendar-scheduler
 *   [availableSlots]="enrollmentSlots"
 *   (slotSelected)="selectEnrollmentSlot($event)"
 * ></ux4g-calendar-scheduler>
 */
export interface TimeSlot {
  date: string; // ISO date
  time: string; // HH:MM
  available: boolean;
}

interface CalendarDay {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isDisabled: boolean;
  hasSlots: boolean;
}

@Component({
  selector: 'ux4g-calendar-scheduler',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="ux4g-calendar-scheduler" role="region" aria-label="Appointment scheduler">
      <div class="ux4g-calendar-scheduler__header">
        <button
          class="ux4g-calendar-scheduler__nav-button"
          (click)="previousMonth()"
          aria-label="Previous month"
        >
          ‹
        </button>
        <h3 class="ux4g-calendar-scheduler__title">
          {{ currentMonth }} {{ currentYear }}
        </h3>
        <button
          class="ux4g-calendar-scheduler__nav-button"
          (click)="nextMonth()"
          aria-label="Next month"
        >
          ›
        </button>
        <button
          class="ux4g-calendar-scheduler__today-button"
          (click)="goToToday()"
          aria-label="Go to today"
        >
          Today
        </button>
      </div>

      <div class="ux4g-calendar-scheduler__calendar" role="grid">
        <div class="ux4g-calendar-scheduler__weekdays" role="row">
          @for (day of weekdays; track day) {
            <div class="ux4g-calendar-scheduler__weekday" role="columnheader">
              {{ day }}
            </div>
          }
        </div>

        <div class="ux4g-calendar-scheduler__days">
          @for (day of calendarDays; track day.date.toISOString()) {
            <button
              class="ux4g-calendar-scheduler__day"
              [class.ux4g-calendar-scheduler__day--other-month]="!day.isCurrentMonth"
              [class.ux4g-calendar-scheduler__day--today]="day.isToday"
              [class.ux4g-calendar-scheduler__day--selected]="isDateSelected(day.date)"
              [class.ux4g-calendar-scheduler__day--disabled]="day.isDisabled"
              [class.ux4g-calendar-scheduler__day--has-slots]="day.hasSlots"
              [disabled]="day.isDisabled"
              (click)="selectDate(day.date)"
              role="gridcell"
              [attr.aria-label]="formatDateLabel(day.date)"
              [attr.aria-selected]="isDateSelected(day.date)"
            >
              {{ day.day }}
              @if (day.hasSlots && day.isCurrentMonth) {
                <span class="ux4g-calendar-scheduler__day-indicator" aria-hidden="true">•</span>
              }
            </button>
          }
        </div>
      </div>

      @if (selectedDate) {
        <div class="ux4g-calendar-scheduler__slots">
          <h4 class="ux4g-calendar-scheduler__slots-title">
            Available times for {{ formatSelectedDate(selectedDate) }}
          </h4>
          <div class="ux4g-calendar-scheduler__slots-grid">
            @for (slot of getAvailableSlotsForDate(selectedDate); track slot.time) {
              <button
                class="ux4g-calendar-scheduler__slot"
                [class.ux4g-calendar-scheduler__slot--booked]="!slot.available"
                [disabled]="!slot.available"
                (click)="selectSlot(slot)"
                [attr.aria-label]="slot.time + (slot.available ? ' - Available' : ' - Booked')"
              >
                {{ slot.time }}
              </button>
            }
            @if (getAvailableSlotsForDate(selectedDate).length === 0) {
              <p class="ux4g-calendar-scheduler__no-slots">No slots available for this date</p>
            }
          </div>
        </div>
      }
    </div>
  `,
  styleUrls: ['./calendar-scheduler.component.css']
})
export class CalendarSchedulerComponent implements OnInit {
  @Input() selectedDate?: Date;
  @Input() availableSlots: TimeSlot[] = [];
  @Input() bookedSlots: TimeSlot[] = [];
  @Input() minDate?: Date;
  @Input() maxDate?: Date;

  @Output() slotSelected = new EventEmitter<TimeSlot>();
  @Output() dateSelected = new EventEmitter<Date>();

  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDays: CalendarDay[] = [];
  currentDate = new Date();
  currentYear = this.currentDate.getFullYear();
  currentMonth = this.getMonthName(this.currentDate.getMonth());
  private viewMonth = this.currentDate.getMonth();
  private viewYear = this.currentDate.getFullYear();

  ngOnInit(): void {
    this.generateCalendar();
  }

  private generateCalendar(): void {
    const firstDay = new Date(this.viewYear, this.viewMonth, 1);
    const lastDay = new Date(this.viewYear, this.viewMonth + 1, 0);
    const prevLastDay = new Date(this.viewYear, this.viewMonth, 0);

    const firstDayOfWeek = firstDay.getDay();
    const lastDateOfMonth = lastDay.getDate();
    const prevLastDate = prevLastDay.getDate();

    const days: CalendarDay[] = [];

    // Previous month days
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(this.viewYear, this.viewMonth - 1, prevLastDate - i);
      days.push(this.createCalendarDay(date, false));
    }

    // Current month days
    for (let day = 1; day <= lastDateOfMonth; day++) {
      const date = new Date(this.viewYear, this.viewMonth, day);
      days.push(this.createCalendarDay(date, true));
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows × 7 days
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(this.viewYear, this.viewMonth + 1, day);
      days.push(this.createCalendarDay(date, false));
    }

    this.calendarDays = days;
  }

  private createCalendarDay(date: Date, isCurrentMonth: boolean): CalendarDay {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    const isToday = date.getTime() === today.getTime();
    const isDisabled = this.isDateDisabled(date);
    const hasSlots = this.dateHasSlots(date);

    return {
      date,
      day: date.getDate(),
      isCurrentMonth,
      isToday,
      isDisabled,
      hasSlots
    };
  }

  private isDateDisabled(date: Date): boolean {
    if (this.minDate && date < this.minDate) return true;
    if (this.maxDate && date > this.maxDate) return true;
    return false;
  }

  private dateHasSlots(date: Date): boolean {
    const dateStr = this.formatDateISO(date);
    return this.availableSlots.some(slot => slot.date === dateStr && slot.available);
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
    this.dateSelected.emit(date);
  }

  isDateSelected(date: Date): boolean {
    if (!this.selectedDate) return false;
    return date.toDateString() === this.selectedDate.toDateString();
  }

  previousMonth(): void {
    this.viewMonth--;
    if (this.viewMonth < 0) {
      this.viewMonth = 11;
      this.viewYear--;
    }
    this.currentMonth = this.getMonthName(this.viewMonth);
    this.currentYear = this.viewYear;
    this.generateCalendar();
  }

  nextMonth(): void {
    this.viewMonth++;
    if (this.viewMonth > 11) {
      this.viewMonth = 0;
      this.viewYear++;
    }
    this.currentMonth = this.getMonthName(this.viewMonth);
    this.currentYear = this.viewYear;
    this.generateCalendar();
  }

  goToToday(): void {
    const today = new Date();
    this.viewMonth = today.getMonth();
    this.viewYear = today.getFullYear();
    this.currentMonth = this.getMonthName(this.viewMonth);
    this.currentYear = this.viewYear;
    this.generateCalendar();
  }

  getAvailableSlotsForDate(date: Date): TimeSlot[] {
    const dateStr = this.formatDateISO(date);
    const slots = [...this.availableSlots, ...this.bookedSlots].filter(slot => slot.date === dateStr);
    return slots.sort((a, b) => a.time.localeCompare(b.time));
  }

  selectSlot(slot: TimeSlot): void {
    if (slot.available) {
      this.slotSelected.emit(slot);
    }
  }

  formatDateISO(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  formatSelectedDate(date: Date): string {
    return date.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  formatDateLabel(date: Date): string {
    return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  private getMonthName(month: number): string {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
  }
}
