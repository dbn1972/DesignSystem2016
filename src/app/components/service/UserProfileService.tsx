import { useState } from "react";
import { Link } from "react-router";
import { AlertCircle, Bell, CheckCircle, Download, Lock, Mail, MapPin, Phone, Shield, User } from "lucide-react";

import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";

interface UserProfileServiceProps {
  category: string;
  title: string;
  serviceName: string;
  myApplicationsPath: string;
  forgotPasswordPath: string;
  codeDownloadPath?: string;
}

export function UserProfileService({
  category,
  title,
  serviceName,
  myApplicationsPath,
  forgotPasswordPath,
  codeDownloadPath,
}: UserProfileServiceProps) {
  const [activeTab, setActiveTab] = useState<"profile" | "security" | "notifications">("profile");
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
    pincode: "400069",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    applicationUpdates: true,
    paymentAlerts: true,
    promotionalEmails: false,
  });

  const handleSave = () => {
    setEditMode(false);
    setShowSuccess(true);
    window.setTimeout(() => setShowSuccess(false), 2500);
  };

  return (
    <div className="min-h-screen bg-background">
      <ServiceHeader icon={User} iconColor="bg-purple-600" category={category} title={title} />

      {showSuccess && (
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6">
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 flex items-center gap-3">
            <CheckCircle size={20} className="text-green-600" />
            <span className="text-sm text-muted-foreground font-bold">Settings saved successfully.</span>
          </div>
        </div>
      )}

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3">
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
              <TabButton icon={<User size={18} />} label="Profile Information" active={activeTab === "profile"} onClick={() => setActiveTab("profile")} />
              <TabButton icon={<Lock size={18} />} label="Security" active={activeTab === "security"} onClick={() => setActiveTab("security")} />
              <TabButton icon={<Bell size={18} />} label="Notifications" active={activeTab === "notifications"} onClick={() => setActiveTab("notifications")} />
            </div>
          </aside>

          <section className="lg:col-span-9 space-y-5">
            {activeTab === "profile" && (
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b-2 border-border bg-muted flex items-center justify-between">
                  <h2 className="font-bold text-foreground">Profile Information</h2>
                  {!editMode && (
                    <button
                      type="button"
                      onClick={() => setEditMode(true)}
                      className="px-4 py-2 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>

                <div className="p-6 space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField icon={<User size={16} />} label="Full Name" value={profileData.fullName} disabled={!editMode} onChange={(val) => setProfileData((prev) => ({ ...prev, fullName: val }))} />
                    <FormField icon={<Mail size={16} />} label="Email Address" value={profileData.email} disabled={!editMode} onChange={(val) => setProfileData((prev) => ({ ...prev, email: val }))} />
                    <FormField icon={<Phone size={16} />} label="Mobile Number" value={profileData.mobile} disabled={!editMode} onChange={(val) => setProfileData((prev) => ({ ...prev, mobile: val }))} />
                    <FormField icon={<Phone size={16} />} label="Alternate Phone" value={profileData.alternatePhone} disabled={!editMode} onChange={(val) => setProfileData((prev) => ({ ...prev, alternatePhone: val }))} />
                  </div>

                  <div className="pt-4 border-t-2 border-border space-y-4">
                    <FormField icon={<MapPin size={16} />} label="Street Address" value={profileData.address} disabled={!editMode} onChange={(val) => setProfileData((prev) => ({ ...prev, address: val }))} />
                    <div className="grid md:grid-cols-3 gap-4">
                      <FormField icon={<MapPin size={16} />} label="City" value={profileData.city} disabled={!editMode} onChange={(val) => setProfileData((prev) => ({ ...prev, city: val }))} />
                      <FormField icon={<MapPin size={16} />} label="State" value={profileData.state} disabled={!editMode} onChange={(val) => setProfileData((prev) => ({ ...prev, state: val }))} />
                      <FormField icon={<MapPin size={16} />} label="PIN Code" value={profileData.pincode} disabled={!editMode} onChange={(val) => setProfileData((prev) => ({ ...prev, pincode: val }))} />
                    </div>
                  </div>

                  {editMode && (
                    <div className="pt-4 border-t-2 border-border flex items-center gap-3">
                      <button type="button" onClick={handleSave} className="px-5 py-2 bg-green-700 text-white rounded font-bold text-sm hover:bg-green-600">Save Changes</button>
                      <button type="button" onClick={() => setEditMode(false)} className="px-5 py-2 border-2 border-border rounded font-bold text-sm text-muted-foreground hover:bg-muted">Cancel</button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-4">
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <Shield size={22} className="text-blue-600 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-foreground">Change Password</h3>
                        <p className="text-sm text-muted-foreground">Update your password regularly to keep your account secure.</p>
                      </div>
                    </div>
                    <Link to={forgotPasswordPath} className="px-4 py-2 bg-primary text-white rounded font-bold text-sm hover:opacity-90 whitespace-nowrap">Change Password</Link>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-orange-600 mt-0.5" />
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Use a strong, unique password.</li>
                      <li>Never share OTP or password with anyone.</li>
                      <li>Sign out from shared devices.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
                <NotificationToggle label="Email Notifications" description="Receive updates by email" checked={notificationSettings.emailNotifications} onChange={(value) => setNotificationSettings((prev) => ({ ...prev, emailNotifications: value }))} />
                <NotificationToggle label="SMS Notifications" description="Receive updates by SMS" checked={notificationSettings.smsNotifications} onChange={(value) => setNotificationSettings((prev) => ({ ...prev, smsNotifications: value }))} />
                <NotificationToggle label="Application Status Updates" description="Get notified on each status change" checked={notificationSettings.applicationUpdates} onChange={(value) => setNotificationSettings((prev) => ({ ...prev, applicationUpdates: value }))} />
                <NotificationToggle label="Payment Alerts" description="Payment confirmation and retry alerts" checked={notificationSettings.paymentAlerts} onChange={(value) => setNotificationSettings((prev) => ({ ...prev, paymentAlerts: value }))} />
                <NotificationToggle label="Promotional Emails" description="New service announcements" checked={notificationSettings.promotionalEmails} onChange={(value) => setNotificationSettings((prev) => ({ ...prev, promotionalEmails: value }))} />

                <div className="pt-4 border-t-2 border-border">
                  <button type="button" onClick={handleSave} className="px-5 py-2 bg-green-700 text-white rounded font-bold text-sm hover:bg-green-600">Save Preferences</button>
                </div>
              </div>
            )}

            <div className="flex items-center gap-4 text-sm">
              <Link to={myApplicationsPath} className="font-bold text-primary hover:underline">My Applications</Link>
              {codeDownloadPath && (
                <Link to={codeDownloadPath} className="inline-flex items-center gap-1 font-bold text-primary hover:underline">
                  <Download size={14} />
                  Download React code
                </Link>
              )}
            </div>
          </section>
        </div>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Account Settings" />
    </div>
  );
}

function TabButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full px-4 py-3 flex items-center gap-2 text-left border-b-2 border-border ${
        active ? "bg-primary text-white" : "bg-card text-muted-foreground hover:bg-muted"
      }`}
    >
      {icon}
      <span className="text-sm font-bold">{label}</span>
    </button>
  );
}

function FormField({
  icon,
  label,
  value,
  onChange,
  disabled,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-foreground mb-2">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</div>
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          disabled={disabled}
          className={`w-full pl-9 pr-4 py-2.5 border-2 rounded text-sm ${
            disabled ? "border-border bg-background text-muted-foreground" : "border-border bg-card text-foreground"
          }`}
        />
      </div>
    </div>
  );
}

function NotificationToggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-3 p-4 border-2 border-border rounded">
      <div>
        <p className="font-bold text-foreground text-sm">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <label className="relative inline-block w-11 h-6 flex-shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className="sr-only peer"
        />
        <span className="absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-green-600 transition-colors" />
        <span className={`absolute left-1 top-1 w-4 h-4 bg-card rounded-full transition-transform ${checked ? "translate-x-5" : ""}`} />
      </label>
    </div>
  );
}
