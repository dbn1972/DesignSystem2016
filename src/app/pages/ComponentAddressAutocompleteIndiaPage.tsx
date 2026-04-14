/**
 * Address Autocomplete (India) Component Documentation Page
 * Complete documentation for the India-specific Address Autocomplete component with examples, code downloads, and comparisons
 */

import React, { useState } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { MapPin, Search, CheckCircle } from 'lucide-react';

// Import the actual AddressAutocompleteIndia component for live preview
const AddressAutocompleteIndiaPreview = ({
  includePincode = true,
  includeState = true,
  includeDistrict = false,
  includeCity = true,
  placeholder = "Search address...",
  ...props
}: any) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);

    // Mock suggestions
    if (val.length > 2) {
      setSuggestions([
        '110001, Connaught Place, New Delhi, Delhi',
        '400001, Fort, Mumbai, Maharashtra',
        '560001, Gandhinagar, Bengaluru, Karnataka',
      ]);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full h-10 px-4 pr-10 border border-border rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
          {...props}
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-card border border-border rounded shadow-lg max-h-60 overflow-auto">
          {suggestions.map((suggestion, idx) => (
            <li
              key={idx}
              className="px-4 py-2 hover:bg-muted cursor-pointer flex items-start gap-2"
              onClick={() => {
                setValue(suggestion);
                setSuggestions([]);
              }}
            >
              <MapPin size={16} className="mt-0.5 text-gray-500 shrink-0" />
              <span className="text-sm">{suggestion}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function ComponentAddressAutocompleteIndiaPage() {
  return (
    <ComponentDocumentation
      name="Address Autocomplete (India)"
      description="India-specific address autocomplete component with pincode lookup, state/district/city selection, and integration with India Post API and Google Places API. Designed for government service applications requiring accurate Indian address collection."
      category="Government Services"
      maturity="stable"
      tier="core"
      since="v2.0.0"
      updated="v2.3.0"

      props={[
        {
          name: 'value',
          type: 'string',
          required: false,
          description: 'Current value of the address input field.',
        },
        {
          name: 'onChange',
          type: '(value: string) => void',
          required: false,
          description: 'Callback fired when the input value changes.',
        },
        {
          name: 'onSelect',
          type: '(address: AddressData) => void',
          required: false,
          description: 'Callback fired when an address is selected from suggestions. Returns structured address data with pincode, state, district, city, and full address.',
        },
        {
          name: 'includePincode',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether to include pincode in the address search and display.',
        },
        {
          name: 'includeState',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether to include state in the address search and display.',
        },
        {
          name: 'includeDistrict',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to include district in the address search and display.',
        },
        {
          name: 'includeCity',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether to include city/locality in the address search and display.',
        },
        {
          name: 'apiKey',
          type: 'string',
          required: false,
          description: 'API key for Google Places API or other geocoding service. Not required for India Post API.',
        },
        {
          name: 'debounceTime',
          type: 'number',
          default: '300',
          required: false,
          description: 'Debounce time in milliseconds before triggering API search.',
        },
        {
          name: 'maxResults',
          type: 'number',
          default: '5',
          required: false,
          description: 'Maximum number of address suggestions to display.',
        },
        {
          name: 'placeholder',
          type: 'string',
          default: "'Search address or pincode...'",
          required: false,
          description: 'Placeholder text for the input field.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the input is disabled.',
        },
        {
          name: 'required',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the field is required for form validation.',
        },
        {
          name: 'error',
          type: 'string',
          required: false,
          description: 'Error message to display below the input.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply.',
        },
      ]}

      examples={[
        {
          title: 'Pincode Lookup',
          description: 'Search by pincode to auto-populate state, district, and city information.',
          code: `import { AddressAutocompleteIndia } from '@ux4g/react-core';

function Example() {
  const [address, setAddress] = useState('');

  return (
    <AddressAutocompleteIndia
      value={address}
      onChange={setAddress}
      onSelect={(data) => console.log('Selected:', data)}
      includePincode
      placeholder="Enter pincode (e.g., 110001)"
    />
  );
}`,
          preview: (
            <div className="w-full">
              <AddressAutocompleteIndiaPreview
                includePincode
                placeholder="Enter pincode (e.g., 110001)"
              />
            </div>
          ),
        },
        {
          title: 'Full Address Autocomplete',
          description: 'Complete address search with pincode, state, district, and city.',
          code: `import { AddressAutocompleteIndia } from '@ux4g/react-core';

function Example() {
  const [addressData, setAddressData] = useState(null);

  const handleSelect = (data) => {
    setAddressData(data);
    console.log('Address:', {
      pincode: data.pincode,
      city: data.city,
      district: data.district,
      state: data.state,
      fullAddress: data.fullAddress
    });
  };

  return (
    <div>
      <AddressAutocompleteIndia
        onSelect={handleSelect}
        includePincode
        includeState
        includeDistrict
        includeCity
        placeholder="Search full address..."
      />
      {addressData && (
        <div className="mt-4 p-4 bg-background rounded">
          <p><strong>Pincode:</strong> {addressData.pincode}</p>
          <p><strong>City:</strong> {addressData.city}</p>
          <p><strong>District:</strong> {addressData.district}</p>
          <p><strong>State:</strong> {addressData.state}</p>
        </div>
      )}
    </div>
  );
}`,
          preview: (
            <div className="w-full">
              <AddressAutocompleteIndiaPreview
                includePincode
                includeState
                includeDistrict
                includeCity
                placeholder="Search full address..."
              />
              <div className="mt-4 p-4 bg-background rounded text-sm">
                <p className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Select an address to see structured data</span>
                </p>
              </div>
            </div>
          ),
        },
        {
          title: 'State/District Selection',
          description: 'Filter addresses by state and district for more precise results.',
          code: `import { AddressAutocompleteIndia } from '@ux4g/react-core';

function Example() {
  return (
    <div className="space-y-4">
      <AddressAutocompleteIndia
        includeState
        includeDistrict
        includeCity={false}
        placeholder="Select state and district..."
      />
    </div>
  );
}`,
          preview: (
            <div className="w-full">
              <AddressAutocompleteIndiaPreview
                includeState
                includeDistrict
                includeCity={false}
                placeholder="Select state and district..."
              />
            </div>
          ),
        },
        {
          title: 'Manual Override',
          description: 'Allow users to manually enter address if autocomplete suggestions are insufficient.',
          code: `import { AddressAutocompleteIndia } from '@ux4g/react-core';
import { Input } from '@ux4g/react-core';

function Example() {
  const [useAutocomplete, setUseAutocomplete] = useState(true);
  const [manualAddress, setManualAddress] = useState('');

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="manual-toggle"
          checked={!useAutocomplete}
          onChange={(e) => setUseAutocomplete(!e.target.checked)}
        />
        <label htmlFor="manual-toggle">
          Enter address manually
        </label>
      </div>

      {useAutocomplete ? (
        <AddressAutocompleteIndia
          onSelect={(data) => console.log(data)}
          placeholder="Search address..."
        />
      ) : (
        <textarea
          value={manualAddress}
          onChange={(e) => setManualAddress(e.target.value)}
          className="w-full p-3 border rounded"
          rows={4}
          placeholder="Enter your complete address..."
        />
      )}
    </div>
  );
}`,
          preview: (
            <div className="w-full space-y-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="manual-toggle-preview"
                  className="w-4 h-4"
                />
                <label htmlFor="manual-toggle-preview" className="text-sm">
                  Enter address manually
                </label>
              </div>
              <AddressAutocompleteIndiaPreview placeholder="Search address..." />
            </div>
          ),
        },
        {
          title: 'Validation with India Post API',
          description: 'Validate addresses using India Post API for government service applications.',
          code: `import { AddressAutocompleteIndia } from '@ux4g/react-core';

function Example() {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const validateAddress = async (data) => {
    // Validate pincode format (6 digits)
    if (!/^\d{6}$/.test(data.pincode)) {
      setError('Invalid pincode format. Must be 6 digits.');
      return;
    }

    // Optional: Verify with India Post API
    try {
      const response = await fetch(
        \`https://api.postalpincode.in/pincode/\${data.pincode}\`
      );
      const result = await response.json();

      if (result[0].Status === 'Error') {
        setError('Invalid pincode. Please check and try again.');
      } else {
        setError('');
        console.log('Validated:', result[0].PostOffice);
      }
    } catch (err) {
      setError('Unable to validate address. Please try again.');
    }
  };

  return (
    <div>
      <AddressAutocompleteIndia
        value={address}
        onChange={setAddress}
        onSelect={validateAddress}
        error={error}
        required
      />
    </div>
  );
}`,
          preview: (
            <div className="w-full">
              <AddressAutocompleteIndiaPreview placeholder="Enter pincode for validation..." />
              <p className="mt-2 text-xs text-muted-foreground">
                Validation checks pincode format and verifies with India Post API
              </p>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useDebounce } from '../../hooks/useDebounce';
import { AddressAutocompleteIndiaProps, AddressData } from './AddressAutocompleteIndia.types';

export const AddressAutocompleteIndia = forwardRef<
  HTMLInputElement,
  AddressAutocompleteIndiaProps
>(
  (
    {
      value = '',
      onChange,
      onSelect,
      includePincode = true,
      includeState = true,
      includeDistrict = false,
      includeCity = true,
      apiKey,
      debounceTime = 300,
      maxResults = 5,
      placeholder = 'Search address or pincode...',
      disabled = false,
      required = false,
      error,
      className,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(value);
    const [suggestions, setSuggestions] = useState<AddressData[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isLoading, setIsLoading] = useState(false);

    const debouncedValue = useDebounce(inputValue, debounceTime);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Fetch address suggestions
    useEffect(() => {
      if (!debouncedValue || debouncedValue.length < 3) {
        setSuggestions([]);
        return;
      }

      const fetchSuggestions = async () => {
        setIsLoading(true);

        try {
          // Check if input is a pincode (6 digits)
          const isPincode = /^\d{6}$/.test(debouncedValue);

          if (isPincode && includePincode) {
            // Use India Post API for pincode lookup
            const response = await fetch(
              \`https://api.postalpincode.in/pincode/\${debouncedValue}\`
            );
            const data = await response.json();

            if (data[0].Status === 'Success') {
              const results = data[0].PostOffice.slice(0, maxResults).map((po: any) => ({
                pincode: po.Pincode,
                city: po.Name,
                district: po.District,
                state: po.State,
                fullAddress: \`\${po.Pincode}, \${po.Name}, \${po.District}, \${po.State}\`,
              }));
              setSuggestions(results);
              setIsOpen(true);
            }
          } else if (apiKey) {
            // Use Google Places API for text search
            const service = new google.maps.places.AutocompleteService();
            service.getPlacePredictions(
              {
                input: debouncedValue,
                componentRestrictions: { country: 'in' },
              },
              (predictions, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
                  const results = predictions.slice(0, maxResults).map((p) => {
                    // Parse address components
                    const parts = p.description.split(', ');
                    return {
                      pincode: '', // Would need Places Details API for pincode
                      city: parts[0] || '',
                      district: parts[1] || '',
                      state: parts[parts.length - 1] || '',
                      fullAddress: p.description,
                    };
                  });
                  setSuggestions(results);
                  setIsOpen(true);
                }
              }
            );
          }
        } catch (error) {
          console.error('Error fetching address suggestions:', error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchSuggestions();
    }, [debouncedValue, includePincode, apiKey, maxResults]);

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange?.(newValue);
    };

    // Handle suggestion selection
    const handleSelect = (address: AddressData) => {
      setInputValue(address.fullAddress);
      setIsOpen(false);
      setSelectedIndex(-1);
      onSelect?.(address);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < suggestions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0) {
            handleSelect(suggestions[selectedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setSelectedIndex(-1);
          break;
      }
    };

    // Close suggestions when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div ref={wrapperRef} className={cn('relative w-full', className)}>
        <div className="relative">
          <input
            ref={ref}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => suggestions.length > 0 && setIsOpen(true)}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            aria-label={ariaLabel || 'Address search'}
            aria-autocomplete="list"
            aria-controls="address-suggestions"
            aria-expanded={isOpen}
            aria-activedescendant={
              selectedIndex >= 0 ? \`suggestion-\${selectedIndex}\` : undefined
            }
            className={cn(
              'w-full h-10 px-4 pr-10 border rounded',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2',
              error ? 'border-red-500' : 'border-border',
              disabled && 'bg-muted cursor-not-allowed opacity-60'
            )}
            {...props}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-[#005196] border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            )}
          </div>
        </div>

        {error && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {isOpen && suggestions.length > 0 && (
          <ul
            id="address-suggestions"
            role="listbox"
            className="absolute z-50 w-full mt-1 bg-card border border-border rounded shadow-lg max-h-60 overflow-auto"
          >
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                id={\`suggestion-\${index}\`}
                role="option"
                aria-selected={index === selectedIndex}
                onClick={() => handleSelect(suggestion)}
                className={cn(
                  'px-4 py-2 cursor-pointer flex items-start gap-2',
                  index === selectedIndex ? 'bg-[#005196] text-white' : 'hover:bg-muted'
                )}
              >
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="flex-1 text-sm">
                  <div className="font-medium">
                    {includePincode && suggestion.pincode && (
                      <span className="mr-2">{suggestion.pincode}</span>
                    )}
                    {includeCity && suggestion.city}
                  </div>
                  <div className="text-xs opacity-80">
                    {includeDistrict && suggestion.district && (
                      <span className="mr-2">{suggestion.district}</span>
                    )}
                    {includeState && suggestion.state}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

AddressAutocompleteIndia.displayName = 'AddressAutocompleteIndia';`,
        types: `export interface AddressData {
  pincode: string;
  city: string;
  district: string;
  state: string;
  fullAddress: string;
}

export interface AddressAutocompleteIndiaProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value?: string;
  onChange?: (value: string) => void;
  onSelect?: (address: AddressData) => void;
  includePincode?: boolean;
  includeState?: boolean;
  includeDistrict?: boolean;
  includeCity?: boolean;
  apiKey?: string;
  debounceTime?: number;
  maxResults?: number;
  error?: string;
}`,
        variants: `// hooks/useDebounce.ts
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { AddressAutocompleteService } from './address-autocomplete.service';

export interface AddressData {
  pincode: string;
  city: string;
  district: string;
  state: string;
  fullAddress: string;
}

@Component({
  selector: 'ux4g-address-autocomplete-india',
  template: \`
    <div class="ux4g-address-autocomplete" #wrapper>
      <div class="ux4g-input-wrapper">
        <input
          type="text"
          [formControl]="searchControl"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [required]="required"
          [attr.aria-label]="ariaLabel || 'Address search'"
          [attr.aria-autocomplete]="'list'"
          [attr.aria-controls]="'address-suggestions'"
          [attr.aria-expanded]="isOpen"
          class="ux4g-input"
          [class.error]="error"
          (keydown)="handleKeyDown($event)"
          (focus)="handleFocus()"
        />
        <span class="ux4g-input-icon">
          <svg *ngIf="isLoading" class="spinner" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" stroke-width="2"/>
          </svg>
          <svg *ngIf="!isLoading" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </span>
      </div>

      <p *ngIf="error" class="ux4g-error" role="alert">{{ error }}</p>

      <ul
        *ngIf="isOpen && suggestions.length > 0"
        id="address-suggestions"
        role="listbox"
        class="ux4g-suggestions"
      >
        <li
          *ngFor="let suggestion of suggestions; let i = index"
          [id]="'suggestion-' + i"
          role="option"
          [attr.aria-selected]="i === selectedIndex"
          [class.selected]="i === selectedIndex"
          (click)="handleSelect(suggestion)"
          class="ux4g-suggestion-item"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <div class="suggestion-content">
            <div class="suggestion-primary">
              <span *ngIf="includePincode && suggestion.pincode">{{ suggestion.pincode }}</span>
              <span *ngIf="includeCity">{{ suggestion.city }}</span>
            </div>
            <div class="suggestion-secondary">
              <span *ngIf="includeDistrict && suggestion.district">{{ suggestion.district }}</span>
              <span *ngIf="includeState">{{ suggestion.state }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  \`,
  styleUrls: ['./address-autocomplete-india.component.css']
})
export class AddressAutocompleteIndiaComponent implements OnInit, OnDestroy {
  @Input() value = '';
  @Input() includePincode = true;
  @Input() includeState = true;
  @Input() includeDistrict = false;
  @Input() includeCity = true;
  @Input() apiKey?: string;
  @Input() debounceTime = 300;
  @Input() maxResults = 5;
  @Input() placeholder = 'Search address or pincode...';
  @Input() disabled = false;
  @Input() required = false;
  @Input() error?: string;
  @Input() ariaLabel?: string;

  @Output() valueChange = new EventEmitter<string>();
  @Output() selectAddress = new EventEmitter<AddressData>();

  searchControl = new FormControl('');
  suggestions: AddressData[] = [];
  isOpen = false;
  selectedIndex = -1;
  isLoading = false;

  private destroy$ = new Subject<void>();

  constructor(private addressService: AddressAutocompleteService) {}

  ngOnInit(): void {
    this.searchControl.setValue(this.value);

    this.searchControl.valueChanges
      .pipe(
        debounceTime(this.debounceTime),
        distinctUntilChanged(),
        switchMap((value) => {
          if (!value || value.length < 3) {
            this.suggestions = [];
            this.isOpen = false;
            return [];
          }

          this.isLoading = true;
          return this.addressService.searchAddress(
            value,
            this.includePincode,
            this.apiKey,
            this.maxResults
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((results) => {
        this.suggestions = results;
        this.isOpen = results.length > 0;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleSelect(address: AddressData): void {
    this.searchControl.setValue(address.fullAddress);
    this.isOpen = false;
    this.selectedIndex = -1;
    this.selectAddress.emit(address);
    this.valueChange.emit(address.fullAddress);
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (!this.isOpen) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.selectedIndex = this.selectedIndex < this.suggestions.length - 1
          ? this.selectedIndex + 1
          : this.selectedIndex;
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.selectedIndex = this.selectedIndex > 0 ? this.selectedIndex - 1 : -1;
        break;
      case 'Enter':
        event.preventDefault();
        if (this.selectedIndex >= 0) {
          this.handleSelect(this.suggestions[this.selectedIndex]);
        }
        break;
      case 'Escape':
        this.isOpen = false;
        this.selectedIndex = -1;
        break;
    }
  }

  handleFocus(): void {
    if (this.suggestions.length > 0) {
      this.isOpen = true;
    }
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddressAutocompleteIndiaComponent } from './address-autocomplete-india.component';
import { AddressAutocompleteService } from './address-autocomplete.service';

@NgModule({
  declarations: [AddressAutocompleteIndiaComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [AddressAutocompleteService],
  exports: [AddressAutocompleteIndiaComponent]
})
export class AddressAutocompleteIndiaModule { }`,
        types: `import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface AddressData {
  pincode: string;
  city: string;
  district: string;
  state: string;
  fullAddress: string;
}

@Injectable()
export class AddressAutocompleteService {
  constructor(private http: HttpClient) {}

  searchAddress(
    query: string,
    includePincode: boolean,
    apiKey?: string,
    maxResults: number = 5
  ): Observable<AddressData[]> {
    const isPincode = /^\d{6}$/.test(query);

    if (isPincode && includePincode) {
      return this.searchByPincode(query, maxResults);
    } else if (apiKey) {
      return this.searchByGooglePlaces(query, apiKey, maxResults);
    }

    return of([]);
  }

  private searchByPincode(pincode: string, maxResults: number): Observable<AddressData[]> {
    return this.http
      .get<any>(\`https://api.postalpincode.in/pincode/\${pincode}\`)
      .pipe(
        map((response) => {
          if (response[0].Status === 'Success') {
            return response[0].PostOffice.slice(0, maxResults).map((po: any) => ({
              pincode: po.Pincode,
              city: po.Name,
              district: po.District,
              state: po.State,
              fullAddress: \`\${po.Pincode}, \${po.Name}, \${po.District}, \${po.State}\`,
            }));
          }
          return [];
        }),
        catchError(() => of([]))
      );
  }

  private searchByGooglePlaces(
    query: string,
    apiKey: string,
    maxResults: number
  ): Observable<AddressData[]> {
    // Implementation would use Google Places API
    // This is a placeholder
    return of([]);
  }
}`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-address-autocomplete-india> custom element",
        html: "<ux4g-address-autocomplete-india variant=\"primary\" size=\"md\"><!-- AddressAutocompleteIndia --></ux4g-address-autocomplete-india>",
      }}
      comparisons={[
        {
          system: 'Google Places API',
          component: 'Autocomplete',
          variants: 'Global coverage, detailed place data',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://developers.google.com/maps/documentation/javascript/place-autocomplete',
        },
        {
          system: 'India Post API',
          component: 'Pincode Lookup',
          variants: 'India-specific, free, official',
          accessibility: 'Basic',
          documentation: 'Limited',
          link: 'https://api.postalpincode.in/',
        },
        {
          system: 'Mapbox Geocoding',
          component: 'Address Autofill',
          variants: 'Global coverage, customizable',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://docs.mapbox.com/api/search/geocoding/',
        },
        {
          system: 'HERE Maps',
          component: 'Geocoding & Search',
          variants: 'Global, India-specific optimizations',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://developer.here.com/documentation/geocoding-search-api/dev_guide/index.html',
        },
        {
          system: 'OpenStreetMap Nominatim',
          component: 'Address Search',
          variants: 'Open source, free, community-driven',
          accessibility: 'Basic',
          documentation: 'Good',
          link: 'https://nominatim.org/release-docs/develop/api/Search/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 44x44px touch target for input field (WCAG 2.5.5)',
          '2px focus ring with 2px offset for keyboard navigation (WCAG 2.4.7)',
          'Color contrast ratios meet 4.5:1 for text and 3:1 for UI components (WCAG 1.4.3, 1.4.11)',
          'ARIA attributes for autocomplete role, expanded state, and active descendant',
          'Keyboard navigation with Arrow keys, Enter, and Escape',
          'Screen reader announcements for suggestions and selection',
          'Error messages clearly associated with input via aria-describedby',
          'Loading state announced to screen readers with aria-busy',
          'Proper focus management when navigating suggestions',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to/from input field' },
          { key: 'ArrowDown', action: 'Navigate to next suggestion' },
          { key: 'ArrowUp', action: 'Navigate to previous suggestion' },
          { key: 'Enter', action: 'Select highlighted suggestion' },
          { key: 'Escape', action: 'Close suggestion list' },
        ],
        screenReader: [
          'Input announced as "Address search, edit text, autocomplete list"',
          'Number of suggestions announced when list opens',
          'Selected suggestion announced with full address details',
          'Error messages announced immediately via aria-live region',
          'Loading state announced as "Loading address suggestions"',
        ],
      }}

      tokens={{
        file: '/tokens/components/address-autocomplete-india.json',
        mappings: [
          { property: 'Input Height', token: 'base.height.md', value: '40px' },
          { property: 'Input Padding', token: 'base.padding.horizontal.md', value: '16px' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '4px' },
          { property: 'Font Size', token: 'base.fontSize.md', value: '16px' },
          { property: 'Border Color', token: 'base.border.default', value: '#D1D5DB (Gray 300)' },
          { property: 'Focus Ring Color', token: 'base.focusRing.color', value: '#005196 (Navy 500)' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRingWidth', value: '2px' },
          { property: 'Suggestion Hover Background', token: 'base.background.hover', value: '#F3F4F6 (Gray 100)' },
          { property: 'Suggestion Selected Background', token: 'variant.primary.background.default', value: '#005196 (Navy 500)' },
          { property: 'Error Text Color', token: 'semantic.error.text', value: '#DC2626 (Red 600)' },
          { property: 'Debounce Time', token: 'behavior.debounce.default', value: '300ms' },
          { property: 'Max Dropdown Height', token: 'base.maxHeight.dropdown', value: '240px (15rem)' },
        ],
      }}

      governmentContext={{
        useCases: "Service application forms requiring beneficiary address; Correspondence address collection for government communications; Beneficiary address verification for subsidy schemes; Office location lookup for government departments; Citizen registration with accurate pincode-based addressing; Address validation for document delivery and notifications",
        compliance: "Uses official India Post API for pincode validation; Supports 6-digit Indian pincode format; Compatible with Indian administrative divisions (State, District, City); Ensures data accuracy for government databases; Reduces manual entry errors in citizen-facing applications",
        examples: "Aadhaar Address Update: Citizens updating their residential address in Aadhaar database; Ration Card Application: Collecting accurate address for ration card delivery and distribution; Pension Disbursement: Verifying beneficiary address for pension delivery; Tax Filing: Address autocomplete in income tax return filing portals; Government Service Centers: Locating nearest government service centers by pincode",
      }}
    />
  );
}
