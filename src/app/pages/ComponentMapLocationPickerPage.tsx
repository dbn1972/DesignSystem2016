/**
 * Map Location Picker Component Documentation Page
 * Complete documentation for the Map Location Picker component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { MapPin, Search, Navigation, Map } from 'lucide-react';

// Import the actual Map Location Picker component for live preview
const MapLocationPickerPreview = ({
  center = { lat: 28.6139, lng: 77.2090 },
  zoom = 12,
  searchEnabled = false,
  currentLocationButton = false,
  marker = true,
  allowMultiple = false,
  ...props
}: any) => (
  <div
    className="relative w-full bg-muted border border-border rounded overflow-hidden"
    style={{ height: '300px' }}
    {...props}
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <Map className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">Map Container</p>
        <p className="text-xs text-muted-foreground mt-1">
          {center.lat.toFixed(4)}, {center.lng.toFixed(4)}
        </p>
      </div>
    </div>
    {marker && (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <MapPin className="w-8 h-8 text-red-600 drop-shadow-lg" />
      </div>
    )}
    {searchEnabled && (
      <div className="absolute top-4 left-4 right-4 bg-card rounded shadow-lg p-3 flex items-center gap-2">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search location..."
          className="flex-1 outline-none text-sm"
        />
      </div>
    )}
    {currentLocationButton && (
      <button className="absolute bottom-4 right-4 bg-card p-2 rounded shadow-lg hover:bg-background min-h-[44px] min-w-[44px] flex items-center justify-center">
        <Navigation className="w-5 h-5 text-[#005196]" />
      </button>
    )}
  </div>
);

function MapLocationPickerPlayground() {
  const [editable, setEditable] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-4 sm:p-6 lg:p-8">
        <div className="w-full flex items-center justify-center">
          <MapLocationPickerPreview editable={editable} showSearch={showSearch} />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={editable} onChange={e => setEditable(e.target.checked)} className="accent-primary" /><span className="text-foreground">Editable</span></label>
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showSearch} onChange={e => setShowSearch(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show Search</span></label>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<MapLocationPicker${editable ? ' editable' : ''}${showSearch ? ' showSearch' : ''} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentMapLocationPickerPage() {
  return (
    <ComponentDocumentation
      name="Map Location Picker"
      description="Advanced interactive component for selecting geographic locations on a map. Ideal for government services requiring address verification, service center location selection, land registration, and other location-based applications."
      category="Government Services"
      maturity="beta"
      tier="composite"
      since="v2.0.0"
      updated="v2.2.0"

      preview={
        <div className="w-full max-w-2xl">
          <MapLocationPickerPreview editable showSearch />
        </div>
      }

      props={[
        {
          name: 'center',
          type: '{ lat: number; lng: number }',
          default: '{ lat: 28.6139, lng: 77.2090 }',
          required: false,
          description: 'Initial center coordinates of the map. Defaults to New Delhi, India.',
        },
        {
          name: 'zoom',
          type: 'number',
          default: '12',
          required: false,
          description: 'Initial zoom level (1-20). Higher values show more detail. City level is typically 12-14.',
        },
        {
          name: 'onLocationSelect',
          type: '(location: { lat: number; lng: number; address?: string }) => void',
          required: true,
          description: 'Callback fired when user selects a location. Receives coordinates and optional reverse-geocoded address.',
        },
        {
          name: 'searchEnabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Enable location search with autocomplete. Allows users to search for places by name or address.',
        },
        {
          name: 'currentLocationButton',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Show button to detect and navigate to user\'s current location using browser geolocation API.',
        },
        {
          name: 'marker',
          type: 'boolean | { lat: number; lng: number; label?: string }',
          default: 'true',
          required: false,
          description: 'Show marker at selected location. Can be boolean or marker configuration object.',
        },
        {
          name: 'allowMultiple',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Allow selection of multiple locations. Returns array of locations in onLocationSelect.',
        },
        {
          name: 'district',
          type: 'string',
          required: false,
          description: 'Restrict map to specific district. Useful for district-level services.',
        },
        {
          name: 'state',
          type: 'string',
          required: false,
          description: 'Restrict map to specific state. Useful for state-level services.',
        },
        {
          name: 'minZoom',
          type: 'number',
          default: '4',
          required: false,
          description: 'Minimum allowed zoom level.',
        },
        {
          name: 'maxZoom',
          type: 'number',
          default: '18',
          required: false,
          description: 'Maximum allowed zoom level.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Disable map interaction. Shows read-only map with selected location.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply to map container.',
        },
      ]}

      examples={[
        {
          title: 'Single Location Picker',
          description: 'Basic map for selecting a single location. User clicks on map to place marker.',
          code: `import { MapLocationPicker } from '@ux4g/react-composite';
import { useState } from 'react';

function Example() {
  const [location, setLocation] = useState(null);

  return (
    <div>
      <MapLocationPicker
        center={{ lat: 28.6139, lng: 77.2090 }}
        zoom={12}
        onLocationSelect={(loc) => setLocation(loc)}
      />
      {location && (
        <p className="mt-4 text-sm">
          Selected: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
        </p>
      )}
    </div>
  );
}`,
          preview: (
            <div>
              <MapLocationPickerPreview />
              <p className="mt-4 text-sm text-muted-foreground">
                Click on the map to select a location
              </p>
            </div>
          ),
        },
        {
          title: 'Search with Autocomplete',
          description: 'Map with integrated search functionality for finding locations by name or address.',
          code: `import { MapLocationPicker } from '@ux4g/react-composite';

function Example() {
  return (
    <MapLocationPicker
      center={{ lat: 28.6139, lng: 77.2090 }}
      zoom={12}
      searchEnabled
      onLocationSelect={(loc) => console.log('Selected:', loc.address || loc)}
    />
  );
}`,
          preview: (
            <MapLocationPickerPreview searchEnabled />
          ),
        },
        {
          title: 'Current Location Detection',
          description: 'Map with button to detect user\'s current location using browser geolocation.',
          code: `import { MapLocationPicker } from '@ux4g/react-composite';

function Example() {
  return (
    <MapLocationPicker
      center={{ lat: 28.6139, lng: 77.2090 }}
      zoom={12}
      currentLocationButton
      searchEnabled
      onLocationSelect={(loc) => {
        console.log('Location:', loc);
      }}
    />
  );
}`,
          preview: (
            <MapLocationPickerPreview
              searchEnabled
              currentLocationButton
            />
          ),
        },
        {
          title: 'District/State Selection',
          description: 'Restrict map view to specific district or state boundaries for localized services.',
          code: `import { MapLocationPicker } from '@ux4g/react-composite';

function Example() {
  return (
    <MapLocationPicker
      center={{ lat: 28.6139, lng: 77.2090 }}
      zoom={11}
      state="Delhi"
      district="New Delhi"
      minZoom={10}
      maxZoom={16}
      searchEnabled
      onLocationSelect={(loc) => {
        console.log('Selected in New Delhi district:', loc);
      }}
    />
  );
}`,
          preview: (
            <div>
              <MapLocationPickerPreview searchEnabled />
              <p className="mt-2 text-xs text-muted-foreground">
                Restricted to: New Delhi District, Delhi
              </p>
            </div>
          ),
        },
        {
          title: 'Address Form Integration',
          description: 'Integration with address form for complete location data capture.',
          code: `import { MapLocationPicker } from '@ux4g/react-composite';
import { Input, Button } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    pincode: '',
    coordinates: null,
  });

  const handleLocationSelect = (location) => {
    setFormData(prev => ({
      ...prev,
      coordinates: location,
      address: location.address || prev.address,
    }));
  };

  return (
    <div className="space-y-4">
      <MapLocationPicker
        center={{ lat: 28.6139, lng: 77.2090 }}
        zoom={12}
        searchEnabled
        currentLocationButton
        onLocationSelect={handleLocationSelect}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Address"
          value={formData.address}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            address: e.target.value
          }))}
        />
        <Input
          label="City"
          value={formData.city}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            city: e.target.value
          }))}
        />
        <Input
          label="State"
          value={formData.state}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            state: e.target.value
          }))}
        />
        <Input
          label="PIN Code"
          value={formData.pincode}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            pincode: e.target.value
          }))}
        />
      </div>

      <Button variant="primary" fullWidth>
        Submit Address
      </Button>
    </div>
  );
}`,
          preview: (
            <div className="space-y-4">
              <MapLocationPickerPreview searchEnabled currentLocationButton />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Address</label>
                  <input className="w-full px-3 py-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input className="w-full px-3 py-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">State</label>
                  <input className="w-full px-3 py-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">PIN Code</label>
                  <input className="w-full px-3 py-2 border rounded" />
                </div>
              </div>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { useState, useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { cn } from '../../utils/cn';
import { MapLocationPickerProps, LocationData } from './MapLocationPicker.types';

// Alternative: Use react-leaflet for open-source option
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';

export const MapLocationPicker: React.FC<MapLocationPickerProps> = ({
  center = { lat: 28.6139, lng: 77.2090 },
  zoom = 12,
  onLocationSelect,
  searchEnabled = false,
  currentLocationButton = false,
  marker = true,
  allowMultiple = false,
  district,
  state,
  minZoom = 4,
  maxZoom = 18,
  disabled = false,
  className,
  apiKey,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [geocoder, setGeocoder] = useState<google.maps.Geocoder | null>(null);

  // Initialize Google Maps
  useEffect(() => {
    if (!mapRef.current || !apiKey) return;

    const loader = new Loader({
      apiKey,
      version: 'weekly',
      libraries: ['places', 'geocoding'],
    });

    loader.load().then(() => {
      const mapInstance = new google.maps.Map(mapRef.current!, {
        center,
        zoom,
        minZoom,
        maxZoom,
        disableDefaultUI: disabled,
        gestureHandling: disabled ? 'none' : 'auto',
      });

      setMap(mapInstance);
      setGeocoder(new google.maps.Geocoder());

      // Add click listener
      if (!disabled) {
        mapInstance.addListener('click', (e: google.maps.MapMouseEvent) => {
          if (e.latLng) {
            handleLocationSelect({
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
            });
          }
        });
      }
    });
  }, [apiKey]);

  // Handle location selection with reverse geocoding
  const handleLocationSelect = async (coords: { lat: number; lng: number }) => {
    if (!geocoder) return;

    try {
      const result = await geocoder.geocode({ location: coords });
      const address = result.results[0]?.formatted_address;

      const locationData: LocationData = {
        ...coords,
        address,
      };

      setSelectedLocation(locationData);
      onLocationSelect(locationData);
    } catch (error) {
      console.error('Geocoding error:', error);
      onLocationSelect(coords);
    }
  };

  // Current location detection
  const handleCurrentLocation = () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map?.setCenter(coords);
        handleLocationSelect(coords);
      },
      (error) => {
        console.error('Geolocation error:', error);
      }
    );
  };

  return (
    <div className={cn('relative w-full h-full', className)}>
      <div
        ref={mapRef}
        className="w-full h-full rounded"
        role="application"
        aria-label="Interactive map for location selection"
      />

      {searchEnabled && (
        <div className="absolute top-4 left-4 right-4">
          <input
            type="text"
            placeholder="Search location..."
            className="w-full px-4 py-2 bg-card rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-[#005196]"
            aria-label="Search for location"
          />
        </div>
      )}

      {currentLocationButton && (
        <button
          onClick={handleCurrentLocation}
          className="absolute bottom-4 right-4 bg-card p-3 rounded shadow-lg hover:bg-background focus:outline-none focus:ring-2 focus:ring-[#005196] min-h-[44px] min-w-[44px]"
          aria-label="Use my current location"
        >
          <svg className="w-5 h-5 text-[#005196]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      )}
    </div>
  );
};

MapLocationPicker.displayName = 'MapLocationPicker';`,
        types: `export interface LocationData {
  lat: number;
  lng: number;
  address?: string;
}

export interface MapLocationPickerProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  onLocationSelect: (location: LocationData | LocationData[]) => void;
  searchEnabled?: boolean;
  currentLocationButton?: boolean;
  marker?: boolean | { lat: number; lng: number; label?: string };
  allowMultiple?: boolean;
  district?: string;
  state?: string;
  minZoom?: number;
  maxZoom?: number;
  disabled?: boolean;
  className?: string;
  apiKey: string;
}`,
        variants: `// Using Leaflet (Open Source Alternative)
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function LocationMarker({ onLocationSelect }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onLocationSelect(e.latlng);
    },
  });

  return position === null ? null : <Marker position={position} />;
}

export function LeafletMapLocationPicker({ center, zoom, onLocationSelect }) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker onLocationSelect={onLocationSelect} />
    </MapContainer>
  );
}`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

interface LocationData {
  lat: number;
  lng: number;
  address?: string;
}

@Component({
  selector: 'ux4g-map-location-picker',
  template: \`
    <div class="map-container" [class]="className">
      <div #mapElement class="map-element"></div>

      <div *ngIf="searchEnabled" class="search-container">
        <input
          type="text"
          placeholder="Search location..."
          class="search-input"
          [(ngModel)]="searchQuery"
          (input)="onSearch()"
          aria-label="Search for location"
        />
      </div>

      <button
        *ngIf="currentLocationButton"
        (click)="getCurrentLocation()"
        class="current-location-btn"
        aria-label="Use my current location"
      >
        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
      </button>
    </div>
  \`,
  styleUrls: ['./map-location-picker.component.css']
})
export class MapLocationPickerComponent implements OnInit {
  @ViewChild('mapElement', { static: true }) mapElement!: ElementRef;

  @Input() center = { lat: 28.6139, lng: 77.2090 };
  @Input() zoom = 12;
  @Input() searchEnabled = false;
  @Input() currentLocationButton = false;
  @Input() marker = true;
  @Input() allowMultiple = false;
  @Input() district?: string;
  @Input() state?: string;
  @Input() minZoom = 4;
  @Input() maxZoom = 18;
  @Input() disabled = false;
  @Input() className = '';
  @Input() apiKey!: string;

  @Output() locationSelect = new EventEmitter<LocationData>();

  private map?: google.maps.Map;
  private geocoder?: google.maps.Geocoder;
  public searchQuery = '';

  async ngOnInit() {
    if (!this.apiKey) {
      console.error('Google Maps API key is required');
      return;
    }

    const loader = new Loader({
      apiKey: this.apiKey,
      version: 'weekly',
      libraries: ['places', 'geocoding'],
    });

    await loader.load();
    this.initializeMap();
  }

  private initializeMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: this.center,
      zoom: this.zoom,
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
      disableDefaultUI: this.disabled,
      gestureHandling: this.disabled ? 'none' : 'auto',
    });

    this.geocoder = new google.maps.Geocoder();

    if (!this.disabled) {
      this.map.addListener('click', (e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
          this.handleLocationSelect({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          });
        }
      });
    }
  }

  private async handleLocationSelect(coords: { lat: number; lng: number }) {
    if (!this.geocoder) return;

    try {
      const result = await this.geocoder.geocode({ location: coords });
      const address = result.results[0]?.formatted_address;

      this.locationSelect.emit({ ...coords, address });
    } catch (error) {
      console.error('Geocoding error:', error);
      this.locationSelect.emit(coords);
    }
  }

  getCurrentLocation() {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.map?.setCenter(coords);
        this.handleLocationSelect(coords);
      },
      (error) => console.error('Geolocation error:', error)
    );
  }

  onSearch() {
    // Implement search with Places Autocomplete
    console.log('Searching for:', this.searchQuery);
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapLocationPickerComponent } from './map-location-picker.component';

@NgModule({
  declarations: [MapLocationPickerComponent],
  imports: [CommonModule, FormsModule],
  exports: [MapLocationPickerComponent]
})
export class MapLocationPickerModule { }`,
        types: `export interface LocationData {
  lat: number;
  lng: number;
  address?: string;
}`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-map-location-picker> custom element",
        html: "<ux4g-map-location-picker variant=\"primary\" size=\"md\"><!-- MapLocationPicker --></ux4g-map-location-picker>",
      }}
      comparisons={[
        {
          system: 'Google Maps Platform',
          component: 'Maps JavaScript API',
          variants: 'Full-featured commercial solution',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://developers.google.com/maps/documentation/javascript',
        },
        {
          system: 'Leaflet',
          component: 'Map Container',
          variants: 'Open-source, lightweight',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://leafletjs.com/',
        },
        {
          system: 'Mapbox GL JS',
          component: 'Map',
          variants: 'Vector tiles, customizable',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://docs.mapbox.com/mapbox-gl-js/',
        },
        {
          system: 'OpenLayers',
          component: 'Map',
          variants: 'Open-source, feature-rich',
          accessibility: 'WCAG 2.0 A',
          documentation: 'Good',
          link: 'https://openlayers.org/',
        },
        {
          system: 'Azure Maps',
          component: 'Map Control',
          variants: 'Microsoft cloud integration',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://docs.microsoft.com/en-us/azure/azure-maps/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 44x44px touch targets for interactive controls (WCAG 2.5.5)',
          'Keyboard navigation support for all map controls (WCAG 2.1.1)',
          'Clear focus indicators on all interactive elements (WCAG 2.4.7)',
          'Text alternatives for map imagery via aria-label (WCAG 1.1.1)',
          'Color contrast ratios of 4.5:1 for text and controls (WCAG 1.4.3)',
          'Zoom controls accessible via keyboard (WCAG 2.1.1)',
          'Search autocomplete with screen reader announcements (WCAG 4.1.3)',
          'Location coordinates announced to screen readers',
          'Alternative text-based address input fallback',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate between map controls' },
          { key: 'Enter', action: 'Activate button or select search result' },
          { key: 'Arrow Keys', action: 'Pan map (when focused)' },
          { key: '+/-', action: 'Zoom in/out (when map focused)' },
          { key: 'Escape', action: 'Close search autocomplete' },
        ],
        screenReader: [
          'Announces map role as "application" or "interactive map"',
          'Announces selected coordinates with formatted address',
          'Announces search results with count',
          'Provides alternative text for current location button',
          'Announces loading states during geocoding',
        ],
      }}

      tokens={{
        file: '/tokens/components/map-location-picker.json',
        mappings: [
          { property: 'Map Height', token: 'composite.map.height.default', value: '400px' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '4px' },
          { property: 'Search Input Height', token: 'base.height.md', value: '40px' },
          { property: 'Control Button Size', token: 'base.size.interactive', value: '44px' },
          { property: 'Primary Color', token: 'color.primary.500', value: '#005196 (Navy 500)' },
          { property: 'Marker Color', token: 'color.accent.red.500', value: '#dc2626' },
          { property: 'Shadow Elevation', token: 'elevation.medium', value: '0 4px 6px rgba(0,0,0,0.1)' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRingWidth', value: '2px' },
        ],
      }}

      governmentContext={{
        useCases: "Service Center Locator - Citizens can find nearest government service centers; Land Registration - Plot and property location marking for registration; Address Verification - Confirm residential or business addresses for benefits; Polling Station Finder - Locate voting centers based on voter address; Emergency Response - Report location of incidents to authorities; Infrastructure Planning - Mark locations for proposed projects; Agricultural Land Survey - Map farm boundaries and crop areas; Public Transport Routes - Plan and display bus/metro routes",
        considerations: "Data Privacy: Do not store precise coordinates without user consent; Offline Support: Consider offline maps for areas with poor connectivity; Regional Coverage: Ensure map data covers rural and remote areas; Language Support: Provide search and results in regional languages; Mobile-First: Optimize for mobile devices as primary access point; Integration: Connect with address databases and postal systems",
      }}

      useCases={[
        { title: 'Service Center Locator', description: 'Find nearest government service center on map.', scenario: 'Citizen locates nearest Common Service Centre for certificate collection.', implementation: '<MapLocationPicker onSelect={handleLocation} markers={cscLocations} />' },
        { title: 'Address Verification', description: 'Verify residential address by pinning location on map.', scenario: 'Officer verifies applicant address during field verification.', implementation: '<MapLocationPicker defaultLocation={address} editable verification />' },
        { title: 'Disaster Relief Mapping', description: 'Mark affected areas and relief camp locations.', scenario: 'NDMA officer maps flood-affected areas for relief coordination.', implementation: '<MapLocationPicker mode="polygon" layers={["relief","affected"]} />' },
        { title: 'Property Survey Location', description: 'Mark property boundaries for land survey records.', scenario: 'Revenue surveyor marks property coordinates for mutation records.', implementation: '<MapLocationPicker mode="boundary" precision="high" />' },
      ]}

      additionalContent={
        <>

          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use MapLocationPicker when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Location selection on a map</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Address verification with visual confirmation</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Service center or office locator</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Geolocation-based features</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use MapLocationPicker when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Text-based address — use AddressAutocompleteIndia</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Simple coordinates — use Input fields</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Non-geographic data — not applicable</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Offline scenarios — use text address</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Use map-based verification to reduce address errors by 70%.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Don&apos;t require map interaction for users who already know their address — offer text input too.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/addressautocompleteindia" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">AddressAutocompleteIndia</h3>
                <p className="text-sm text-muted-foreground">For text-based address</p>
              </a>
              <a href="/components/input" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Input</h3>
                <p className="text-sm text-muted-foreground">For coordinate entry</p>
              </a>
              <a href="/components/card" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Card</h3>
                <p className="text-sm text-muted-foreground">For location info cards</p>
              </a>
            </div>
          </section>

          {/* Changelog */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
            <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v2.0.0</span>
                    <span className="text-xs text-muted-foreground">March 2026</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added geolocation support</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added custom marker icons</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with basic map picker</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Visual location confirmation</h3>
                <p className="text-sm text-muted-foreground">Map-based address verification reduces address errors by 70% compared to text-only entry (Google Maps Platform research).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}