
// import Link from "next/link";
// import Image from "next/image";
// // import * as React from "react";

// // Define the types for the CarCard component props
// type CarCardProps = {
//   name: string;
//   type: string;
//   image: string;
//   fuelCapacity: string;
//   transmission: string;
//   capacity: string;
//   price: number;
//   discountedPrice?: number;
//   favoriteIcon: string;
// };

// // CarCard Component
// export const CarCard: React.FC<CarCardProps> = ({
//   name,
//   type,
//   image,
//   fuelCapacity,
//   transmission,
//   capacity,
//   price,
//   discountedPrice,
//   favoriteIcon,
// }) => {
//   return (
//     <div className="flex overflow-hidden flex-col p-4 bg-white rounded-xl w-full max-w-[300px] relative border border-gray-200 mx-auto">
//       {/* Heart Icon */}

//       <Image
//         loading="lazy"
//         src={favoriteIcon}
//         alt="Favorite Icon"
//         height={6}
//         width={6}
//         className="absolute top-3 right-3 w-6 aspect-square cursor-pointer z-10 hover:text-red-600"
//       />
//       <div className="flex gap-5 justify-between font-bold">
//         <div className="flex flex-col">
//           <div className="text-xl tracking-tight text-gray-900">{name}</div>
//           <div className="mt-1 text-sm tracking-tight text-slate-400">{type}</div>
//         </div>
//       </div>
//       <Image
//         loading="lazy"
//         src={image}
//         alt={`${name} car`}
//         height={250}
//         width={250}
//         className="object-contain self-center mt-16 max-w-full w-[250px] max-md:mt-10"
//       />
//       <div className="flex gap-4 items-start mt-8 text-sm font-medium leading-5 text-slate-400">
//         <div className="flex gap-1.5 items-start tracking-tight whitespace-nowrap">
//           <Image
//             loading="lazy"
//             src="/images/5.svg"
//             alt="Fuel Icon"
//             height={6}
//             width={6}
//             className="object-contain shrink-0 w-6 aspect-square"
//           />
//           <div className="w-7">{fuelCapacity}</div>
//         </div>
//         <div className="flex gap-1 items-start whitespace-nowrap">
//           <Image
//             loading="lazy"
//             src="/images/6.svg"
//             alt="Transmission Icon"
//             height={6}
//             width={6}
//             className="object-contain shrink-0 w-6 aspect-square"
//           />
//           <div className="w-12">{transmission}</div>
//         </div>
//         <div className="flex gap-1.5 items-start">
//           <Image
//             loading="lazy"
//             src="/images/7.svg"
//             alt="Capacity Icon"
//             height={6}
//             width={6}
//             className="object-contain shrink-0 w-6 aspect-square"
//           />
//           <div className="w-[60px]">{capacity}</div>
//         </div>
//       </div>
//       <div className="flex gap-3 mt-5 w-full">
//         <div className="flex flex-col font-bold text-slate-900">
//           <div className="text-xl">
//             ${price}.00/ <span className="text-sm text-slate-900">day</span>
//           </div>
//           {discountedPrice && (
//             <div className="mt-1 text-sm">${discountedPrice}.00</div>
//           )}
//         </div>

// <Link href="/details">
//         <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
//           Rent Now
//         </button>
//         </Link>
       
//       </div>
//     </div>
//   );
// };

// // Car Recommendation Page
// export const CarRecommendationPage: React.FC = () => {
//   const cars = [
//     {
//       name: "Tesla Model 3",
//       type: "Electric",
//       image: "/images/r1.png",
//       fuelCapacity: "100 kWh",
//       transmission: "Automatic",
//       capacity: "5 seats",
//       price: 100,
//       favoriteIcon: "/images/heart.png",
//     },
//     {
//       name: "Ford Mustang",
//       type: "Gasoline",
//       image: "/images/r2.png",
//       fuelCapacity: "60 L",
//       transmission: "Manual",
//       capacity: "4 seats",
//       price: 80,
//       favoriteIcon: "/images/red.png",
//     },
//     {
//             name: "BMW X5",
//             type: "Diesel",
//             image: "/images/r3.png",
//             fuelCapacity: "70 L",
//             transmission: "Automatic",
//             capacity: "7 seats",
//             price: 150,
           
//             favoriteIcon: "/images/heart.png"
//           },
//           {
//             name: "Audi A6",
//             type: "Hybrid",
//             image: "/images/r4.png",
//             fuelCapacity: "50 L",
//             transmission: "Automatic",
//             capacity: "5 seats",
//             price: 120,
           
//             favoriteIcon: "/images/red.png"
//           },
//           {
//             name: "Mercedes-Benz C-Class",
//             type: "Gasoline",
//             image: "/images/r5.png",
//             fuelCapacity: "65 L",
//             transmission: "Automatic",
//             capacity: "5 seats",
//             price: 140,
           
//             favoriteIcon: "/images/heart.png"
//           },
//           {
//             name: "Porsche 911",
//             type: "Gasoline",
//             image: "/images/r6.png",
//             fuelCapacity: "60 L",
//             transmission: "Manual",
//             capacity: "4 seats",
//             price: 200,
           
//             favoriteIcon: "/images/red.png"
//           },
//           {
//             name: "Chevrolet Camaro",
//             type: "Gasoline",
//             image: "/images/r7.png",
//             fuelCapacity: "70 L",
//             transmission: "Manual",
//             capacity: "4 seats",
//             price: 110,
            
//             favoriteIcon: "/images/heart.png"
//           },
//           {
//             name: "Nissan Altima",
//             type: "Hybrid",
//             image: "/images/r8.png",
//             fuelCapacity: "50 L",
//             transmission: "Automatic",
//             capacity: "5 seats",
//             price: 90,
            
//             favoriteIcon: "/images/red.png"
//           }
    
//   ];

//   return (
//     <div className="p-6 bg-gray-100">
//       <h2 className="text-xl font-bold text-slate-400 text-left ml-4 mb-8">
//         Recommended Car
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {cars.map((car, index) => (
//           <CarCard key={index} {...car} />
//         ))}
//       </div>
//       <div className="justify-center flex mt-12">
//         <Link href="/category">
//         <button
//           className="gap-2 px-6 py-3 text-base font-medium tracking-tight flex justify-center text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[170px] whitespace-nowrap"
//         >
//           Show more cars
//         </button>
//         </Link>
//       </div>
//     </div>
//   );
// };




















// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaGasPump, FaCogs, FaUserFriends } from 'react-icons/fa';

// type Car = {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
//   type: string;
//   fuelCapacity: string;
//   transmission: string;
//   capacity: string;
// };

// const CarRecommendationPag: React.FC = () => {
//   const cars: Car[] = [
//     {
//       id: 1,
//       name: "BMW X5",
//       price: "80.0/day",
//       image: "/images/r2.png",
//       type: "Gasoline",
//       fuelCapacity: "60L",
//       transmission: "Manual",
//       capacity: "2People",
//     },
//     {
//       id: 2,
//       name: "Ford Mustang",
//       price: "12.0/day",
//       image: "/images/p1.png",
//       type: "Hybrid",
//       fuelCapacity: "5 L",
//       transmission: "Manual",
//       capacity: "4People",
//     },
//     {
//       id: 3,
//       name: "Audi A6",
//       price: "/day",
//       image: "/images/p3.png",
//       type: "Electric",
//       fuelCapacity: "70L",
//       transmission: "Automatic",
//       capacity: "5People",
//     },
//     {
//       id: 4,
//       name: "Mercedes-Benz S-Class",
//       type: "Hybrid",
//       image: "/images/r1.png",
//       fuelCapacity: "80L",
//       transmission: "Automatic",
//       capacity: "5seats",
//       price: "/day",
//     },
//     {
//       id: 5,
//       name: "Porsche 911",
//       type: "Gasoline",
//       image: "/images/r6.png",
//       fuelCapacity: "60L",
//       transmission: "Manual",
//       capacity: "4seats",
//       price: "/day",
//     },
//     {
//       id: 6,
//       name: "Lexus RX 350",
//       type: "Hybrid",
//       image: "/images/r7.png",
//       fuelCapacity: "70L",
//       transmission: "Automatic",
//       capacity: "5seats",
//       price: "78/day",
//     },
//     {
//       id: 7,
//       name: "Chevrolet Camaro",
//       type: "Gasoline",
//       image: "/images/r8.png",
//       fuelCapacity: "65L",
//       transmission: "Manual",
//       capacity: "4seats",
//       price: "95/day",
//     },
//     {
//       id: 8,
//       name: "Tesla Model 3",
//       type: "Electric",
//       image: "/images/r1.png",
//       fuelCapacity: "1kWh",
//       transmission: "Automatic",
//       capacity: "5seats",
//       price: "76/day",
//     },
//   ];

//   return (
//     <section className="py-8 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-2xl font-semibold mb-6">Car Recommendations</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {cars.map((car) => (
//             <Link key={car.id} href={`/car/${car.id}`}>
//               <div className="cursor-pointer bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative">
//                 <div className="mt-6 mb-2 text-left">
//                   <h3 className="text-lg font-bold">{car.name}</h3>
//                   <p className="text-sm text-gray-500">{car.type}</p>
//                 </div>

//                 {/* Car Image */}
//                 <div className="w-full h-48 mb-4 relative">
//                   <Image
//                     src={car.image}
//                     alt={car.name}
//                     layout="fill"
//                     objectFit="contain"
//                     className="rounded-md"
//                   />
//                 </div>

//                 {/* Icons and Labels */}
//                 <div className="flex justify-between items-center text-gray-600 mb-4">
//                   <p className="flex items-center text-sm">
//                     <FaGasPump className="mr-2 text-blue-500" />
//                     {car.fuelCapacity}
//                   </p>
//                   <p className="flex items-center text-sm">
//                     <FaCogs className="mr-2 text-green-500" />
//                     {car.transmission}
//                   </p>
//                   <p className="flex items-center text-sm">
//                     <FaUserFriends className="mr-2 text-red-500" />
//                     {car.capacity}
//                   </p>
//                 </div>

//                 {/* Price and Rent Now Button */}
//                 <div className="flex justify-between items-center">
//                   <p className="text-lg font-extrabold text-black">${car.price}</p>
//                   <button className="gap-2 px-6 py-2 text-base font-normal justify-center text-center text-white bg-[#3563E9] rounded">
//                     Rent Now
//                   </button>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarRecommendationPag;
































// 'use client';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaGasPump, FaCogs, FaUserFriends } from 'react-icons/fa';
// import { client } from '@/sanity/lib/client';

// type Car = {
//   id: string; // Since Sanity uses unique `_id`
//   name: string;
//   price: string;
//   image: string;
//   type: string;
//   fuelCapacity: string;
//   transmission: string;
//   capacity: string;
// };

// const CarRecommendationPag: React.FC = () => {
//   const [cars, setCars] = useState<Car[]>([]); // State to store fetched cars
//   const [loading, setLoading] = useState(true); // Loading state

//   // Fetch data from Sanity
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const query = await client.fetch(
//           `*[_type == "product"] [5..15]{
//             _id,
//             name,
//             "price": pricePerDay,
//             "image": image.asset->url,
//             type,
//             "fuelCapacity": fuelCapacity,
//             transmission,
//             "capacity": seatingCapacity
//           }`
//         );
//         setCars(
//           query.map((car: any) => ({
//             id: car._id,
//             name: car.name || "Unknown Car",
//             price: car.price || "N/A",
//             image: car.image || "/fallback-image.png", // Fallback image
//             type: car.type || "Unknown",
//             fuelCapacity: car.fuelCapacity || "Unknown",
//             transmission: car.transmission || "Unknown",
//             capacity: car.capacity || "Unknown",
//           }))
//         );
//       } catch (error) {
//         console.error("Error fetching cars:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p className="text-center py-8">Loading car recommendations...</p>;
//   }

//   return (
//     <section className="py-8 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-2xl font-semibold mb-6">Car Recommendations</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {cars.map((car) => (
//             <Link key={car.id} href={`/car/${car.id}`}>
//               <div className="cursor-pointer bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative">
//                 <div className="mt-6 mb-2 text-left">
//                   <h3 className="text-lg font-bold">{car.name}</h3>
//                   <p className="text-sm text-gray-500">{car.type}</p>
//                 </div>

//                 {/* Car Image */}
//                 <div className="w-full h-48 mb-4 relative">
//                   {car.image ? (
//                     <Image
//                       src={car.image}
//                       alt={car.name}
//                       layout="fill"
//                       objectFit="contain"
//                       className="rounded-md"
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
//                       No Image
//                     </div>
//                   )}
//                 </div>

//                 {/* Icons and Labels */}
//                 <div className="flex justify-between items-center text-gray-600 mb-4">
//                   <p className="flex items-center text-sm">
//                     <FaGasPump className="mr-2 text-blue-500" />
//                     {car.fuelCapacity}
//                   </p>
//                   <p className="flex items-center text-sm">
//                     <FaCogs className="mr-2 text-green-500" />
//                     {car.transmission}
//                   </p>
//                   <p className="flex items-center text-sm">
//                     <FaUserFriends className="mr-2 text-red-500" />
//                     {car.capacity}
//                   </p>
//                 </div>

//                 {/* Price and Rent Now Button */}
//                 <div className="flex justify-between items-center">
//                   <p className="text-lg font-extrabold text-black">${car.price}</p>
//                   <button className="gap-2 px-6 py-2 text-base font-normal justify-center text-center text-white bg-[#3563E9] rounded">
//                     Rent Now
//                   </button>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarRecommendationPag;



















'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGasPump, FaCogs, FaUserFriends } from 'react-icons/fa';
import { client } from '@/sanity/lib/client';

type Car = {
  id: string;
  name: string;
  price: string;
  image: string; // Ensure image is always a string
  type: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
};

type CarSanityData = {
  _id: string;
  name: string;
  pricePerDay: string | number;
  image?: { asset?: { url?: string } };
  type?: string;
  fuelCapacity?: string;
  transmission?: string;
  seatingCapacity?: string;
};

const CarRecommendationPag: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]); // State for fetched cars
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = await client.fetch<CarSanityData[]>(
          `*[_type == "product"][5..16] {
            _id,
            name,
            "pricePerDay": pricePerDay,
            "image": image.asset->url,
            type,
            "fuelCapacity": fuelCapacity,
            transmission,
            "seatingCapacity": seatingCapacity
          }`
        );

        // Map and format data safely
        const mappedCars: Car[] = query.map((car) => ({
          id: car._id,
          name: car.name || 'Unknown Car',
          price: car.pricePerDay ? car.pricePerDay.toString() : 'N/A',
          image: typeof car.image === 'string' ? car.image : '/fallback-image.png', // Always set as string
          type: car.type || 'Unknown Type',
          fuelCapacity: car.fuelCapacity || 'Unknown Capacity',
          transmission: car.transmission || 'Unknown Transmission',
          capacity: car.seatingCapacity || 'Unknown Seating',
        }));

        setCars(mappedCars); // Update state
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center py-8">Loading car recommendations...</p>;
  }

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Car Recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <Link key={car.id} href={`/car/${car.id}`}>
              <div className="cursor-pointer bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="mt-6 mb-2 text-left">
                  <h3 className="text-lg font-bold">{car.name}</h3>
                  <p className="text-sm text-gray-500">{car.type}</p>
                </div>

                {/* Car Image */}
                <div className="w-full h-48 mb-4 relative">
                  <Image
                    src={car.image}
                    alt={car.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>

                {/* Icons and Labels */}
                <div className="flex justify-between items-center text-gray-600 mb-4">
                  <p className="flex items-center text-sm">
                    <FaGasPump className="mr-2 text-blue-500" />
                    {car.fuelCapacity}
                  </p>
                  <p className="flex items-center text-sm">
                    <FaCogs className="mr-2 text-green-500" />
                    {car.transmission}
                  </p>
                  <p className="flex items-center text-sm">
                    <FaUserFriends className="mr-2 text-red-500" />
                    {car.capacity}
                  </p>
                </div>

                {/* Price and Rent Now Button */}
                <div className="flex justify-between items-center">
                  <p className="text-lg font-extrabold text-black">
                    {car.price !== 'N/A' ? `$${car.price}` : car.price}
                  </p>
                  <button className="gap-2 px-6 py-2 text-base font-normal justify-center text-center text-white bg-[#3563E9] rounded">
                    Rent Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarRecommendationPag;
