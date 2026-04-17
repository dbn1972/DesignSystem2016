import { BaseComponentProps } from '../../types/common';

export interface CalendarSchedulerProps extends BaseComponentProps {
  /** Currently selected date (ISO string, e.g. "2025-01-15") */
  selectedDate?: string;

  /** Called when a date cell is clicked */
  onDateSelect?: (date: string) => void;

  /** Array of available/bookable dates (ISO strings) */
  availableDates?: string[];

  /** Earliest selectable date (ISO string) */
  minDate?: string;

  /** Latest selectable date (ISO string) */
  maxDate?: string;

  /** Accessible label for the calendar */
  label?: string;

  /** Whether the calendar is disabled */
  disabled?: boolean;
}
