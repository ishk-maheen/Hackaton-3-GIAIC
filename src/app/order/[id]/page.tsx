'use client';

import { useParams, useRouter } from 'next/navigation';

const OrderDetailPage: React.FC = () => {
  const { id } = useParams(); // Get the dynamic route parameter
  const router = useRouter();

  // Check if id exists
  if (!id) {
    return <div>Loading...</div>;  // Show a loading state while id is being fetched
  }

  // Handle the case where `id` might be an array
  const idString = Array.isArray(id) ? id[0] : id;

  // Parse and validate `id` as `1 | 2`
  const parsedId = parseInt(idString, 10);

  if (parsedId !== 1 && parsedId !== 2) {
    // Redirect to a custom error page or homepage using next/navigation
    router.push('/404');  // Redirect to a 404 page or another route if the ID is invalid
    return null;  // Prevent rendering the page
  }

  // Mock car rental data
  const orders = {
    1: { car: 'Toyota Corolla', customer: 'John Doe', rentalDuration: '3 Days', price: '$120', status: 'Confirmed' },
    2: { car: 'Honda Civic', customer: 'Jane Smith', rentalDuration: '5 Days', price: '$200', status: 'Pending' },
  };

  const order = orders[parsedId];

  if (!order) {
    return <div>Order not found</div>;  // Handle the case where the order does not exist
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Rental Car Booking Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Booking #{parsedId}</h2>
        <div className="mb-4">
          <p><strong>Customer:</strong> {order.customer}</p>
          <p><strong>Car Model:</strong> {order.car}</p>
          <p><strong>Rental Duration:</strong> {order.rentalDuration}</p>
          <p><strong>Price:</strong> {order.price}</p>
          <p><strong>Status:</strong> {order.status}</p>
        </div>
        {order.status === 'Confirmed' && (
          <div className="text-green-500 mt-4">
            <p>Your car rental has been confirmed. Enjoy your ride! 🚗</p>
          </div>
        )}
        {order.status === 'Pending' && (
          <div className="text-yellow-500 mt-4">
            <p>Your car rental is still pending. Please wait for confirmation.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetailPage;
