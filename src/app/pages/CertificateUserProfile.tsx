import { useState } from "react";
import { Link } from "react-router";
import { User, Mail, Phone, MapPin, Lock, Bell, Shield, AlertCircle, CheckCircle } from "lucide-react";

export default function CertificateUserProfile() {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications'>('profile');
  const [editMode, setEditMode] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: "Priya Sharma",
    email: "priya.sharma@example.com",
    mobile: "9876543210",
    alternatePhone: "9876543211",
    address: "Flat 301, Sunrise Apartments, MG Road, Andheri East",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400069"
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    applicationUpdates: true,
    paymentAlerts: true,
    promotionalEmails: false
  });

  const handleSave = () => {
    setEditMode(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-purple-600 rounded flex items-center justify-center">
              <User size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">User Dashboard</div>
              <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Success Message */}
      {showSuccess && (
        <div className="max-w-[1400px] mx-auto px-12 pt-6">
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 flex items-center gap-3">
            <CheckCircle size={20} className="text-green-600" />
            <span className="text-sm text-gray-700 font-bold">Settings saved successfully!</span>
          </div>
        </div>
      )}

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Sidebar - Tabs */}
          <aside className="col-span-3">
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              <TabButton
                icon={<User size={20} />}
                label="Profile Information"
                active={activeTab === 'profile'}
                onClick={() => setActiveTab('profile')}
              />
              <TabButton
                icon={<Lock size={20} />}
                label="Security & Password"
                active={activeTab === 'security'}
                onClick={() => setActiveTab('security')}
              />
              <TabButton
                icon={<Bell size={20} />}
                label="Notifications"
                active={activeTab === 'notifications'}
                onClick={() => setActiveTab('notifications')}
              />
            </div>

            <div className="mt-6 bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Account Status</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center justify-between">
                  <span>Email Verified</span>
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Mobile Verified</span>
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Member Since</span>
                  <span className="font-bold">Jan 2026</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="col-span-9">
            
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
                <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4 flex items-center justify-between">
                  <h2 className="font-bold text-gray-900">Profile Information</h2>
                  {!editMode && (
                    <button
                      onClick={() => setEditMode(true)}
                      className="px-4 py-2 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    
                    {/* Personal Details */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-4">Personal Details</h3>
                      <div className="grid grid-cols-2 gap-6">
                        <FormField
                          icon={<User size={18} />}
                          label="Full Name"
                          value={profileData.fullName}
                          onChange={(val) => setProfileData({...profileData, fullName: val})}
                          disabled={!editMode}
                        />
                        <FormField
                          icon={<Mail size={18} />}
                          label="Email Address"
                          value={profileData.email}
                          onChange={(val) => setProfileData({...profileData, email: val})}
                          disabled={!editMode}
                        />
                        <FormField
                          icon={<Phone size={18} />}
                          label="Mobile Number"
                          value={profileData.mobile}
                          onChange={(val) => setProfileData({...profileData, mobile: val})}
                          disabled={!editMode}
                        />
                        <FormField
                          icon={<Phone size={18} />}
                          label="Alternate Phone"
                          value={profileData.alternatePhone}
                          onChange={(val) => setProfileData({...profileData, alternatePhone: val})}
                          disabled={!editMode}
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="pt-6 border-t-2 border-gray-300">
                      <h3 className="font-bold text-gray-900 mb-4">Address Information</h3>
                      <div className="space-y-4">
                        <FormField
                          icon={<MapPin size={18} />}
                          label="Street Address"
                          value={profileData.address}
                          onChange={(val) => setProfileData({...profileData, address: val})}
                          disabled={!editMode}
                        />
                        <div className="grid grid-cols-3 gap-4">
                          <FormField
                            icon={<MapPin size={18} />}
                            label="City"
                            value={profileData.city}
                            onChange={(val) => setProfileData({...profileData, city: val})}
                            disabled={!editMode}
                          />
                          <FormField
                            icon={<MapPin size={18} />}
                            label="State"
                            value={profileData.state}
                            onChange={(val) => setProfileData({...profileData, state: val})}
                            disabled={!editMode}
                          />
                          <FormField
                            icon={<MapPin size={18} />}
                            label="PIN Code"
                            value={profileData.pincode}
                            onChange={(val) => setProfileData({...profileData, pincode: val})}
                            disabled={!editMode}
                          />
                        </div>
                      </div>
                    </div>

                    {editMode && (
                      <div className="flex items-center gap-4 pt-6 border-t-2 border-gray-300">
                        <button
                          onClick={handleSave}
                          className="px-6 py-3 bg-[#138808] text-white font-bold rounded hover:bg-green-700"
                        >
                          Save Changes
                        </button>
                        <button
                          onClick={() => setEditMode(false)}
                          className="px-6 py-3 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4">
                    <h2 className="font-bold text-gray-900">Security Settings</h2>
                  </div>
                  <div className="p-8 space-y-6">
                    
                    <div className="flex items-start justify-between p-6 bg-blue-50 border-2 border-blue-300 rounded">
                      <div className="flex items-start gap-3">
                        <Shield size={24} className="text-blue-600" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">Change Password</h3>
                          <p className="text-sm text-gray-700">
                            Update your password regularly to keep your account secure
                          </p>
                        </div>
                      </div>
                      <Link
                        to="/reference-service/certificate/forgot-password"
                        className="px-4 py-2 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900 whitespace-nowrap"
                      >
                        Change Password
                      </Link>
                    </div>

                    <div className="flex items-start justify-between p-6 border-2 border-gray-300 rounded">
                      <div className="flex items-start gap-3">
                        <Phone size={24} className="text-gray-600" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">Two-Factor Authentication</h3>
                          <p className="text-sm text-gray-700 mb-2">
                            Add an extra layer of security by enabling 2FA
                          </p>
                          <span className="text-xs bg-green-100 border-2 border-green-300 text-green-900 px-2 py-1 rounded font-bold">
                            ENABLED
                          </span>
                        </div>
                      </div>
                      <button className="px-4 py-2 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50">
                        Configure
                      </button>
                    </div>

                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-sm">Security Tips</h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Use a strong, unique password</li>
                        <li>• Enable two-factor authentication</li>
                        <li>• Never share your OTP or password</li>
                        <li>• Log out from shared devices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
                <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4">
                  <h2 className="font-bold text-gray-900">Notification Preferences</h2>
                </div>
                <div className="p-8 space-y-4">
                  
                  <NotificationToggle
                    label="Email Notifications"
                    description="Receive updates and alerts via email"
                    checked={notificationSettings.emailNotifications}
                    onChange={(val) => setNotificationSettings({...notificationSettings, emailNotifications: val})}
                  />

                  <NotificationToggle
                    label="SMS Notifications"
                    description="Receive updates via text message"
                    checked={notificationSettings.smsNotifications}
                    onChange={(val) => setNotificationSettings({...notificationSettings, smsNotifications: val})}
                  />

                  <NotificationToggle
                    label="Application Status Updates"
                    description="Get notified when your application status changes"
                    checked={notificationSettings.applicationUpdates}
                    onChange={(val) => setNotificationSettings({...notificationSettings, applicationUpdates: val})}
                  />

                  <NotificationToggle
                    label="Payment Alerts"
                    description="Receive confirmations for payment transactions"
                    checked={notificationSettings.paymentAlerts}
                    onChange={(val) => setNotificationSettings({...notificationSettings, paymentAlerts: val})}
                  />

                  <NotificationToggle
                    label="Promotional Emails"
                    description="Receive information about new services and updates"
                    checked={notificationSettings.promotionalEmails}
                    onChange={(val) => setNotificationSettings({...notificationSettings, promotionalEmails: val})}
                  />

                  <div className="pt-6 border-t-2 border-gray-300">
                    <button
                      onClick={handleSave}
                      className="px-6 py-3 bg-[#138808] text-white font-bold rounded hover:bg-green-700"
                    >
                      Save Preferences
                    </button>
                  </div>

                </div>
              </div>
            )}

          </div>
        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>
              <Link to="/reference-service/certificate/my-applications" className="text-[#000080] font-bold hover:underline mr-6">
                My Applications
              </Link>
              Account Settings
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TabButton({ icon, label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-6 py-4 flex items-center gap-3 text-left border-b-2 border-gray-300 transition-colors ${
        active 
          ? 'bg-[#000080] text-white border-[#000080]' 
          : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      {icon}
      <span className="text-sm font-bold">{label}</span>
    </button>
  );
}

function FormField({ icon, label, value, onChange, disabled }: any) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-900 mb-2">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">
          {icon}
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`w-full pl-10 pr-4 py-3 border-2 rounded text-sm ${
            disabled 
              ? 'border-gray-300 bg-gray-50 text-gray-700' 
              : 'border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-[#000080]'
          }`}
        />
      </div>
    </div>
  );
}

function NotificationToggle({ label, description, checked, onChange }: any) {
  return (
    <div className="flex items-start justify-between p-4 border-2 border-gray-300 rounded">
      <div className="flex-1">
        <h4 className="font-bold text-gray-900 mb-1">{label}</h4>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      <label className="relative inline-block w-12 h-6 ml-4 flex-shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />
        <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-600 transition-colors"></div>
        <div className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
          checked ? 'translate-x-6' : ''
        }`}></div>
      </label>
    </div>
  );
}
