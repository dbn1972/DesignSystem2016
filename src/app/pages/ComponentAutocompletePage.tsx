/**
 * Autocomplete Component Documentation Page
 * Complete documentation for the Autocomplete component with examples, code downloads, and comparisons
 */

import React, { useState, useRef, useEffect } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Search, ChevronDown, X, Check } from 'lucide-react';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';

// Indian cities data for realistic examples
const INDIAN_CITIES = [
  { id: '1', name: 'Mumbai', state: 'Maharashtra' },
  { id: '2', name: 'Delhi', state: 'Delhi' },
  { id: '3', name: 'Bangalore', state: 'Karnataka' },
  { id: '4', name: 'Hyderabad', state: 'Telangana' },
  { id: '5', name: 'Ahmedabad', state: 'Gujarat' },
  { id: '6', name: 'Chennai', state: 'Tamil Nadu' },
  { id: '7', name: 'Kolkata', state: 'West Bengal' },
  { id: '8', name: 'Pune', state: 'Maharashtra' },
  { id: '9', name: 'Jaipur', state: 'Rajasthan' },
  { id: '10', name: 'Surat', state: 'Gujarat' },
  { id: '11', name: 'Lucknow', state: 'Uttar Pradesh' },
  { id: '12', name: 'Kanpur', state: 'Uttar Pradesh' },
  { id: '13', name: 'Nagpur', state: 'Maharashtra' },
  { id: '14', name: 'Indore', state: 'Madhya Pradesh' },
  { id: '15', name: 'Thane', state: 'Maharashtra' },
  { id: '16', name: 'Bhopal', state: 'Madhya Pradesh' },
  { id: '17', name: 'Visakhapatnam', state: 'Andhra Pradesh' },
  { id: '18', name: 'Pimpri-Chinchwad', state: 'Maharashtra' },
  { id: '19', name: 'Patna', state: 'Bihar' },
  { id: '20', name: 'Vadodara', state: 'Gujarat' },
  { id: '21', name: 'Ghaziabad', state: 'Uttar Pradesh' },
  { id: '22', name: 'Ludhiana', state: 'Punjab' },
  { id: '23', name: 'Agra', state: 'Uttar Pradesh' },
  { id: '24', name: 'Nashik', state: 'Maharashtra' },
  { id: '25', name: 'Faridabad', state: 'Haryana' },
  { id: '26', name: 'Meerut', state: 'Uttar Pradesh' },
  { id: '27', name: 'Rajkot', state: 'Gujarat' },
  { id: '28', name: 'Kalyan-Dombivli', state: 'Maharashtra' },
  { id: '29', name: 'Vasai-Virar', state: 'Maharashtra' },
  { id: '30', name: 'Varanasi', state: 'Uttar Pradesh' },
];

const GOVERNMENT_DEPARTMENTS = [
  { id: 'd1', name: 'Ministry of Home Affairs', code: 'MHA' },
  { id: 'd2', name: 'Ministry of Finance', code: 'MOF' },
  { id: 'd3', name: 'Ministry of Defence', code: 'MOD' },
  { id: 'd4', name: 'Ministry of External Affairs', code: 'MEA' },
  { id: 'd5', name: 'Ministry of Health and Family Welfare', code: 'MOHFW' },
  { id: 'd6', name: 'Ministry of Education', code: 'MOE' },
  { id: 'd7', name: 'Ministry of Rural Development', code: 'MRD' },
  { id: 'd8', name: 'Ministry of Agriculture and Farmers Welfare', code: 'MOAFW' },
  { id: 'd9', name: 'Ministry of Railways', code: 'MOR' },
  { id: 'd10', name: 'Ministry of Road Transport and Highways', code: 'MORTH' },
  { id: 'd11', name: 'Ministry of Electronics and Information Technology', code: 'MEITY' },
  { id: 'd12', name: 'Ministry of Labour and Employment', code: 'MOLE' },
];

const GOVERNMENT_SCHEMES = [
  { id: 's1', name: 'Pradhan Mantri Jan Dhan Yojana', category: 'Financial Inclusion' },
  { id: 's2', name: 'Pradhan Mantri Awas Yojana', category: 'Housing' },
  { id: 's3', name: 'Ayushman Bharat', category: 'Healthcare' },
  { id: 's4', name: 'PM-KISAN', category: 'Agriculture' },
  { id: 's5', name: 'Swachh Bharat Mission', category: 'Sanitation' },
  { id: 's6', name: 'Digital India', category: 'Technology' },
  { id: 's7', name: 'Make in India', category: 'Manufacturing' },
  { id: 's8', name: 'Skill India', category: 'Education' },
  { id: 's9', name: 'Beti Bachao Beti Padhao', category: 'Women Empowerment' },
  { id: 's10', name: 'Pradhan Mantri Ujjwala Yojana', category: 'Energy' },
];

const GOVERNMENT_SERVICES = [
  { id: 'sv1', name: 'Passport Application', icon: '🛂' },
  { id: 'sv2', name: 'PAN Card', icon: '💳' },
  { id: 'sv3', name: 'Aadhaar Card', icon: '🆔' },
  { id: 'sv4', name: 'Driving License', icon: '🚗' },
  { id: 'sv5', name: 'Voter ID Card', icon: '🗳️' },
  { id: 'sv6', name: 'Ration Card', icon: '🌾' },
  { id: 'sv7', name: 'Birth Certificate', icon: '👶' },
  { id: 'sv8', name: 'Death Certificate', icon: '📄' },
  { id: 'sv9', name: 'Marriage Certificate', icon: '💍' },
  { id: 'sv10', name: 'Income Certificate', icon: '💰' },
];

const GROUPED_LOCATIONS = [
  {
    group: 'Maharashtra',
    items: [
      { id: 'mh1', name: 'Mumbai' },
      { id: 'mh2', name: 'Pune' },
      { id: 'mh3', name: 'Nagpur' },
      { id: 'mh4', name: 'Thane' },
      { id: 'mh5', name: 'Nashik' },
    ],
  },
  {
    group: 'Karnataka',
    items: [
      { id: 'ka1', name: 'Bangalore' },
      { id: 'ka2', name: 'Mysore' },
      { id: 'ka3', name: 'Mangalore' },
      { id: 'ka4', name: 'Hubli' },
    ],
  },
  {
    group: 'Tamil Nadu',
    items: [
      { id: 'tn1', name: 'Chennai' },
      { id: 'tn2', name: 'Coimbatore' },
      { id: 'tn3', name: 'Madurai' },
      { id: 'tn4', name: 'Tiruchirappalli' },
    ],
  },
  {
    group: 'Gujarat',
    items: [
      { id: 'gj1', name: 'Ahmedabad' },
      { id: 'gj2', name: 'Surat' },
      { id: 'gj3', name: 'Vadodara' },
      { id: 'gj4', name: 'Rajkot' },
    ],
  },
];

// Basic Autocomplete Preview Component
const AutocompletePreview = ({
  options,
  placeholder = 'Search...',
  size = 'md',
  multiple = false,
  disabled = false,
  renderOption,
  groupBy,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState<any>(multiple ? [] : null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredOptions = searchValue
    ? options.filter((option: any) =>
        (option.name || option).toLowerCase().includes(searchValue.toLowerCase())
      )
    : options;

  const groupedOptions = groupBy
    ? GROUPED_LOCATIONS
    : null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && listRef.current) {
      const highlightedElement = listRef.current.children[highlightedIndex] as HTMLElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    const itemCount = groupedOptions
      ? groupedOptions.reduce((sum, g) => sum + g.items.length, 0)
      : filteredOptions.length;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setIsOpen(true);
        setHighlightedIndex(prev =>
          prev < itemCount - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : 0);
        break;
      case 'Enter':
        e.preventDefault();
        if (isOpen && highlightedIndex >= 0) {
          const allItems = groupedOptions
            ? groupedOptions.flatMap(g => g.items)
            : filteredOptions;
          handleSelect(allItems[highlightedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
      case 'Tab':
        setIsOpen(false);
        break;
    }
  };

  const handleSelect = (option: any) => {
    if (multiple) {
      const isSelected = selectedValue.some((v: any) =>
        (v.id || v) === (option.id || option)
      );
      if (isSelected) {
        setSelectedValue(selectedValue.filter((v: any) =>
          (v.id || v) !== (option.id || option)
        ));
      } else {
        setSelectedValue([...selectedValue, option]);
      }
      setSearchValue('');
      inputRef.current?.focus();
    } else {
      setSelectedValue(option);
      setSearchValue(option.name || option);
      setIsOpen(false);
    }
    setHighlightedIndex(-1);
  };

  const handleRemoveTag = (optionToRemove: any) => {
    setSelectedValue(selectedValue.filter((v: any) =>
      (v.id || v) !== (optionToRemove.id || optionToRemove)
    ));
  };

  const sizeClasses = {
    sm: 'h-8 px-2 text-sm',
    md: 'h-10 px-3 text-base',
    lg: 'h-12 px-4 text-lg',
  };

  const getDisplayValue = () => {
    if (multiple && selectedValue.length > 0) {
      return '';
    }
    return searchValue;
  };

  return (
    <div className="relative w-full max-w-md" ref={wrapperRef}>
      <div className={'relative flex flex-col gap-2 ' + (multiple ? 'min-h-[44px]' : '')}>
        <div className={'flex items-center gap-2 rounded border border-border bg-card ' + (disabled ? 'opacity-60 cursor-not-allowed bg-background' : 'cursor-text')}>
          {multiple && selectedValue.length > 0 && (
            <div className="flex flex-wrap gap-1 p-1">
              {selectedValue.map((option: any, index: number) => (
                <span
                  key={option.id || option}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 dark:text-blue-300 text-sm rounded"
                >
                  {option.name || option}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveTag(option);
                    }}
                    className="inline-flex items-center hover:bg-blue-200 rounded"
                    disabled={disabled}
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          )}
          <div className="flex-1 flex items-center">
            <Search size={16} className="text-muted-foreground ml-2" />
            <input
              ref={inputRef}
              type="text"
              className={'flex-1 outline-none bg-transparent ' + sizeClasses[size]}
              placeholder={placeholder}
              value={getDisplayValue()}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setIsOpen(true);
                setHighlightedIndex(-1);
              }}
              onFocus={() => !disabled && setIsOpen(true)}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              role="combobox"
              aria-expanded={isOpen}
              aria-autocomplete="list"
              aria-controls="autocomplete-listbox"
              aria-activedescendant={highlightedIndex >= 0 ? 'option-' + String(highlightedIndex) : undefined}
            />
          </div>
          <button
            type="button"
            className="px-2 text-muted-foreground hover:text-muted-foreground"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            disabled={disabled}
          >
            <ChevronDown size={16} className={'transition-transform ' + (isOpen ? 'rotate-180' : '')} />
          </button>
        </div>

        {isOpen && !disabled && (
          <div
            ref={listRef}
            className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded shadow-lg max-h-60 overflow-auto z-50"
            role="listbox"
            id="autocomplete-listbox"
          >
            {groupedOptions ? (
              groupedOptions.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground bg-background border-b">
                    {group.group}
                  </div>
                  {group.items.map((option: any, optionIndex: number) => {
                    const globalIndex = groupedOptions
                      .slice(0, groupIndex)
                      .reduce((sum, g) => sum + g.items.length, 0) + optionIndex;
                    const isSelected = multiple
                      ? selectedValue.some((v: any) => (v.id || v) === (option.id || option))
                      : (selectedValue?.id || selectedValue) === (option.id || option);
                    const isHighlighted = globalIndex === highlightedIndex;

                    return (
                      <div
                        key={option.id || option}
                        id={'option-' + String(globalIndex)}
                        role="option"
                        aria-selected={isSelected}
                        className={'px-3 py-2 cursor-pointer flex items-center justify-between ' + (isHighlighted ? 'bg-blue-50' : isSelected ? 'bg-blue-100' : 'hover:bg-background')}
                        onClick={() => handleSelect(option)}
                        onMouseEnter={() => setHighlightedIndex(globalIndex)}
                      >
                        {renderOption ? renderOption(option) : (
                          <span>{option.name || option}</span>
                        )}
                        {isSelected && <Check size={16} className="text-blue-600" />}
                      </div>
                    );
                  })}
                </div>
              ))
            ) : filteredOptions.length > 0 ? (
              filteredOptions.map((option: any, index: number) => {
                const isSelected = multiple
                  ? selectedValue.some((v: any) => (v.id || v) === (option.id || option))
                  : (selectedValue?.id || selectedValue) === (option.id || option);
                const isHighlighted = index === highlightedIndex;

                return (
                  <div
                    key={option.id || option}
                    id={'option-' + String(index)}
                    role="option"
                    aria-selected={isSelected}
                    className={'px-3 py-2 cursor-pointer flex items-center justify-between ' + (isHighlighted ? 'bg-blue-50' : isSelected ? 'bg-blue-100' : 'hover:bg-background')}
                    onClick={() => handleSelect(option)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                  >
                    {renderOption ? renderOption(option) : (
                      <span>{option.name || option}</span>
                    )}
                    {isSelected && <Check size={16} className="text-blue-600" />}
                  </div>
                );
              })
            ) : (
              <div className="px-3 py-2 text-muted-foreground text-sm">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Async Autocomplete Preview Component
const AsyncAutocompletePreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState<any>(null);
  const [options, setOptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchValue.length >= 2) {
      setLoading(true);
      const timer = setTimeout(() => {
        const filtered = INDIAN_CITIES.filter(city =>
          city.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setOptions(filtered);
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setOptions([]);
    }
  }, [searchValue]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setIsOpen(true);
        setHighlightedIndex(prev =>
          prev < options.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : 0);
        break;
      case 'Enter':
        e.preventDefault();
        if (isOpen && highlightedIndex >= 0) {
          handleSelect(options[highlightedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
      case 'Tab':
        setIsOpen(false);
        break;
    }
  };

  const handleSelect = (option: any) => {
    setSelectedValue(option);
    setSearchValue(option.name);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  return (
    <div className="relative w-full max-w-md" ref={wrapperRef}>
      <div className="relative">
        <div className="flex items-center gap-2 rounded border border-border bg-card">
          <Search size={16} className="text-muted-foreground ml-3" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 h-10 px-3 py-2 outline-none bg-transparent text-base"
            placeholder="Type to search cities..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setIsOpen(true);
              setHighlightedIndex(-1);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            role="combobox"
            aria-expanded={isOpen}
            aria-autocomplete="list"
            aria-controls="async-autocomplete-listbox"
          />
          {loading && (
            <div className="px-3">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
            </div>
          )}
        </div>

        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded shadow-lg max-h-60 overflow-auto z-50"
            role="listbox"
            id="async-autocomplete-listbox"
          >
            {loading ? (
              <div className="px-3 py-2 text-muted-foreground text-sm">Loading...</div>
            ) : options.length > 0 ? (
              options.map((option, index) => {
                const isSelected = selectedValue?.id === option.id;
                const isHighlighted = index === highlightedIndex;

                return (
                  <div
                    key={option.id}
                    role="option"
                    aria-selected={isSelected}
                    className={'px-3 py-2 cursor-pointer flex items-center justify-between ' + (isHighlighted ? 'bg-blue-50' : isSelected ? 'bg-blue-100' : 'hover:bg-background')}
                    onClick={() => handleSelect(option)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                  >
                    <div>
                      <div className="font-medium">{option.name}</div>
                      <div className="text-xs text-muted-foreground">{option.state}</div>
                    </div>
                    {isSelected && <Check size={16} className="text-blue-600" />}
                  </div>
                );
              })
            ) : searchValue.length >= 2 ? (
              <div className="px-3 py-2 text-muted-foreground text-sm">No cities found</div>
            ) : (
              <div className="px-3 py-2 text-muted-foreground text-sm">Type at least 2 characters to search</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const AUTOCOMPLETE_PLAYGROUND_CONTROLS: PlaygroundControl[] = [
  { name: 'disabled', label: 'Disabled', type: 'boolean', defaultValue: false },
  { name: 'loading', label: 'Loading', type: 'boolean', defaultValue: false },
];

function AutocompletePlayground() {
  return (
    <ComponentPlayground
      name="Autocomplete"
      controls={AUTOCOMPLETE_PLAYGROUND_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full flex items-center justify-center">
          <AutocompletePreview />
        </div>
      )}
      codeTemplate={(v) =>
        `<Autocomplete${v.disabled ? ' disabled' : ''}${v.loading ? ' loading' : ''} />`
      }
    />
  );
}

export default function ComponentAutocompletePage() {
  return (
    <ComponentDocumentation
      name="Autocomplete"
      description="Searchable dropdown and combobox component for selecting from large datasets. Supports single and multi-select modes, async data loading, custom rendering, keyboard navigation, and grouped options with full accessibility compliance."
      category="Form Elements"
      maturity="beta"
      tier="core"
      since="v1.2.0"
      updated="v2.1.0"

      preview={
        <div className="w-full max-w-2xl">
          <AutocompletePreview options={["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]} placeholder="Search city..." />
        </div>
      }

      props={[
        {
          name: 'options',
          type: 'AutocompleteOption[]',
          required: true,
          description: 'Array of options ({ value, label, disabled? }).',
        },
        {
          name: 'value',
          type: 'string',
          required: false,
          description: 'Controlled value.',
        },
        {
          name: 'defaultValue',
          type: 'string',
          required: false,
          description: 'Default value for uncontrolled mode.',
        },
        {
          name: 'onChange',
          type: '(value: string) => void',
          required: false,
          description: 'Callback when value changes.',
        },
        {
          name: 'onSelect',
          type: '(option: AutocompleteOption) => void',
          required: false,
          description: 'Callback when an option is selected.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Input size variant.',
        },
        {
          name: 'filterFn',
          type: '(option: AutocompleteOption, query: string) => boolean',
          required: false,
          description: 'Custom filter function.',
        },
        {
          name: 'loading',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Loading state.',
        },
        {
          name: 'emptyMessage',
          type: 'ReactNode',
          required: false,
          description: 'Message when no options match.',
        },
        {
          name: 'maxOptions',
          type: 'number',
          default: '10',
          required: false,
          description: 'Maximum number of options to show.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the input is disabled.',
        },
        {
          name: 'error',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Error state indicator.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes.',
        },
      ]}

      examples={[
        {
          title: 'City Selector - Single Select',
          description: 'Basic autocomplete for selecting a city. Searchable dropdown with Indian cities.',
          code: 'import { Autocomplete } from \'@ux4g/react-core\';\n\nconst cities = [\n  { id: \'1\', name: \'Mumbai\', state: \'Maharashtra\' },\n  { id: \'2\', name: \'Delhi\', state: \'Delhi\' },\n  { id: \'3\', name: \'Bangalore\', state: \'Karnataka\' },\n  { id: \'4\', name: \'Hyderabad\', state: \'Telangana\' },\n  { id: \'5\', name: \'Chennai\', state: \'Tamil Nadu\' },\n];\n\nfunction Example() {\n  const [selectedCity, setSelectedCity] = useState(null);\n\n  return (\n    <Autocomplete\n      options={cities}\n      value={selectedCity}\n      onChange={setSelectedCity}\n      placeholder="Select your city"\n      renderOption={(option) => option.name}\n    />\n  );\n}',
          preview: (
            <AutocompletePreview
              options={INDIAN_CITIES.slice(0, 10)}
              placeholder="Select your city"
            />
          ),
        },
        {
          title: 'Department Search',
          description: 'Search government departments with code display.',
          code: 'import { Autocomplete } from \'@ux4g/react-core\';\n\nconst departments = [\n  { id: \'d1\', name: \'Ministry of Home Affairs\', code: \'MHA\' },\n  { id: \'d2\', name: \'Ministry of Finance\', code: \'MOF\' },\n  { id: \'d3\', name: \'Ministry of Defence\', code: \'MOD\' },\n  { id: \'d4\', name: \'Ministry of Health\', code: \'MOHFW\' },\n];\n\nfunction Example() {\n  const [department, setDepartment] = useState(null);\n\n  return (\n    <Autocomplete\n      options={departments}\n      value={department}\n      onChange={setDepartment}\n      placeholder="Search department"\n      renderOption={(option) => (\n        <div>\n          <div className="font-medium">{option.name}</div>\n          <div className="text-xs text-muted-foreground">{option.code}</div>\n        </div>\n      )}\n    />\n  );\n}',
          preview: (
            <AutocompletePreview
              options={GOVERNMENT_DEPARTMENTS}
              placeholder="Search department"
              renderOption={(option: any) => (
                <div>
                  <div className="font-medium">{option.name}</div>
                  <div className="text-xs text-muted-foreground">{option.code}</div>
                </div>
              )}
            />
          ),
        },
        {
          title: 'Government Scheme Finder',
          description: 'Find government schemes with category information.',
          code: 'import { Autocomplete } from \'@ux4g/react-core\';\n\nconst schemes = [\n  { id: \'s1\', name: \'Pradhan Mantri Jan Dhan Yojana\', category: \'Financial Inclusion\' },\n  { id: \'s2\', name: \'Pradhan Mantri Awas Yojana\', category: \'Housing\' },\n  { id: \'s3\', name: \'Ayushman Bharat\', category: \'Healthcare\' },\n  { id: \'s4\', name: \'PM-KISAN\', category: \'Agriculture\' },\n];\n\nfunction Example() {\n  const [scheme, setScheme] = useState(null);\n\n  return (\n    <Autocomplete\n      options={schemes}\n      value={scheme}\n      onChange={setScheme}\n      placeholder="Find a scheme"\n      renderOption={(option) => (\n        <div>\n          <div className="font-medium">{option.name}</div>\n          <div className="text-xs text-muted-foreground">{option.category}</div>\n        </div>\n      )}\n    />\n  );\n}',
          preview: (
            <AutocompletePreview
              options={GOVERNMENT_SCHEMES}
              placeholder="Find a scheme"
              renderOption={(option: any) => (
                <div>
                  <div className="font-medium">{option.name}</div>
                  <div className="text-xs text-muted-foreground">{option.category}</div>
                </div>
              )}
            />
          ),
        },
        {
          title: 'Multi-Select Services',
          description: 'Select multiple government services with tag display.',
          code: 'import { Autocomplete } from \'@ux4g/react-core\';\n\nconst services = [\n  { id: \'sv1\', name: \'Passport Application\', icon: \'🛂\' },\n  { id: \'sv2\', name: \'PAN Card\', icon: \'💳\' },\n  { id: \'sv3\', name: \'Aadhaar Card\', icon: \'🆔\' },\n  { id: \'sv4\', name: \'Driving License\', icon: \'🚗\' },\n];\n\nfunction Example() {\n  const [selectedServices, setSelectedServices] = useState([]);\n\n  return (\n    <Autocomplete\n      options={services}\n      value={selectedServices}\n      onChange={setSelectedServices}\n      placeholder="Select services"\n      multiple\n      renderOption={(option) => (\n        <span>{option.icon} {option.name}</span>\n      )}\n    />\n  );\n}',
          preview: (
            <AutocompletePreview
              options={GOVERNMENT_SERVICES}
              placeholder="Select services"
              multiple
              renderOption={(option: any) => (
                <span>{option.icon} {option.name}</span>
              )}
            />
          ),
        },
        {
          title: 'Async Search with Loading',
          description: 'Asynchronous city search with loading state and debouncing.',
          code: 'import { Autocomplete } from \'@ux4g/react-core\';\nimport { useState, useEffect } from \'react\';\n\nfunction Example() {\n  const [cities, setCities] = useState([]);\n  const [loading, setLoading] = useState(false);\n  const [query, setQuery] = useState(\'\');\n\n  useEffect(() => {\n    if (query.length >= 2) {\n      setLoading(true);\n      const timer = setTimeout(async () => {\n        const response = await fetch(\n          \'/api/cities?q=\' + encodeURIComponent(query)\n        );\n        const data = await response.json();\n        setCities(data);\n        setLoading(false);\n      }, 300);\n      return () => clearTimeout(timer);\n    }\n  }, [query]);\n\n  return (\n    <Autocomplete\n      options={cities}\n      onSearch={setQuery}\n      loading={loading}\n      placeholder="Type to search cities..."\n      renderOption={(option) => (\n        <div>\n          <div className="font-medium">{option.name}</div>\n          <div className="text-xs text-muted-foreground">{option.state}</div>\n        </div>\n      )}\n    />\n  );\n}',
          preview: (
            <AsyncAutocompletePreview />
          ),
        },
        {
          title: 'Grouped Options - States and Cities',
          description: 'Options grouped by state with visual separators.',
          code: 'import { Autocomplete } from \'@ux4g/react-core\';\n\nconst locations = [\n  {\n    group: \'Maharashtra\',\n    items: [\n      { id: \'mh1\', name: \'Mumbai\' },\n      { id: \'mh2\', name: \'Pune\' },\n      { id: \'mh3\', name: \'Nagpur\' },\n    ],\n  },\n  {\n    group: \'Karnataka\',\n    items: [\n      { id: \'ka1\', name: \'Bangalore\' },\n      { id: \'ka2\', name: \'Mysore\' },\n    ],\n  },\n];\n\nfunction Example() {\n  const [city, setCity] = useState(null);\n\n  return (\n    <Autocomplete\n      options={locations}\n      value={city}\n      onChange={setCity}\n      placeholder="Select city"\n      groupBy={(option) => option.state}\n    />\n  );\n}',
          preview: (
            <AutocompletePreview
              options={[]}
              placeholder="Select city"
              groupBy={true}
            />
          ),
        },
        {
          title: 'Different Sizes',
          description: 'Autocomplete in small, medium, and large sizes.',
          code: 'import { Autocomplete } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <div className="flex flex-col gap-4">\n      <Autocomplete\n        options={cities}\n        placeholder="Small size"\n        size="sm"\n      />\n      <Autocomplete\n        options={cities}\n        placeholder="Medium size"\n        size="md"\n      />\n      <Autocomplete\n        options={cities}\n        placeholder="Large size"\n        size="lg"\n      />\n    </div>\n  );\n}',
          preview: (
            <div className="flex flex-col gap-4 w-full max-w-md">
              <AutocompletePreview
                options={INDIAN_CITIES.slice(0, 5)}
                placeholder="Small size"
                size="sm"
              />
              <AutocompletePreview
                options={INDIAN_CITIES.slice(0, 5)}
                placeholder="Medium size"
                size="md"
              />
              <AutocompletePreview
                options={INDIAN_CITIES.slice(0, 5)}
                placeholder="Large size"
                size="lg"
              />
            </div>
          ),
        },
        {
          title: 'Disabled State',
          description: 'Autocomplete in disabled state prevents interaction.',
          code: 'import { Autocomplete } from \'@ux4g/react-core\';\n\nfunction Example() {\n  return (\n    <Autocomplete\n      options={cities}\n      placeholder="Disabled autocomplete"\n      disabled\n    />\n  );\n}',
          preview: (
            <AutocompletePreview
              options={INDIAN_CITIES.slice(0, 5)}
              placeholder="Disabled autocomplete"
              disabled
            />
          ),
        },
      ]}

      reactCode={{
        component: 'import React, { useState, useRef, useEffect, forwardRef } from \'react\';\nimport { cn } from \'../../utils/cn\';\nimport { autocompleteVariants } from \'./autocomplete.variants\';\nimport { AutocompleteProps } from \'./Autocomplete.types\';\nimport { Search, ChevronDown, X, Check } from \'lucide-react\';\n\nexport const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(\n  (\n    {\n      options = [],\n      value,\n      onChange,\n      onSearch,\n      placeholder = \'Search...\',\n      multiple = false,\n      loading = false,\n      disabled = false,\n      size = \'md\',\n      renderOption,\n      groupBy,\n      filterOptions,\n      noOptionsText = \'No results found\',\n      loadingText = \'Loading...\',\n      clearable = true,\n      autoFocus = false,\n      className,\n      ...props\n    },\n    ref\n  ) => {\n    const [isOpen, setIsOpen] = useState(false);\n    const [searchQuery, setSearchQuery] = useState(\'\');\n    const [highlightedIndex, setHighlightedIndex] = useState(-1);\n    const inputRef = useRef<HTMLInputElement>(null);\n    const listRef = useRef<HTMLDivElement>(null);\n    const wrapperRef = useRef<HTMLDivElement>(null);\n\n    const defaultFilterOptions = (opts: any[], query: string) => {\n      if (!query) return opts;\n      return opts.filter((option) =>\n        String(option.name || option)\n          .toLowerCase()\n          .includes(query.toLowerCase())\n      );\n    };\n\n    const filteredOptions = filterOptions\n      ? filterOptions(options, searchQuery)\n      : defaultFilterOptions(options, searchQuery);\n\n    const groupedOptions = groupBy\n      ? filteredOptions.reduce((groups: any, option: any) => {\n          const group = groupBy(option);\n          if (!groups[group]) {\n            groups[group] = [];\n          }\n          groups[group].push(option);\n          return groups;\n        }, {})\n      : null;\n\n    useEffect(() => {\n      if (autoFocus && inputRef.current) {\n        inputRef.current.focus();\n      }\n    }, [autoFocus]);\n\n    useEffect(() => {\n      const handleClickOutside = (event: MouseEvent) => {\n        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {\n          setIsOpen(false);\n        }\n      };\n\n      document.addEventListener(\'mousedown\', handleClickOutside);\n      return () => document.removeEventListener(\'mousedown\', handleClickOutside);\n    }, []);\n\n    useEffect(() => {\n      if (onSearch) {\n        onSearch(searchQuery);\n      }\n    }, [searchQuery, onSearch]);\n\n    useEffect(() => {\n      if (isOpen && highlightedIndex >= 0 && listRef.current) {\n        const items = listRef.current.querySelectorAll(\'[role="option"]\');\n        const highlightedElement = items[highlightedIndex] as HTMLElement;\n        if (highlightedElement) {\n          highlightedElement.scrollIntoView({ block: \'nearest\' });\n        }\n      }\n    }, [highlightedIndex, isOpen]);\n\n    const handleKeyDown = (e: React.KeyboardEvent) => {\n      if (disabled) return;\n\n      const itemCount = filteredOptions.length;\n\n      switch (e.key) {\n        case \'ArrowDown\':\n          e.preventDefault();\n          setIsOpen(true);\n          setHighlightedIndex((prev) =>\n            prev < itemCount - 1 ? prev + 1 : prev\n          );\n          break;\n        case \'ArrowUp\':\n          e.preventDefault();\n          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));\n          break;\n        case \'Enter\':\n          e.preventDefault();\n          if (isOpen && highlightedIndex >= 0) {\n            handleSelect(filteredOptions[highlightedIndex]);\n          }\n          break;\n        case \'Escape\':\n          e.preventDefault();\n          setIsOpen(false);\n          setHighlightedIndex(-1);\n          break;\n        case \'Tab\':\n          setIsOpen(false);\n          break;\n      }\n    };\n\n    const handleSelect = (option: any) => {\n      if (multiple) {\n        const currentValue = Array.isArray(value) ? value : [];\n        const isSelected = currentValue.some(\n          (v: any) => (v.id || v) === (option.id || option)\n        );\n        if (isSelected) {\n          onChange(currentValue.filter(\n            (v: any) => (v.id || v) !== (option.id || option)\n          ));\n        } else {\n          onChange([...currentValue, option]);\n        }\n        setSearchQuery(\'\');\n        inputRef.current?.focus();\n      } else {\n        onChange(option);\n        setSearchQuery(option.name || String(option));\n        setIsOpen(false);\n      }\n      setHighlightedIndex(-1);\n    };\n\n    const handleRemoveTag = (optionToRemove: any) => {\n      const currentValue = Array.isArray(value) ? value : [];\n      onChange(currentValue.filter(\n        (v: any) => (v.id || v) !== (optionToRemove.id || optionToRemove)\n      ));\n    };\n\n    const handleClear = () => {\n      onChange(multiple ? [] : null);\n      setSearchQuery(\'\');\n      inputRef.current?.focus();\n    };\n\n    const isSelected = (option: any) => {\n      if (multiple) {\n        const currentValue = Array.isArray(value) ? value : [];\n        return currentValue.some(\n          (v: any) => (v.id || v) === (option.id || option)\n        );\n      }\n      return (value?.id || value) === (option.id || option);\n    };\n\n    return (\n      <div\n        ref={wrapperRef}\n        className={cn(\'relative w-full\', className)}\n      >\n        <div className={cn(autocompleteVariants({ size, disabled }))}>\n          {multiple && Array.isArray(value) && value.length > 0 && (\n            <div className="flex flex-wrap gap-1 p-1">\n              {value.map((option: any) => (\n                <span\n                  key={option.id || option}\n                  className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 dark:text-blue-300 text-sm rounded"\n                >\n                  {option.name || String(option)}\n                  <button\n                    type="button"\n                    onClick={(e) => {\n                      e.stopPropagation();\n                      handleRemoveTag(option);\n                    }}\n                    className="inline-flex items-center hover:bg-blue-200 rounded"\n                    disabled={disabled}\n                    aria-label="Remove"\n                  >\n                    <X size={14} />\n                  </button>\n                </span>\n              ))}\n            </div>\n          )}\n          <div className="flex-1 flex items-center">\n            <Search size={16} className="text-muted-foreground ml-2" aria-hidden="true" />\n            <input\n              ref={inputRef}\n              type="text"\n              className="flex-1 outline-none bg-transparent px-3 py-2"\n              placeholder={placeholder}\n              value={searchQuery}\n              onChange={(e) => {\n                setSearchQuery(e.target.value);\n                setIsOpen(true);\n                setHighlightedIndex(-1);\n              }}\n              onFocus={() => !disabled && setIsOpen(true)}\n              onKeyDown={handleKeyDown}\n              disabled={disabled}\n              role="combobox"\n              aria-expanded={isOpen}\n              aria-autocomplete="list"\n              aria-controls="autocomplete-listbox"\n              aria-activedescendant={\n                highlightedIndex >= 0\n                  ? \'option-\' + String(highlightedIndex)\n                  : undefined\n              }\n              {...props}\n            />\n          </div>\n          {loading && (\n            <div className="px-2">\n              <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent" />\n            </div>\n          )}\n          {clearable && (value || searchQuery) && !disabled && !loading && (\n            <button\n              type="button"\n              className="px-2 text-muted-foreground hover:text-muted-foreground"\n              onClick={handleClear}\n              aria-label="Clear"\n            >\n              <X size={16} />\n            </button>\n          )}\n          <button\n            type="button"\n            className="px-2 text-muted-foreground hover:text-muted-foreground"\n            onClick={() => !disabled && setIsOpen(!isOpen)}\n            disabled={disabled}\n            aria-label="Toggle dropdown"\n          >\n            <ChevronDown\n              size={16}\n              className={cn(\n                \'transition-transform\',\n                isOpen && \'rotate-180\'\n              )}\n            />\n          </button>\n        </div>\n\n        {isOpen && !disabled && (\n          <div\n            ref={listRef}\n            className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded shadow-lg max-h-60 overflow-auto z-50"\n            role="listbox"\n            id="autocomplete-listbox"\n          >\n            {loading ? (\n              <div className="px-3 py-2 text-muted-foreground text-sm">\n                {loadingText}\n              </div>\n            ) : groupedOptions ? (\n              Object.entries(groupedOptions).map(([group, items]: [string, any]) => (\n                <div key={group}>\n                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground bg-background border-b">\n                    {group}\n                  </div>\n                  {items.map((option: any, index: number) => (\n                    <div\n                      key={option.id || option}\n                      role="option"\n                      aria-selected={isSelected(option)}\n                      className={cn(\n                        \'px-3 py-2 cursor-pointer flex items-center justify-between\',\n                        highlightedIndex === index && \'bg-blue-50\',\n                        isSelected(option) && \'bg-blue-100\',\n                        !isSelected(option) && highlightedIndex !== index && \'hover:bg-background\'\n                      )}\n                      onClick={() => handleSelect(option)}\n                      onMouseEnter={() => setHighlightedIndex(index)}\n                    >\n                      {renderOption ? renderOption(option) : (\n                        <span>{option.name || String(option)}</span>\n                      )}\n                      {isSelected(option) && <Check size={16} className="text-blue-600" />}\n                    </div>\n                  ))}\n                </div>\n              ))\n            ) : filteredOptions.length > 0 ? (\n              filteredOptions.map((option: any, index: number) => (\n                <div\n                  key={option.id || option}\n                  id={\'option-\' + String(index)}\n                  role="option"\n                  aria-selected={isSelected(option)}\n                  className={cn(\n                    \'px-3 py-2 cursor-pointer flex items-center justify-between\',\n                    highlightedIndex === index && \'bg-blue-50\',\n                    isSelected(option) && \'bg-blue-100\',\n                    !isSelected(option) && highlightedIndex !== index && \'hover:bg-background\'\n                  )}\n                  onClick={() => handleSelect(option)}\n                  onMouseEnter={() => setHighlightedIndex(index)}\n                >\n                  {renderOption ? renderOption(option) : (\n                    <span>{option.name || String(option)}</span>\n                  )}\n                  {isSelected(option) && <Check size={16} className="text-blue-600" />}\n                </div>\n              ))\n            ) : (\n              <div className="px-3 py-2 text-muted-foreground text-sm">\n                {noOptionsText}\n              </div>\n            )}\n          </div>\n        )}\n      </div>\n    );\n  }\n);\n\nAutocomplete.displayName = \'Autocomplete\';',
        types: 'export interface AutocompleteProps\n  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, \'onChange\' | \'value\' | \'size\'>,\n          AutocompleteVariantProps {\n  options: Array<any>;\n  value?: any | Array<any>;\n  onChange: (value: any | Array<any>) => void;\n  onSearch?: (query: string) => void | Promise<void>;\n  placeholder?: string;\n  multiple?: boolean;\n  loading?: boolean;\n  disabled?: boolean;\n  size?: \'sm\' | \'md\' | \'lg\';\n  renderOption?: (option: any) => React.ReactNode;\n  groupBy?: (option: any) => string;\n  filterOptions?: (options: Array<any>, query: string) => Array<any>;\n  noOptionsText?: string;\n  loadingText?: string;\n  clearable?: boolean;\n  autoFocus?: boolean;\n}',
        variants: 'import { cva, type VariantProps } from \'class-variance-authority\';\n\nexport const autocompleteVariants = cva(\n  [\n    \'flex items-center gap-2\',\n    \'rounded border border-border bg-card\',\n    \'transition-all duration-150 ease-in-out\',\n    \'focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2\',\n    \'min-h-[44px]\',\n  ],\n  {\n    variants: {\n      size: {\n        sm: [\'text-sm\'],\n        md: [\'text-base\'],\n        lg: [\'text-lg\'],\n      },\n      disabled: {\n        true: [\'opacity-60\', \'cursor-not-allowed\', \'bg-background\'],\n        false: [\'cursor-text\'],\n      },\n    },\n    defaultVariants: {\n      size: \'md\',\n      disabled: false,\n    },\n  }\n);\n\nexport type AutocompleteVariantProps = VariantProps<typeof autocompleteVariants>;',
      }}

      angularCode={{
        component: 'import { Component, Input, Output, EventEmitter, forwardRef, OnInit, OnDestroy } from \'@angular/core\';\nimport { ControlValueAccessor, NG_VALUE_ACCESSOR } from \'@angular/forms\';\nimport { Subject } from \'rxjs\';\nimport { debounceTime, distinctUntilChanged } from \'rxjs/operators\';\n\ntype AutocompleteSize = \'sm\' | \'md\' | \'lg\';\n\n@Component({\n  selector: \'ux4g-autocomplete\',\n  template: `\n    <div class="autocomplete-wrapper" #wrapper>\n      <div [class]="getContainerClasses()">\n        <div *ngIf="multiple && selectedValues.length > 0" class="tags-container">\n          <span\n            *ngFor="let option of selectedValues"\n            class="tag"\n          >\n            {{ getOptionLabel(option) }}\n            <button\n              type="button"\n              (click)="removeTag(option)"\n              [disabled]="disabled"\n              class="tag-remove"\n            >\n              <span class="icon-x">✕</span>\n            </button>\n          </span>\n        </div>\n        <div class="input-container">\n          <span class="icon-search">🔍</span>\n          <input\n            #input\n            type="text"\n            [placeholder]="placeholder"\n            [(ngModel)]="searchQuery"\n            (ngModelChange)="onSearchChange($event)"\n            (focus)="onFocus()"\n            (blur)="onBlur()"\n            (keydown)="onKeyDown($event)"\n            [disabled]="disabled"\n            role="combobox"\n            [attr.aria-expanded]="isOpen"\n            aria-autocomplete="list"\n            class="autocomplete-input"\n          />\n        </div>\n        <div *ngIf="loading" class="loading-spinner"></div>\n        <button\n          *ngIf="clearable && (hasValue() || searchQuery)"\n          type="button"\n          (click)="clear()"\n          [disabled]="disabled"\n          class="clear-button"\n        >\n          <span class="icon-x">✕</span>\n        </button>\n        <button\n          type="button"\n          (click)="toggle()"\n          [disabled]="disabled"\n          class="toggle-button"\n        >\n          <span [class.rotated]="isOpen" class="icon-chevron">⌄</span>\n        </button>\n      </div>\n\n      <div\n        *ngIf="isOpen && !disabled"\n        class="options-list"\n        role="listbox"\n      >\n        <div *ngIf="loading" class="option-item disabled">\n          {{ loadingText }}\n        </div>\n        <ng-container *ngIf="!loading">\n          <ng-container *ngIf="groupBy; else flatList">\n            <div *ngFor="let group of getGroupedOptions()" class="option-group">\n              <div class="group-label">{{ group.label }}</div>\n              <div\n                *ngFor="let option of group.options; let i = index"\n                class="option-item"\n                [class.highlighted]="isHighlighted(option)\n                [class.selected]="isSelected(option)"\n                (click)="selectOption(option)"\n                (mouseenter)="highlightOption(option)"\n                role="option"\n                [attr.aria-selected]="isSelected(option)"\n              >\n                <ng-container *ngIf="optionTemplate; else defaultOption">\n                  <ng-container *ngTemplateOutlet="optionTemplate; context: { $implicit: option }"></ng-container>\n                </ng-container>\n                <ng-template #defaultOption>\n                  <span>{{ getOptionLabel(option) }}</span>\n                </ng-template>\n                <span *ngIf="isSelected(option)" class="icon-check">✓</span>\n              </div>\n            </div>\n          </ng-container>\n          <ng-template #flatList>\n            <div\n              *ngFor="let option of filteredOptions"\n              class="option-item"\n              [class.highlighted]="isHighlighted(option)"\n              [class.selected]="isSelected(option)"\n              (click)="selectOption(option)"\n              (mouseenter)="highlightOption(option)"\n              role="option"\n              [attr.aria-selected]="isSelected(option)"\n            >\n              <ng-container *ngIf="optionTemplate; else defaultOption">\n                <ng-container *ngTemplateOutlet="optionTemplate; context: { $implicit: option }"></ng-container>\n              </ng-container>\n              <ng-template #defaultOption>\n                <span>{{ getOptionLabel(option) }}</span>\n              </ng-template>\n              <span *ngIf="isSelected(option)" class="icon-check">✓</span>\n            </div>\n          </ng-template>\n          <div *ngIf="filteredOptions.length === 0" class="option-item disabled">\n            {{ noOptionsText }}\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  `,\n  styleUrls: [\'./autocomplete.component.css\'],\n  providers: [\n    {\n      provide: NG_VALUE_ACCESSOR,\n      useExisting: forwardRef(() => AutocompleteComponent),\n      multi: true\n    }\n  ]\n})\nexport class AutocompleteComponent implements ControlValueAccessor, OnInit, OnDestroy {\n  @Input() options: any[] = [];\n  @Input() placeholder = \'Search...\';\n  @Input() multiple = false;\n  @Input() loading = false;\n  @Input() disabled = false;\n  @Input() size: AutocompleteSize = \'md\';\n  @Input() groupBy?: (option: any) => string;\n  @Input() filterOptions?: (options: any[], query: string) => any[];\n  @Input() noOptionsText = \'No results found\';\n  @Input() loadingText = \'Loading...\';\n  @Input() clearable = true;\n  @Input() autoFocus = false;\n  @Input() optionTemplate?: any;\n  \n  @Output() searchChange = new EventEmitter<string>();\n  @Output() selectionChange = new EventEmitter<any>();\n\n  isOpen = false;\n  searchQuery = \'\';\n  selectedValues: any[] = [];\n  highlightedOption: any = null;\n  filteredOptions: any[] = [];\n  \n  private searchSubject = new Subject<string>();\n  private onChange: any = () => {};\n  private onTouched: any = () => {};\n\n  ngOnInit() {\n    this.searchSubject\n      .pipe(\n        debounceTime(300),\n        distinctUntilChanged()\n      )\n      .subscribe(query => {\n        this.searchChange.emit(query);\n        this.filterOptionsInternal();\n      });\n\n    this.filterOptionsInternal();\n  }\n\n  ngOnDestroy() {\n    this.searchSubject.complete();\n  }\n\n  writeValue(value: any): void {\n    if (this.multiple) {\n      this.selectedValues = Array.isArray(value) ? value : [];\n    } else {\n      this.selectedValues = value ? [value] : [];\n    }\n  }\n\n  registerOnChange(fn: any): void {\n    this.onChange = fn;\n  }\n\n  registerOnTouched(fn: any): void {\n    this.onTouched = fn;\n  }\n\n  setDisabledState(isDisabled: boolean): void {\n    this.disabled = isDisabled;\n  }\n\n  onSearchChange(query: string): void {\n    this.searchSubject.next(query);\n  }\n\n  filterOptionsInternal(): void {\n    if (this.filterOptions) {\n      this.filteredOptions = this.filterOptions(this.options, this.searchQuery);\n    } else {\n      this.filteredOptions = this.options.filter(option =>\n        this.getOptionLabel(option)\n          .toLowerCase()\n          .includes(this.searchQuery.toLowerCase())\n      );\n    }\n  }\n\n  getOptionLabel(option: any): string {\n    return option?.name || String(option);\n  }\n\n  selectOption(option: any): void {\n    if (this.multiple) {\n      const index = this.selectedValues.findIndex(\n        v => this.getOptionId(v) === this.getOptionId(option)\n      );\n      if (index >= 0) {\n        this.selectedValues.splice(index, 1);\n      } else {\n        this.selectedValues.push(option);\n      }\n      this.onChange(this.selectedValues);\n      this.searchQuery = \'\';\n    } else {\n      this.selectedValues = [option];\n      this.onChange(option);\n      this.searchQuery = this.getOptionLabel(option);\n      this.isOpen = false;\n    }\n    this.selectionChange.emit(this.multiple ? this.selectedValues : option);\n  }\n\n  removeTag(option: any): void {\n    this.selectedValues = this.selectedValues.filter(\n      v => this.getOptionId(v) !== this.getOptionId(option)\n    );\n    this.onChange(this.selectedValues);\n    this.selectionChange.emit(this.selectedValues);\n  }\n\n  clear(): void {\n    this.selectedValues = [];\n    this.searchQuery = \'\';\n    this.onChange(this.multiple ? [] : null);\n    this.selectionChange.emit(this.multiple ? [] : null);\n  }\n\n  toggle(): void {\n    this.isOpen = !this.isOpen;\n  }\n\n  onFocus(): void {\n    this.isOpen = true;\n  }\n\n  onBlur(): void {\n    setTimeout(() => {\n      this.isOpen = false;\n      this.onTouched();\n    }, 200);\n  }\n\n  onKeyDown(event: KeyboardEvent): void {\n    switch (event.key) {\n      case \'ArrowDown\':\n        event.preventDefault();\n        this.highlightNext();\n        break;\n      case \'ArrowUp\':\n        event.preventDefault();\n        this.highlightPrevious();\n        break;\n      case \'Enter\':\n        event.preventDefault();\n        if (this.highlightedOption) {\n          this.selectOption(this.highlightedOption);\n        }\n        break;\n      case \'Escape\':\n        event.preventDefault();\n        this.isOpen = false;\n        break;\n    }\n  }\n\n  highlightNext(): void {\n    const index = this.filteredOptions.indexOf(this.highlightedOption);\n    if (index < this.filteredOptions.length - 1) {\n      this.highlightedOption = this.filteredOptions[index + 1];\n    }\n  }\n\n  highlightPrevious(): void {\n    const index = this.filteredOptions.indexOf(this.highlightedOption);\n    if (index > 0) {\n      this.highlightedOption = this.filteredOptions[index - 1];\n    }\n  }\n\n  highlightOption(option: any): void {\n    this.highlightedOption = option;\n  }\n\n  isHighlighted(option: any): boolean {\n    return this.getOptionId(this.highlightedOption) === this.getOptionId(option);\n  }\n\n  isSelected(option: any): boolean {\n    return this.selectedValues.some(\n      v => this.getOptionId(v) === this.getOptionId(option)\n    );\n  }\n\n  hasValue(): boolean {\n    return this.selectedValues.length > 0;\n  }\n\n  getOptionId(option: any): any {\n    return option?.id || option;\n  }\n\n  getContainerClasses(): string {\n    const classes = [\'autocomplete-container\'];\n    classes.push(\'autocomplete-\' + this.size);\n    if (this.disabled) classes.push(\'autocomplete-disabled\');\n    if (this.isOpen) classes.push(\'autocomplete-open\');\n    return classes.join(\' \');\n  }\n\n  getGroupedOptions(): Array<{ label: string; options: any[] }> {\n    if (!this.groupBy) return [];\n    \n    const groups: { [key: string]: any[] } = {};\n    this.filteredOptions.forEach(option => {\n      const label = this.groupBy!(option);\n      if (!groups[label]) {\n        groups[label] = [];\n      }\n      groups[label].push(option);\n    });\n    \n    return Object.entries(groups).map(([label, options]) => ({\n      label,\n      options\n    }));\n  }\n}',
        module: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { FormsModule } from \'@angular/forms\';\nimport { AutocompleteComponent } from \'./autocomplete.component\';\n\n@NgModule({\n  declarations: [AutocompleteComponent],\n  imports: [CommonModule, FormsModule],\n  exports: [AutocompleteComponent]\n})\nexport class AutocompleteModule { }',
        types: 'export type AutocompleteSize = \'sm\' | \'md\' | \'lg\';\n\nexport interface AutocompleteOption {\n  id: any;\n  name: string;\n  [key: string]: any;\n}\n\nexport interface AutocompleteGroupedOption {\n  label: string;\n  options: AutocompleteOption[];\n}',
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-autocomplete> custom element",
        html: "<ux4g-autocomplete variant=\"primary\" size=\"md\"><!-- Autocomplete --></ux4g-autocomplete>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Autocomplete',
          variants: 'single, multi-select, grouped, free solo',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-autocomplete/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'AutoComplete',
          variants: 'default, custom options, search',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/auto-complete',
        },
        {
          system: 'Chakra UI',
          component: 'AutoComplete (via Combobox)',
          variants: 'single, multi-select, custom rendering',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://chakra-ui.com/docs/components/combobox',
        },
        {
          system: 'Radix UI',
          component: 'Combobox (headless)',
          variants: 'Unstyled primitive',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://www.radix-ui.com/primitives/docs/components/combobox',
        },
        {
          system: 'Headless UI',
          component: 'Combobox',
          variants: 'Unstyled, fully accessible',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Good',
          link: 'https://headlessui.com/react/combobox',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Accessible Autocomplete',
          variants: 'default, enhanced',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://github.com/alphagov/accessible-autocomplete',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 44x44px touch target size for interactive elements (WCAG 2.5.5)',
          'role="combobox" on input for proper assistive technology support',
          'aria-expanded attribute to announce dropdown state',
          'aria-autocomplete="list" to indicate autocomplete behavior',
          'aria-controls to link input with listbox',
          'aria-activedescendant for announcing highlighted option',
          'role="listbox" and role="option" for proper list semantics',
          'aria-selected to indicate selected options',
          'Keyboard navigation with Arrow keys, Enter, Escape, and Tab (WCAG 2.1.1)',
          'Focus ring with 2px width and offset for keyboard navigation (WCAG 2.4.7)',
          'Color contrast ratios meet or exceed 4.5:1 for text (WCAG 1.4.3)',
          'Screen reader announcements for loading, selected, and no results states',
          'Icons properly hidden from screen readers with aria-hidden',
          'Clear button with descriptive aria-label',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to/from autocomplete' },
          { key: 'Shift + Tab', action: 'Move focus away from autocomplete' },
          { key: 'ArrowDown', action: 'Highlight next option, open dropdown' },
          { key: 'ArrowUp', action: 'Highlight previous option' },
          { key: 'Enter', action: 'Select highlighted option' },
          { key: 'Escape', action: 'Close dropdown and clear highlight' },
          { key: 'Type characters', action: 'Filter options based on search query' },
        ],
        screenReader: [
          'Announces combobox role and current state (expanded/collapsed)',
          'Announces the number of available options',
          'Announces highlighted option as user navigates with arrow keys',
          'Announces selected state when option is chosen',
          'Announces loading state with custom loadingText',
          'Announces no results state when filter returns empty',
          'Icons and decorative elements hidden with aria-hidden="true"',
          'Multi-select tags announced with option to remove',
        ],
      }}

      tokens={{
        file: '/tokens/components/autocomplete.json',
        mappings: [
          { property: 'Height (Medium)', token: 'base.height.md', value: '40px' },
          { property: 'Height (Small)', token: 'base.height.sm', value: '32px' },
          { property: 'Height (Large)', token: 'base.height.lg', value: '48px' },
          { property: 'Padding Horizontal', token: 'base.padding.horizontal.md', value: '12px' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '4px' },
          { property: 'Border Color', token: 'base.border.color', value: '#d1d5db (Gray 300)' },
          { property: 'Focus Ring Color', token: 'base.focusRing.color', value: '#3b82f6 (Blue 500)' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRingWidth', value: '2px' },
          { property: 'Focus Ring Offset', token: 'accessibility.focusRingOffset', value: '2px' },
          { property: 'Highlight Background', token: 'variant.highlight.background', value: '#eff6ff (Blue 50)' },
          { property: 'Selected Background', token: 'variant.selected.background', value: '#dbeafe (Blue 100)' },
          { property: 'Selected Icon Color', token: 'variant.selected.icon', value: '#2563eb (Blue 600)' },
          { property: 'Tag Background', token: 'variant.tag.background', value: '#dbeafe (Blue 100)' },
          { property: 'Tag Text Color', token: 'variant.tag.text', value: '#1e40af (Blue 800)' },
          { property: 'Disabled Opacity', token: 'base.opacity.disabled', value: '0.6' },
          { property: 'Min Touch Target', token: 'accessibility.minTouchTarget', value: '44px' },
          { property: 'Max Dropdown Height', token: 'base.dropdown.maxHeight', value: '240px' },
        ],
      }}

      useCases={[
        { title: "Address Search", description: "Type-ahead for Indian addresses.", scenario: "Address form with PIN code lookup.", implementation: "<Autocomplete label=\"Search Address\" options={addresses} />" },
        { title: "Service Search", description: "Search across available government services.", scenario: "Home page service finder.", implementation: "<Autocomplete label=\"Find a Service\" options={services} />" },
      
        { title: 'Department Search', description: 'Search across government departments and ministries.', scenario: 'Citizen finds the right department for their query.', implementation: '<Autocomplete label="Search Department" options={departments} />' },
        { title: 'Scheme Finder', description: 'Search eligible government schemes by keyword.', scenario: 'Citizen searches for applicable welfare schemes.', implementation: '<Autocomplete label="Find Scheme" options={schemes} groupBy="ministry" />' },
      ]}

      additionalContent={
        <>
          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 dark:text-green-400 text-sm">✓</span>
                  Do use Autocomplete when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Large option lists that need filtering</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Search with suggestions</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Address or location lookup</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>When users know part of the value</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 dark:text-red-400 text-sm">✗</span>
                  Don't use Autocomplete when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Small option lists (under 10) — use Select</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Free text without suggestions — use Input</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Multiple selections — use Checkbox group</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 dark:bg-green-900/20 px-4 py-2 text-sm font-bold text-green-800 dark:text-green-300">✓ Do</div>
                <div className="p-4">
                  <div className="w-48 mb-3"><div className="border border-border rounded px-3 py-1.5 text-xs">Del<span className="text-[#005196]">hi</span></div><div className="border border-border border-t-0 rounded-b shadow-sm"><div className="px-3 py-1.5 text-xs hover:bg-muted cursor-pointer">Delhi</div><div className="px-3 py-1.5 text-xs hover:bg-muted cursor-pointer">Dehradun</div></div></div>
                  <p className="text-sm text-muted-foreground">Use autocomplete for large option lists (10+) that need filtering.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 dark:bg-red-900/20 px-4 py-2 text-sm font-bold text-red-800 dark:text-red-300">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="w-48 mb-3"><select className="w-full border border-border rounded px-3 py-1.5 text-xs bg-card"><option>Search 600+ cities...</option></select></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use autocomplete for fewer than 10 options — use Select instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <AutocompletePlayground />
          </div>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/select" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Select</h3>
                <p className="text-sm text-muted-foreground">For shorter option lists</p>
              </a>
              <a href="/components/input" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Input</h3>
                <p className="text-sm text-muted-foreground">For free text</p>
              </a>
              <a href="/components/searchbar" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">SearchBar</h3>
                <p className="text-sm text-muted-foreground">For global search</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added async option loading</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added highlight matching text</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with static options</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Autocomplete reduces errors</h3>
                <p className="text-sm text-muted-foreground">Autocomplete fields reduce data entry errors by 50% for address fields (Royal Mail research).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
