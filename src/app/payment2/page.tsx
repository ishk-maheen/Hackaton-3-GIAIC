

'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Car {
  id: string;
  name: string;
  price: number;
  discountPrice: number;
  image: string[];
}

const PaymentPage = () => {
  const [car, setCar] = useState<Car | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedCar = localStorage.getItem('selectedCar');
    if (storedCar) {
      setCar(JSON.parse(storedCar));
    }
  }, []);

  const handleCheckout = () => {
    alert('Redirecting to payment gateway...');
    router.push('/final'); // Redirect to final payment page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg border-t-4 border-blue-500">
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">Confirm Your Booking</h1>

        {car ? (
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image src={car.image[0]} alt={car.name} width={300} height={200} className="rounded-md shadow-md" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{car.name}</h2>
            <p className="text-gray-600 mt-2 text-lg">Price: <span className="font-bold text-blue-600">${car.discountPrice.toFixed(2)}</span></p>
            
            <button
              onClick={handleCheckout}
              className="mt-6 w-full py-3 px-6 text-white bg-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all text-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No car selected for booking.</p>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;










