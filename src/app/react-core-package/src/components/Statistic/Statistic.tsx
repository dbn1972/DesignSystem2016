import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { StatisticProps } from './Statistic.types';

export const Statistic = forwardRef<HTMLDivElement, StatisticProps>(
  ({ label, value, prefix, suffix, trend, icon, className, ...props }, ref) => (
    <div ref={ref} className={cn('ux4g-statistic', className)} {...props}>
      <div className="flex items-center gap-2 mb-1">
        {icon && <span className="text-muted-foreground" aria-hidden="true">{icon}</span>}
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <div className="flex items-baseline gap-1">
        {prefix && <span className="text-lg text-muted-foreground">{prefix}</span>}
        <span className="text-3xl font-bold text-foreground">{value}</span>
        {suffix && <span className="text-lg text-muted-foreground">{suffix}</span>}
      </div>
      {trend && (
        <div className={cn('flex items-center gap-1 mt-1 text-sm', trend.value >= 0 ? 'text-green-600' : 'text-red-600')}>
          <span aria-hidden="true">{trend.value >= 0 ? '↑' : '↓'}</span>
          <span>{Math.abs(trend.value)}%</span>
          {trend.label && <span className="text-muted-foreground">{trend.label}</span>}
        </div>
      )}
    </div>
  )
);

Statistic.displayName = 'Statistic';
