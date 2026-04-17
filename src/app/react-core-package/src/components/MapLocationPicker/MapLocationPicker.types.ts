import { BaseComponentProps } from '../../types/common';

export interface MapLocationPickerProps extends BaseComponentProps {
  /** Latitude coordinate */
  latitude?: number;

  /** Longitude coordinate */
  longitude?: number;

  /** Called when location changes */
  onChange?: (coords: { latitude: number; longitude: number }) => void;

  /** Map zoom level */
  zoom?: number;

  /** Map container height */
  height?: number | string;

  /** Label text */
  label?: string;
}
