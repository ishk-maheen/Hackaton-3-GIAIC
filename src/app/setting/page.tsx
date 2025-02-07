'use client';
import { useState } from 'react';

const Settings = () => {
  // State hooks for settings
  const [notifications, setNotifications] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [language, setLanguage] = useState<string>('English');
  const [twoFA, setTwoFA] = useState<boolean>(false);

  // Notification toggle function
  const handleNotificationToggle = () => setNotifications(!notifications);

  // Language change handler
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  // 2FA toggle handler
  const handle2FAToggle = () => setTwoFA(!twoFA);

  // Handle form submission for account settings (email & password)
  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Account settings updated successfully!');
    // Here, you can call an API to update the email and password on the server
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-semibold text-blue-600 mb-6">Account Settings</h1>

        {/* Notification Preferences */}
        <div className="p-6 bg-white shadow-lg rounded-lg flex justify-between items-center">
          <h2 className="text-2xl font-medium">Notification Preferences</h2>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={notifications}
              onChange={handleNotificationToggle}
              className="form-checkbox"
            />
            <span className="ml-2 text-gray-700">Enable Notifications</span>
          </label>
        </div>

        {/* Account Settings */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-medium mb-4">Account Settings</h2>
          <form onSubmit={handleAccountSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">Current Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-sm font-medium">New Password</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300 hover:bg-blue-700"
            >
              Update Account
            </button>
          </form>
        </div>

        {/* Language Settings */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-medium">Language Settings</h2>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            {/* Add more languages as needed */}
          </select>
        </div>

        {/* Security Settings */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-medium">Security Settings</h2>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Two-Factor Authentication</span>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={twoFA}
                onChange={handle2FAToggle}
                className="form-checkbox"
              />
              <span className="ml-2 text-gray-700">Enable 2FA</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;


