import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  forwardRef,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface AddressValue {
  line1: string;
  line2?: string;
  city: string;
  district: string;
  state: string;
  pinCode: string;
}

export interface State {
  code: string;
  name: string;
  districts: string[];
}

const INDIAN_STATES: State[] = [
  { code: 'AN', name: 'Andaman and Nicobar Islands', districts: ['Nicobar', 'North and Middle Andaman', 'South Andaman'] },
  { code: 'AP', name: 'Andhra Pradesh', districts: ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Krishna', 'Kurnool', 'Prakasam', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR Kadapa'] },
  { code: 'AR', name: 'Arunachal Pradesh', districts: ['Tawang', 'West Kameng', 'East Kameng', 'Papum Pare', 'Kurung Kumey', 'Kra Daadi', 'Lower Subansiri', 'Upper Subansiri', 'West Siang', 'East Siang', 'Siang', 'Upper Siang', 'Lower Siang', 'Lower Dibang Valley', 'Dibang Valley', 'Anjaw', 'Lohit', 'Namsai', 'Changlang', 'Tirap', 'Longding'] },
  { code: 'AS', name: 'Assam', districts: ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salmara-Mankachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong'] },
  { code: 'BR', name: 'Bihar', districts: ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'] },
  { code: 'CH', name: 'Chandigarh', districts: ['Chandigarh'] },
  { code: 'CT', name: 'Chhattisgarh', districts: ['Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Gariaband', 'Janjgir-Champa', 'Jashpur', 'Kabirdham', 'Kanker', 'Kondagaon', 'Korba', 'Koriya', 'Mahasamund', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sukma', 'Surajpur', 'Surguja'] },
  { code: 'DN', name: 'Dadra and Nagar Haveli and Daman and Diu', districts: ['Dadra and Nagar Haveli', 'Daman', 'Diu'] },
  { code: 'DL', name: 'Delhi', districts: ['Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'North East Delhi', 'North West Delhi', 'Shahdara', 'South Delhi', 'South East Delhi', 'South West Delhi', 'West Delhi'] },
  { code: 'GA', name: 'Goa', districts: ['North Goa', 'South Goa'] },
  { code: 'GJ', name: 'Gujarat', districts: ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udaipur', 'Dahod', 'Dang', 'Devbhoomi Dwarka', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kheda', 'Kutch', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada', 'Navsari', 'Panchmahal', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha', 'Surat', 'Surendranagar', 'Tapi', 'Vadodara', 'Valsad'] },
  { code: 'HR', name: 'Haryana', districts: ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'] },
  { code: 'HP', name: 'Himachal Pradesh', districts: ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul and Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'] },
  { code: 'JK', name: 'Jammu and Kashmir', districts: ['Anantnag', 'Bandipora', 'Baramulla', 'Budgam', 'Doda', 'Ganderbal', 'Jammu', 'Kathua', 'Kishtwar', 'Kulgam', 'Kupwara', 'Poonch', 'Pulwama', 'Rajouri', 'Ramban', 'Reasi', 'Samba', 'Shopian', 'Srinagar', 'Udhampur'] },
  { code: 'JH', name: 'Jharkhand', districts: ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahebganj', 'Seraikela Kharsawan', 'Simdega', 'West Singhbhum'] },
  { code: 'KA', name: 'Karnataka', districts: ['Bagalkot', 'Bangalore Rural', 'Bangalore Urban', 'Belgaum', 'Bellary', 'Bidar', 'Chamarajanagar', 'Chikkaballapur', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysore', 'Raichur', 'Ramanagara', 'Shimoga', 'Tumkur', 'Udupi', 'Uttara Kannada', 'Vijayapura', 'Yadgir'] },
  { code: 'KL', name: 'Kerala', districts: ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'] },
  { code: 'LA', name: 'Ladakh', districts: ['Kargil', 'Leh'] },
  { code: 'LD', name: 'Lakshadweep', districts: ['Lakshadweep'] },
  { code: 'MP', name: 'Madhya Pradesh', districts: ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 'Morena', 'Narsinghpur', 'Neemuch', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'] },
  { code: 'MH', name: 'Maharashtra', districts: ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai City', 'Mumbai Suburban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'] },
  { code: 'MN', name: 'Manipur', districts: ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 'Senapati', 'Tamenglong', 'Tengnoupal', 'Thoubal', 'Ukhrul'] },
  { code: 'ML', name: 'Meghalaya', districts: ['East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 'North Garo Hills', 'Ri Bhoi', 'South Garo Hills', 'South West Garo Hills', 'South West Khasi Hills', 'West Garo Hills', 'West Jaintia Hills', 'West Khasi Hills'] },
  { code: 'MZ', name: 'Mizoram', districts: ['Aizawl', 'Champhai', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Serchhip'] },
  { code: 'NL', name: 'Nagaland', districts: ['Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Peren', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto'] },
  { code: 'OR', name: 'Odisha', districts: ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur', 'Sundargarh'] },
  { code: 'PY', name: 'Puducherry', districts: ['Karaikal', 'Mahe', 'Puducherry', 'Yanam'] },
  { code: 'PB', name: 'Punjab', districts: ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Muktsar', 'Pathankot', 'Patiala', 'Rupnagar', 'Sangrur', 'SAS Nagar', 'Shaheed Bhagat Singh Nagar', 'Tarn Taran'] },
  { code: 'RJ', name: 'Rajasthan', districts: ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Sri Ganganagar', 'Tonk', 'Udaipur'] },
  { code: 'SK', name: 'Sikkim', districts: ['East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim'] },
  { code: 'TN', name: 'Tamil Nadu', districts: ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'] },
  { code: 'TG', name: 'Telangana', districts: ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem Asifabad', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal', 'Nagarkurnool', 'Nalgonda', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal Rural', 'Warangal Urban', 'Yadadri Bhuvanagiri'] },
  { code: 'TR', name: 'Tripura', districts: ['Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'] },
  { code: 'UP', name: 'Uttar Pradesh', districts: ['Agra', 'Aligarh', 'Allahabad', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kushinagar', 'Lakhimpur Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Raebareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'] },
  { code: 'UT', name: 'Uttarakhand', districts: ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'] },
  { code: 'WB', name: 'West Bengal', districts: ['Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin Dinajpur', 'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kolkata', 'Malda', 'Murshidabad', 'Nadia', 'North 24 Parganas', 'Paschim Bardhaman', 'Paschim Medinipur', 'Purba Bardhaman', 'Purba Medinipur', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur'] }
];

/**
 * UX4G Address Autocomplete India
 *
 * Comprehensive address input component for Indian addresses with state/district/PIN code support.
 * Includes all 36 Indian states and union territories with their districts.
 *
 * @example
 * // Basic address input
 * <ux4g-address-autocomplete-india
 *   [(ngModel)]="address"
 *   label="Residential Address"
 *   required="true"
 * ></ux4g-address-autocomplete-india>
 *
 * @example
 * // Address without district field
 * <ux4g-address-autocomplete-india
 *   [(ngModel)]="address"
 *   [showDistrict]="false"
 * ></ux4g-address-autocomplete-india>
 */
@Component({
  selector: 'ux4g-address-autocomplete-india',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="ux4g-address-autocomplete-india">
      <label *ngIf="label" class="ux4g-address-autocomplete-india__label">
        {{ label }}
        <span *ngIf="required" class="ux4g-address-autocomplete-india__required">*</span>
      </label>

      <div class="ux4g-address-autocomplete-india__fields">
        <!-- Address Line 1 -->
        <div class="ux4g-address-autocomplete-india__field">
          <input
            type="text"
            class="ux4g-address-autocomplete-india__input"
            placeholder="Address Line 1"
            [(ngModel)]="internalValue.line1"
            (blur)="onFieldChange()"
            [disabled]="disabled"
            [attr.aria-label]="'Address Line 1'"
            [attr.aria-required]="required"
          />
        </div>

        <!-- Address Line 2 -->
        <div class="ux4g-address-autocomplete-india__field">
          <input
            type="text"
            class="ux4g-address-autocomplete-india__input"
            placeholder="Address Line 2 (Optional)"
            [(ngModel)]="internalValue.line2"
            (blur)="onFieldChange()"
            [disabled]="disabled"
            [attr.aria-label]="'Address Line 2'"
          />
        </div>

        <!-- City -->
        <div class="ux4g-address-autocomplete-india__field ux4g-address-autocomplete-india__field--half">
          <input
            type="text"
            class="ux4g-address-autocomplete-india__input"
            placeholder="City"
            [(ngModel)]="internalValue.city"
            (blur)="onFieldChange()"
            [disabled]="disabled"
            [attr.aria-label]="'City'"
            [attr.aria-required]="required"
          />
        </div>

        <!-- State -->
        <div class="ux4g-address-autocomplete-india__field ux4g-address-autocomplete-india__field--half">
          <select
            class="ux4g-address-autocomplete-india__select"
            [(ngModel)]="internalValue.state"
            (change)="onStateChange()"
            [disabled]="disabled"
            [attr.aria-label]="'State'"
            [attr.aria-required]="required"
          >
            <option value="">Select State</option>
            <option *ngFor="let state of states" [value]="state.code">{{ state.name }}</option>
          </select>
        </div>

        <!-- District -->
        <div *ngIf="showDistrict" class="ux4g-address-autocomplete-india__field ux4g-address-autocomplete-india__field--half">
          <select
            class="ux4g-address-autocomplete-india__select"
            [(ngModel)]="internalValue.district"
            (change)="onFieldChange()"
            [disabled]="disabled || !internalValue.state"
            [attr.aria-label]="'District'"
            [attr.aria-required]="required"
          >
            <option value="">Select District</option>
            <option *ngFor="let district of availableDistricts" [value]="district">{{ district }}</option>
          </select>
        </div>

        <!-- PIN Code -->
        <div *ngIf="showPinCode" class="ux4g-address-autocomplete-india__field ux4g-address-autocomplete-india__field--half">
          <input
            type="text"
            class="ux4g-address-autocomplete-india__input"
            placeholder="PIN Code"
            [(ngModel)]="internalValue.pinCode"
            (input)="onPinCodeInput($event)"
            (blur)="onFieldChange()"
            [disabled]="disabled"
            [attr.aria-label]="'PIN Code'"
            [attr.aria-required]="required"
            inputmode="numeric"
            maxlength="6"
          />
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./address-autocomplete-india.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AddressAutocompleteIndiaComponent),
    multi: true
  }]
})
export class AddressAutocompleteIndiaComponent implements ControlValueAccessor {
  @Input() label: string = 'Address';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() states: State[] = INDIAN_STATES;
  @Input() showPinCode: boolean = true;
  @Input() showDistrict: boolean = true;

  @Output() valueChange = new EventEmitter<AddressValue>();

  internalValue: AddressValue = {
    line1: '',
    line2: '',
    city: '',
    district: '',
    state: '',
    pinCode: ''
  };

  availableDistricts: string[] = [];

  private onChange: (value: AddressValue) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  writeValue(value: AddressValue): void {
    if (value) {
      this.internalValue = { ...value };
      this.updateAvailableDistricts();
    }
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: AddressValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  onStateChange(): void {
    // Reset district when state changes
    this.internalValue.district = '';
    this.updateAvailableDistricts();
    this.onFieldChange();
  }

  onPinCodeInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').slice(0, 6);
    this.internalValue.pinCode = value;
    this.cdr.markForCheck();
  }

  onFieldChange(): void {
    this.onChange(this.internalValue);
    this.valueChange.emit(this.internalValue);
    this.onTouched();
  }

  private updateAvailableDistricts(): void {
    const selectedState = this.states.find(s => s.code === this.internalValue.state);
    this.availableDistricts = selectedState ? selectedState.districts : [];
    this.cdr.markForCheck();
  }
}
