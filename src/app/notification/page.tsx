

// Notification type definition
interface Notification {
  id: number;
  message: string;
  type: 'info' | 'warning' | 'alert';
  link: string;
}

// Sample notifications data
const notifications: Notification[] = [
  { id: 1, message: 'Time for an oil change!', type: 'warning', link: '#' },
  { id: 2, message: 'You are speeding! Slow down.', type: 'alert', link: '#' },
  { id: 3, message: 'Heavy rain expected, drive safely.', type: 'info', link: '#' },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      {/* Navbar */}
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">Car Service</h1>
      </header>

      {/* Notification List - Always visible */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl text-blue-600 mb-4">Your Notifications</h2>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-center justify-between p-3 rounded-lg ${
                notification.type === 'alert'
                  ? 'bg-red-100'
                  : notification.type === 'warning'
                  ? 'bg-yellow-100'
                  : 'bg-blue-100'
              }`}
            >
              <p className="text-sm text-gray-800">{notification.message}</p>
              <a
                href={notification.link}
                className="text-blue-600 underline text-xs"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="mt-10">
        <h2 className="text-lg text-gray-700">Welcome to your Car Dashboard</h2>
        <p className="mt-3 text-gray-600">Stay updated with car alerts!</p>
      </main>
    </div>
  );
};

export default Home;
