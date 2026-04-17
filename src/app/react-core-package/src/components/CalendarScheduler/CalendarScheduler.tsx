/**
 * CalendarScheduler Component
 * Appointment booking calendar with a simple month grid of clickable date cells.
 *
 * @example
 * ```tsx
 * <CalendarScheduler
 *   selectedDate="2025-01-15"
 *   availableDates={['2025-01-15', '2025-01-16']}
 *   onDateSelect={(date) => console.log(date)}
 * />
 * ```
 */

import { forwardRef, useMemo } from 'react';
import { cn } from '../../utils/cn';
import { CalendarSchedulerProps } from './CalendarScheduler.types';

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

function toISODate(year: number, month: number, day: number): string {
  const m = String(month + 1).padStart(2, '0');
  const d = String(day).padStart(2, '0');
  return `${year}-${m}-${d}`;
}

export const CalendarScheduler = forwardRef<HTMLDivElement, CalendarSchedulerProps>(
  (
    {
      selectedDate,
      onDateSelect,
      availableDates = [],
      minDate,
      maxDate,
      label = 'Calendar',
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const today = new Date();
    const displayDate = selectedDate ? new Date(selectedDate) : today;
    const year = displayDate.getFullYear();
    const month = displayDate.getMonth();

    const monthName = displayDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfWeek(year, month);

    const availableSet = useMemo(() => new Set(availableDates), [availableDates]);

    const isDateDisabled = (iso: string): boolean => {
      if (disabled) return true;
      if (availableDates.length > 0 && !availableSet.has(iso)) return true;
      if (minDate && iso < minDate) return true;
      if (maxDate && iso > maxDate) return true;
      return false;
    };

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <div
        ref={ref}
        className={cn('ux4g-calendar-scheduler', className)}
        role="group"
        aria-label={label}
        {...props}
      >
        <div className="ux4g-calendar-scheduler-header text-center font-semibold text-lg mb-2">
          {monthName}
        </div>
        <table className="ux4g-calendar-scheduler-grid w-full border-collapse" role="grid">
          <thead>
            <tr>
              {weekdays.map((day) => (
                <th key={day} className="text-center text-sm font-medium p-1" scope="col">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(() => {
              const rows: React.ReactNode[] = [];
              let cells: React.ReactNode[] = [];

              for (let i = 0; i < firstDay; i++) {
                cells.push(<td key={`empty-${i}`} className="p-1" />);
              }

              for (let day = 1; day <= daysInMonth; day++) {
                const iso = toISODate(year, month, day);
                const isSelected = iso === selectedDate;
                const isDisabled = isDateDisabled(iso);

                cells.push(
                  <td key={day} className="p-1 text-center">
                    <button
                      type="button"
                      disabled={isDisabled}
                      aria-pressed={isSelected}
                      aria-label={`${day}`}
                      onClick={() => onDateSelect?.(iso)}
                      className={cn(
                        'ux4g-calendar-scheduler-cell w-8 h-8 rounded-full text-sm',
                        isSelected && 'bg-primary text-primary-foreground',
                        isDisabled && 'opacity-40 cursor-not-allowed',
                        !isSelected && !isDisabled && 'hover:bg-muted cursor-pointer'
                      )}
                    >
                      {day}
                    </button>
                  </td>
                );

                if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
                  rows.push(<tr key={`row-${day}`}>{cells}</tr>);
                  cells = [];
                }
              }

              return rows;
            })()}
          </tbody>
        </table>
      </div>
    );
  }
);

CalendarScheduler.displayName = 'CalendarScheduler';
