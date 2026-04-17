/**
 * MapLocationPicker Component
 * Location picker placeholder with coordinates display.
 *
 * @example
 * ```tsx
 * <MapLocationPicker latitude={28.6139} longitude={77.209} label="Select Location" />
 * ```
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { MapLocationPickerProps } from './MapLocationPicker.types';

export const MapLocationPicker = forwardRef<HTMLDivElement, MapLocationPickerProps>(
  (
    {
      latitude = 0,
      longitude = 0,
      onChange,
      zoom = 10,
      height = 300,
      label,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn('ux4g-map-location-picker', className)} {...props}>
        {label && (
          <p className="ux4g-map-location-picker-label text-sm font-medium text-foreground mb-2">
            {label}
          </p>
        )}
        <div
          className="ux4g-map-location-picker-map flex flex-col items-center justify-center border rounded-md bg-muted"
          style={{ height }}
          role="application"
          aria-label={label || 'Map location picker'}
        >
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">📍 Map Placeholder</p>
            <p className="ux4g-map-location-picker-coords text-xs font-mono text-foreground">
              Lat: {latitude.toFixed(4)}, Lng: {longitude.toFixed(4)}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Zoom: {zoom}</p>
          </div>
        </div>
      </div>
    );
  }
);

MapLocationPicker.displayName = 'MapLocationPicker';
