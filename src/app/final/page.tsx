

'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Car = {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  image: string;
};

type UserInfo = {
  name: string;
  email: string;
  address: string;
};

const CarCheckout = () => {
  const [car, setCar] = useState<Car | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    address: '',
  });

  const router = useRouter();

  useEffect(() => {
    try {
      const storedCar = localStorage.getItem('selectedCar');
      if (storedCar) {
        const parsedCar: Car = JSON.parse(storedCar);
        console.log("Fetched Car Data:", parsedCar);
        setCar(parsedCar);
      } else {
        console.warn("No car data found in localStorage.");
      }
    } catch (error) {
      console.error("Error parsing car data:", error);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Car Order Placed Successfully!');
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Car Checkout</h1>

      {/* Car Details */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border-t-4 border-blue-500">
        <h2 className="text-xl font-semibold mb-4 text-blue-700">Selected Car</h2>
        {car ? (
          <div className="flex justify-between items-center border-b py-2">
            <div className="flex items-center">
              <Image
                src={car.image[0]}
                
                alt={car.name}
                width={500}
                height={500}
                className="w-32 h-12 object-cover rounded-md mr-4"
              />
              <div>
                <p className="font-semibold text-blue-800">{car.name}</p>
                <p className="text-sm text-gray-600">Final Price: <span className="font-bold">${car.discountPrice}</span></p>
              </div>
            </div>
            <div className="font-semibold text-blue-600 text-xl">${car.discountPrice.toFixed(2)}</div>
          </div>
        ) : (
          <p>No car selected for checkout.</p>
        )}
      </div>

      {/* Order Summary */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-6 border-t-4 border-blue-500">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Order Summary</h3>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg text-gray-600">Car Price</p>
          <p className="font-semibold text-blue-700">${car ? car.discountPrice.toFixed(2) : '0.00'}</p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="text-lg text-gray-600">Shipping</p>
          <p className="font-semibold text-blue-700">Free</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold text-blue-700">Total</p>
          <p className="text-xl font-semibold text-blue-700">${car ? car.discountPrice.toFixed(2) : '0.00'}</p>
        </div>
      </div>

      {/* User Info Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6 border-t-4 border-blue-500">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Enter Your Details</h3>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-semibold text-gray-600 mb-2">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={userInfo.address}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-900 transition-all"
        >
          Place Order
        </button>
      </form>

      {/* Back to Home */}
      <button
        onClick={() => router.push('/')}
        className="w-full py-3 mt-4 bg-blue-400 text-white rounded-lg font-semibold hover:bg-blue-500 transition-all"
      >
        Back to Home
      </button>
    </div>
  );
};

export default CarCheckout;



























