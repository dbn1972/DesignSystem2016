import{j as e,n as s,S as l}from"./index-BYMLq1ET.js";import{C as c}from"./ComponentDocumentation-CxrYZXwp.js";import{M as d}from"./map-pin-CC0MBVat.js";import{N as p}from"./navigation-B32QF8jq.js";import"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";const o=({center:t={lat:28.6139,lng:77.209},zoom:m=12,searchEnabled:a=!1,currentLocationButton:n=!1,marker:r=!0,allowMultiple:u=!1,...i})=>e.jsxs("div",{className:"relative w-full bg-gray-100 border border-gray-300 rounded overflow-hidden",style:{height:"300px"},...i,children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(s,{className:"w-12 h-12 text-gray-400 mx-auto mb-2"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Map Container"}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[t.lat.toFixed(4),", ",t.lng.toFixed(4)]})]})}),r&&e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:e.jsx(d,{className:"w-8 h-8 text-red-600 drop-shadow-lg"})}),a&&e.jsxs("div",{className:"absolute top-4 left-4 right-4 bg-white rounded shadow-lg p-3 flex items-center gap-2",children:[e.jsx(l,{className:"w-4 h-4 text-gray-400"}),e.jsx("input",{type:"text",placeholder:"Search location...",className:"flex-1 outline-none text-sm"})]}),n&&e.jsx("button",{className:"absolute bottom-4 right-4 bg-white p-2 rounded shadow-lg hover:bg-gray-50 min-h-[44px] min-w-[44px] flex items-center justify-center",children:e.jsx(p,{className:"w-5 h-5 text-[#005196]"})})]});function L(){return e.jsx(c,{name:"Map Location Picker",description:"Advanced interactive component for selecting geographic locations on a map. Ideal for government services requiring address verification, service center location selection, land registration, and other location-based applications.",category:"Government Services",maturity:"beta",tier:"composite",since:"v2.0.0",updated:"v2.2.0",props:[{name:"center",type:"{ lat: number; lng: number }",default:"{ lat: 28.6139, lng: 77.2090 }",required:!1,description:"Initial center coordinates of the map. Defaults to New Delhi, India."},{name:"zoom",type:"number",default:"12",required:!1,description:"Initial zoom level (1-20). Higher values show more detail. City level is typically 12-14."},{name:"onLocationSelect",type:"(location: { lat: number; lng: number; address?: string }) => void",required:!0,description:"Callback fired when user selects a location. Receives coordinates and optional reverse-geocoded address."},{name:"searchEnabled",type:"boolean",default:"false",required:!1,description:"Enable location search with autocomplete. Allows users to search for places by name or address."},{name:"currentLocationButton",type:"boolean",default:"false",required:!1,description:"Show button to detect and navigate to user's current location using browser geolocation API."},{name:"marker",type:"boolean | { lat: number; lng: number; label?: string }",default:"true",required:!1,description:"Show marker at selected location. Can be boolean or marker configuration object."},{name:"allowMultiple",type:"boolean",default:"false",required:!1,description:"Allow selection of multiple locations. Returns array of locations in onLocationSelect."},{name:"district",type:"string",required:!1,description:"Restrict map to specific district. Useful for district-level services."},{name:"state",type:"string",required:!1,description:"Restrict map to specific state. Useful for state-level services."},{name:"minZoom",type:"number",default:"4",required:!1,description:"Minimum allowed zoom level."},{name:"maxZoom",type:"number",default:"18",required:!1,description:"Maximum allowed zoom level."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Disable map interaction. Shows read-only map with selected location."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply to map container."}],examples:[{title:"Single Location Picker",description:"Basic map for selecting a single location. User clicks on map to place marker.",code:`import { MapLocationPicker } from '@ux4g/react-composite';
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
}`,preview:e.jsxs("div",{children:[e.jsx(o,{}),e.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Click on the map to select a location"})]})},{title:"Search with Autocomplete",description:"Map with integrated search functionality for finding locations by name or address.",code:`import { MapLocationPicker } from '@ux4g/react-composite';

function Example() {
  return (
    <MapLocationPicker
      center={{ lat: 28.6139, lng: 77.2090 }}
      zoom={12}
      searchEnabled
      onLocationSelect={(loc) => {
        console.log('Selected:', loc.address || loc);
      }}
    />
  );
}`,preview:e.jsx(o,{searchEnabled:!0})},{title:"Current Location Detection",description:"Map with button to detect user's current location using browser geolocation.",code:`import { MapLocationPicker } from '@ux4g/react-composite';

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
}`,preview:e.jsx(o,{searchEnabled:!0,currentLocationButton:!0})},{title:"District/State Selection",description:"Restrict map view to specific district or state boundaries for localized services.",code:`import { MapLocationPicker } from '@ux4g/react-composite';

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
}`,preview:e.jsxs("div",{children:[e.jsx(o,{searchEnabled:!0}),e.jsx("p",{className:"mt-2 text-xs text-gray-600",children:"Restricted to: New Delhi District, Delhi"})]})},{title:"Address Form Integration",description:"Integration with address form for complete location data capture.",code:`import { MapLocationPicker } from '@ux4g/react-composite';
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

      <div className="grid grid-cols-2 gap-4">
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
}`,preview:e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{searchEnabled:!0,currentLocationButton:!0}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Address"}),e.jsx("input",{className:"w-full px-3 py-2 border rounded"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"City"}),e.jsx("input",{className:"w-full px-3 py-2 border rounded"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"State"}),e.jsx("input",{className:"w-full px-3 py-2 border rounded"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"PIN Code"}),e.jsx("input",{className:"w-full px-3 py-2 border rounded"})]})]})]})}],reactCode:{component:`import React, { useState, useEffect, useRef } from 'react';
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
            className="w-full px-4 py-2 bg-white rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-[#005196]"
            aria-label="Search for location"
          />
        </div>
      )}

      {currentLocationButton && (
        <button
          onClick={handleCurrentLocation}
          className="absolute bottom-4 right-4 bg-white p-3 rounded shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#005196] min-h-[44px] min-w-[44px]"
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

MapLocationPicker.displayName = 'MapLocationPicker';`,types:`export interface LocationData {
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
}`,variants:`// Using Leaflet (Open Source Alternative)
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
}`},angularCode:{component:`import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
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
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapLocationPickerComponent } from './map-location-picker.component';

@NgModule({
  declarations: [MapLocationPickerComponent],
  imports: [CommonModule, FormsModule],
  exports: [MapLocationPickerComponent]
})
export class MapLocationPickerModule { }`,types:`export interface LocationData {
  lat: number;
  lng: number;
  address?: string;
}`},comparisons:[{system:"Google Maps Platform",component:"Maps JavaScript API",variants:"Full-featured commercial solution",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://developers.google.com/maps/documentation/javascript"},{system:"Leaflet",component:"Map Container",variants:"Open-source, lightweight",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://leafletjs.com/"},{system:"Mapbox GL JS",component:"Map",variants:"Vector tiles, customizable",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://docs.mapbox.com/mapbox-gl-js/"},{system:"OpenLayers",component:"Map",variants:"Open-source, feature-rich",accessibility:"WCAG 2.0 A",documentation:"Good",link:"https://openlayers.org/"},{system:"Azure Maps",component:"Map Control",variants:"Microsoft cloud integration",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://docs.microsoft.com/en-us/azure/azure-maps/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Minimum 44x44px touch targets for interactive controls (WCAG 2.5.5)","Keyboard navigation support for all map controls (WCAG 2.1.1)","Clear focus indicators on all interactive elements (WCAG 2.4.7)","Text alternatives for map imagery via aria-label (WCAG 1.1.1)","Color contrast ratios of 4.5:1 for text and controls (WCAG 1.4.3)","Zoom controls accessible via keyboard (WCAG 2.1.1)","Search autocomplete with screen reader announcements (WCAG 4.1.3)","Location coordinates announced to screen readers","Alternative text-based address input fallback"],keyboardSupport:[{key:"Tab",action:"Navigate between map controls"},{key:"Enter",action:"Activate button or select search result"},{key:"Arrow Keys",action:"Pan map (when focused)"},{key:"+/-",action:"Zoom in/out (when map focused)"},{key:"Escape",action:"Close search autocomplete"}],screenReader:['Announces map role as "application" or "interactive map"',"Announces selected coordinates with formatted address","Announces search results with count","Provides alternative text for current location button","Announces loading states during geocoding"]},tokens:{file:"/tokens/components/map-location-picker.json",mappings:[{property:"Map Height",token:"composite.map.height.default",value:"400px"},{property:"Border Radius",token:"base.borderRadius",value:"4px"},{property:"Search Input Height",token:"base.height.md",value:"40px"},{property:"Control Button Size",token:"base.size.interactive",value:"44px"},{property:"Primary Color",token:"color.primary.500",value:"#005196 (Navy 500)"},{property:"Marker Color",token:"color.accent.red.500",value:"#dc2626"},{property:"Shadow Elevation",token:"elevation.medium",value:"0 4px 6px rgba(0,0,0,0.1)"},{property:"Focus Ring Width",token:"accessibility.focusRingWidth",value:"2px"}]},governmentContext:{useCases:["Service Center Locator - Citizens can find nearest government service centers","Land Registration - Plot and property location marking for registration","Address Verification - Confirm residential or business addresses for benefits","Polling Station Finder - Locate voting centers based on voter address","Emergency Response - Report location of incidents to authorities","Infrastructure Planning - Mark locations for proposed projects","Agricultural Land Survey - Map farm boundaries and crop areas","Public Transport Routes - Plan and display bus/metro routes"],considerations:["Data Privacy: Do not store precise coordinates without user consent","Offline Support: Consider offline maps for areas with poor connectivity","Regional Coverage: Ensure map data covers rural and remote areas","Language Support: Provide search and results in regional languages","Mobile-First: Optimize for mobile devices as primary access point","Integration: Connect with address databases and postal systems"]}})}export{L as default};
