

// 'use client';
// import React from 'react';
// import { notFound } from 'next/navigation'; // For handling invalid IDs
// import Image from 'next/image';
// import Link from 'next/link';

// // Define Car type with availability
// interface Car {
//   id: number;
//   name: string;
//   price: number;
//   discountPrice: number;
//   brand: string;
//   carType: string;
//   year: number;
//   engine: string;
//   transmission: string;
//   seatingCapacity: number;
//   safety: string[];
//   specialFeatures: string[];
//   gallery: string[];
//   availability: boolean;
//   description: string;
// }

// // Dummy car data
// const cars: Car[] = [
//   {
//     id: 1,
//     name: "BMW X5",
//     price: 70000,
//     discountPrice: 45000,
//     brand: "Tesla",
//     carType: "X5",
//     year: 2020,
//     engine: "Electric",
//     transmission: "Automatic",
//     seatingCapacity: 5,
//     safety: ["Airbags", "ABS", "Autopilot"],
//     specialFeatures: ["Sunroof", "Cruise Control", "Touchscreen Display"],
//     gallery: ["/images/p3.png", "/images/p3.png", "/images/p3.png"],
//     availability: true,
//     description: "A premium electric sedan with unmatched safety and luxury.",
//   },
//   {
//     id: 2,
//     name: "Ford Mustang",
//     price: 120.0,
//     discountPrice: 100.0,
//     brand: "Ford",
//     carType: "Hybrid",
//     year: 2023,
//     engine: "Hybrid",
//     transmission: "Manual",
//     seatingCapacity: 4,
//     safety: ["Airbags", "ABS", "Lane Assist"],
//     specialFeatures: ["Sunroof", "Cruise Control", "Bluetooth"],
//     gallery: ["/images/p1.png", "/images/p1.png", "/images/p1.png"],
//     availability: true,
//     description: "A powerful hybrid car with stylish design and great performance.",
//   },
//   {
//     id: 3,
//     name: "Audi A6",
//     price: 150.0,
//     discountPrice: 130.0,
//     brand: "Audi",
//     carType: "Electric",
//     year: 2023,
//     engine: "Electric",
//     transmission: "Automatic",
//     seatingCapacity: 5,
//     safety: ["Airbags", "ABS", "Autonomous Driving"],
//     specialFeatures: ["Leather Seats", "Heated Seats", "Sunroof"],
//     gallery: ["/images/p3.png", "/images/p3.png", "/images/p3.png"],
//     availability: true,
//     description: "A luxury electric sedan with cutting-edge technology and premium comfort.",
//   },
//   {
//     id: 4,
//     name: "Mercedes-Benz S-Class",
//     price: 200.0,
//     discountPrice: 180.0,
//     brand: "Mercedes-Benz",
//     carType: "Hybrid",
//     year: 2023,
//     engine: "Hybrid",
//     transmission: "Automatic",
//     seatingCapacity: 5,
//     safety: ["Airbags", "ABS", "Distronic"],
//     specialFeatures: ["Massage Seats", "Sunroof", "Park Assist"],
//     gallery: ["/images/r1.png", "/images/r1.png", "/images/r1.png"],
//     availability: true,
//     description: "A luxurious hybrid car with unmatched comfort and advanced safety features.",
//   },
//   {
//     id: 5,
//     name: "Porsche 911",
//     price: 250.0,
//     discountPrice: 220.0,
//     brand: "Porsche",
//     carType: "Gasoline",
//     year: 2023,
//     engine: "Gasoline",
//     transmission: "Manual",
//     seatingCapacity: 4,
//     safety: ["Airbags", "ABS", "Stability Control"],
//     specialFeatures: ["Turbo Engine", "Sport Mode", "Leather Interior"],
//     gallery: ["/images/r6.png", "/images/r6.png", "/images/r6.png"],
//     availability: true,
//     description: "A high-performance sports car with legendary design and handling.",
//   },
//   {
//     id: 6,
//     name: "Lexus RX 350",
//     price: 78.0,
//     discountPrice: 70.0,
//     brand: "Lexus",
//     carType: "Hybrid",
//     year: 2023,
//     engine: "Hybrid",
//     transmission: "Automatic",
//     seatingCapacity: 5,
//     safety: ["Airbags", "ABS", "Pedestrian Detection"],
//     specialFeatures: ["Touchscreen Display", "Heated Seats", "Keyless Entry"],
//     gallery: ["/images/r7.png", "/images/r7.png", "/images/r7.png"],
//     availability: true,
//     description: "A luxurious hybrid SUV with spacious interior and advanced safety features.",
//   },
//   {
//     id: 7,
//     name: "Chevrolet Camaro",
//     price: 95.0,
//     discountPrice: 85.0,
//     brand: "Chevrolet",
//     carType: "Gasoline",
//     year: 2023,
//     engine: "Gasoline",
//     transmission: "Manual",
//     seatingCapacity: 4,
//     safety: ["Airbags", "ABS", "Traction Control"],
//     specialFeatures: ["Sport Mode", "Bluetooth Connectivity", "Leather Seats"],
//     gallery: ["/images/r8.png", "/images/r8.png", "/images/r8.png"],
//     availability: true,
//     description: "An iconic muscle car with thrilling performance and aggressive styling.",
//   },
//   {
//     id: 8,
//     name: "Tesla Model 3",
//     price: 150.0,
//     discountPrice: 130.0,
//     brand: "Tesla",
//     carType: "Electric",
//     year: 2023,
//     engine: "Electric",
//     transmission: "Automatic",
//     seatingCapacity: 5,
//     safety: ["Airbags", "ABS", "Autopilot"],
//     specialFeatures: ["Sunroof", "Touchscreen Display", "Adaptive Cruise Control"],
//     gallery: ["/images/r1.png", "/images/r1.png", "/images/r1.png"],
//     availability: true,
//     description: "A high-performance electric sedan with advanced self-driving capabilities.",
//   },
// ];

// // Fetch car details by ID
// const getCarById = (id: number): Car | undefined => {
//   return cars.find((car) => car.id === id);
// };

// const CarDetailPage = ({ params }: { params: { id: string } }) => {
//   const carId = parseInt(params.id); // Convert id to number
//   const car = getCarById(carId);

//   // If car not found, show 404
//   if (!car) {
//     notFound(); // Redirects to the 404 page
//   }

//   return (
//     <section className="py-12 bg-blue-50">
//       <div className="container mx-auto px-4">
//         <div className="bg-white p-8 rounded-lg shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Side: Main Image and Gallery */}
//           <div>
//             <Image
//               src={car.gallery[0]}
//               alt={car.name}
//               width={500}
//               height={600}
//               className="w-full h-auto rounded-lg shadow-md mb-4"
//             />
//             <div className="flex gap-4 mt-4 overflow-x-auto">
//               {car.gallery.map((img, index) => (
//                 <Image
//                   key={index}
//                   src={img}
//                   alt={`${car.name} gallery ${index + 1}`}
//                   width={100}
//                   height={100}
//                   className="w-36 h-24 rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Side: Car Details */}
//           <div className="flex flex-col justify-center space-y-4">
//             <h1 className="text-3xl font-bold text-blue-800">{car.name}</h1>
//             <p className="text-gray-600 italic">{car.description}</p>
//             <ul className="list-none text-gray-600 space-y-2">
//               <li>Brand: <span className="text-blue-800 font-semibold">{car.brand}</span></li>
//               <li>Type: <span className="text-blue-800 font-semibold">{car.carType}</span></li>
//               <li>Year: <span className="text-blue-800 font-semibold">{car.year}</span></li>
//               <li>Engine: <span className="text-blue-800 font-semibold">{car.engine}</span></li>
//               <li>Transmission: <span className="text-blue-800 font-semibold">{car.transmission}</span></li>
//               <li>Seating Capacity: <span className="text-blue-800 font-semibold">{car.seatingCapacity}</span></li>
//               <li>
//                 Availability: <span className={`font-bold ${car.availability ? "text-green-600" : "text-red-600"}`}>
//                   {car.availability ? "Available" : "Not Available"}
//                 </span>
//               </li>
//             </ul>

//             <div>
//               <p className="text-gray-600">
//                 <span className="line-through text-gray-500">${car.price}</span> 
//                 <span className="text-red-600 font-bold">${car.discountPrice}</span>
//               </p>
//             </div>

//             <div className="flex gap-4 mt-4 flex-wrap">
//             <Link href="/payment">
//               <button className="py-3 px-6 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition w-full sm:w-auto">
//                 Book Now
//               </button>
//               </Link>
  

//                        <Link href="/testdrive">
//                   <button className="py-3 px-6 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition w-full sm:w-auto">
//               Test Drive
//           </button>
//                     </Link>
  
//                     <Link href="/contact">
//   <button className="py-3 px-6 text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 transition w-full sm:w-auto">
//     Contact Dealer
//   </button>
// </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarDetailPage;































// 'use client';
// import React from 'react';
// import { notFound } from 'next/navigation'; // For handling invalid IDs
// import Image from 'next/image';
// import Link from 'next/link';

// // Define Car type with availability
// interface Car {
//   id: number;
//   name: string;
//   price: number;
//   discountPrice: number;
//   brand: string;
//   carType: string;
//   year: number;
//   engine: string;
//   transmission: string;
//   seatingCapacity: number;
//   safety: string[];
//   specialFeatures: string[];
//   gallery: string[];
//   availability: boolean;
//   description: string;
// }


// // Fetch car details by ID
// const getCarById = (id: number): Car | undefined => {
//   return cars.find((car) => car.id === id);
// };

// const CarDetailPage = ({ params }: { params: { id: string } }) => {
//   const carId = parseInt(params.id); // Convert id to number
//   const car = getCarById(carId);

//   // If car not found, show 404
//   if (!car) {
//     notFound(); // Redirects to the 404 page
//   }

//   return (
//     <section className="py-12 bg-blue-50">
//       <div className="container mx-auto px-4">
//         <div className="bg-white p-8 rounded-lg shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Side: Main Image and Gallery */}
//           <div>
//             <Image
//               src={car.gallery[0]}
//               alt={car.name}
//               width={500}
//               height={600}
//               className="w-full h-auto rounded-lg shadow-md mb-4"
//             />
//             <div className="flex gap-4 mt-4 overflow-x-auto">
//               {car.gallery.map((img, index) => (
//                 <Image
//                   key={index}
//                   src={img}
//                   alt={`${car.name} gallery ${index + 1}`}
//                   width={100}
//                   height={100}
//                   className="w-36 h-24 rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Side: Car Details */}
//           <div className="flex flex-col justify-center space-y-4">
//             <h1 className="text-3xl font-bold text-blue-800">{car.name}</h1>
//             <p className="text-gray-600 italic">{car.description}</p>
//             <ul className="list-none text-gray-600 space-y-2">
//               <li>Brand: <span className="text-blue-800 font-semibold">{car.brand}</span></li>
//               <li>Type: <span className="text-blue-800 font-semibold">{car.carType}</span></li>
//               <li>Year: <span className="text-blue-800 font-semibold">{car.year}</span></li>
//               <li>Engine: <span className="text-blue-800 font-semibold">{car.engine}</span></li>
//               <li>Transmission: <span className="text-blue-800 font-semibold">{car.transmission}</span></li>
//               <li>Seating Capacity: <span className="text-blue-800 font-semibold">{car.seatingCapacity}</span></li>
//               <li>
//                 Availability: <span className={`font-bold ${car.availability ? "text-green-600" : "text-red-600"}`}>
//                   {car.availability ? "Available" : "Not Available"}
//                 </span>
//               </li>
//             </ul>

//             <div>
//               <p className="text-gray-600">
//                 <span className="line-through text-gray-500">${car.price}</span> 
//                 <span className="text-red-600 font-bold">${car.discountPrice}</span>
//               </p>
//             </div>

//             <div className="flex gap-4 mt-4 flex-wrap">
//             <Link href="/payment">
//               <button className="py-3 px-6 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition w-full sm:w-auto">
//                 Book Now
//               </button>
//               </Link>
  

//                        <Link href="/testdrive">
//                   <button className="py-3 px-6 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition w-full sm:w-auto">
//               Test Drive
//           </button>
//                     </Link>
  
//                     <Link href="/contact">
//   <button className="py-3 px-6 text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 transition w-full sm:w-auto">
//     Contact Dealer
//   </button>
// </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarDetailPage;






















// 'use client';
// import React, { useEffect, useState } from 'react';
// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';

// interface Car {
//   id: string;
//   name: string;
//   price: number;
//   discountPrice: number;
//   brand: string;
//   carType: string;
//   year: number;
//   engine: string;
//   transmission: string;
//   seatingCapacity: number;
//   safety: string[];
//   specialFeatures: string[];
//   image: string[];
//   availability: boolean;
//   description: string;
// }

// const CarDetailPage = ({ params }: { params: { id: string } }) => {
//   const [car, setCar] = useState<Car | null>(null);
//   const [loading, setLoading] = useState(true);

//   const carId = params.id;

//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       try {
//         const query = `
//           *[_type == "product" && _id == $id][0]{
//             _id,
//             name,
//             "price": pricePerDay,
//             "discountPrice": discountPricePerDay,
//             brand,
//             "carType": type,
//             year,
//             engine,
//             transmission,
//             "seatingCapacity": seatingCapacity,
//             safety,
//             specialFeatures,
//             "image": image.asset->url,
//             availability,
//             description
//           }
//         `;
//         const result = await client.fetch(query, { id: carId });
//         if (!result) {
//           notFound();
//         } else {
//           setCar({
//             id: result._id,
//             name: result.name,
//             price: result.price || 0,
//             discountPrice: result.discountPrice || 0,
//             brand: result.brand || 'Unknown',
//             carType: result.carType || 'Unknown',
//             year: result.year || 0,
//             engine: result.engine || 'Unknown',
//             transmission: result.transmission || 'Unknown',
//             seatingCapacity: result.seatingCapacity || 0,
//             safety: result.safety || [],
//             specialFeatures: result.specialFeatures || [],
//             // Ensure image is always an array, even if it's a single URL or null
//             image: Array.isArray(result.image) ? result.image : result.image ? [result.image] : [],
//             availability: result.availability || false,
//             description: result.description || 'Select Your Favorite car.',
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching car details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCarDetails();
//   }, [carId]);

//   if (loading) {
//     return <p className="text-center py-8">Loading car details...</p>;
//   }

//   if (!car) {
//     notFound();
//   }

//   return (
//     <section className="py-12 bg-blue-50">
//       <div className="container mx-auto px-4">
//         <div className="bg-white p-8 rounded-lg shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Side */}
//           <div>
//             {car?.image.length > 0 ? (
//               <Image
//                 src={car.image[0]}
//                 alt={car.name}
//                 width={500}
//                 height={600}
//                 className="w-full h-auto rounded-lg shadow-md mb-4"
//               />
//             ) : (
//               <p>No images available</p>
//             )}




//                <div className="flex gap-4 mt-4 overflow-x-auto">
//   {/* First Gallery */}
//   <div className="flex gap-4 mt-4 justify-start">
//     {car?.image.map((img, index) => (
//       <Image
//         key={index}
//         src={img}
//         alt={`${car.name} gallery ${index + 1}`}
//         width={100}
//         height={100}
//         className="w-36 h-24 rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
//       />
//     ))}
//   </div>

//   {/* Second Gallery */}
//   <div className="flex gap-4 mt-4 justify-start">
//     {car?.image.map((img, index) => (
//       <Image
//         key={index}
//         src={img}
//         alt={`${car.name} gallery ${index + 1}`}
//         width={100}
//         height={100}
//         className="w-36 h-24 rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
//       />
//     ))}
//   </div>

//   {/* Third Gallery */}
//   <div className="flex gap-4 mt-4 justify-start">
//     {car?.image.map((img, index) => (
//       <Image
//         key={index}
//         src={img}
//         alt={`${car.name} gallery ${index + 1}`}
//         width={100}
//         height={100}
//         className="w-36 h-24 rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
//       />
//     ))}
//   </div>
// </div>







//           </div>

//           {/* Right Side */}
//           <div className="flex flex-col justify-center space-y-4">
//             <h1 className="text-3xl font-bold text-blue-800">{car.name}</h1>
//             <p className="text-gray-600 italic">{car.description}</p>
//             <ul className="list-none text-gray-600 space-y-2">
//               <li>Brand: <span className="text-blue-800 font-semibold">{car.brand}</span></li>
//               <li>Type: <span className="text-blue-800 font-semibold">{car.carType}</span></li>
//               <li>Year: <span className="text-blue-800 font-semibold">{car.year}</span></li>
//               <li>Engine: <span className="text-blue-800 font-semibold">{car.engine}</span></li>
//               <li>Transmission: <span className="text-blue-800 font-semibold">{car.transmission}</span></li>
//               <li>Seating Capacity: <span className="text-blue-800 font-semibold">{car.seatingCapacity}</span></li>
//               <li>
//                 Availability: <span className={`font-bold ${car.availability ? 'text-green-600' : 'text-red-600'}`}>
//                   {car.availability ? 'Available' : 'Not Available'}
//                 </span>
//               </li>
//             </ul>

//             <div>
//               <p className="text-gray-600">
//                 <span className="line-through text-gray-500">${car.price}</span>{' '}
//                 <span className="text-red-600 font-bold">${car.discountPrice}</span>
//               </p>
//             </div>

//             <div className="flex gap-4 mt-4 flex-wrap">
//               <Link href="/payment">
//                 <button className="py-3 px-6 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition w-full sm:w-auto">
//                   Book Now
//                 </button>
//               </Link>
//               <Link href="/testdrive">
//                 <button className="py-3 px-6 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition w-full sm:w-auto">
//                   Test Drive
//                 </button>
//               </Link>
//               <Link href="/contact">
//                 <button className="py-3 px-6 text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 transition w-full sm:w-auto">
//                   Contact Dealer
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarDetailPage;

















































'use client';
import { FaHeart } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

interface Car {
  id: string;
  name: string;
  price: number;
  discountPrice: number;
  // brand: string;
  carType: string;
  year: number;
  engine: string;
  transmission: string;
  seatingCapacity: number;
  safety: string[];
  specialFeatures: string[];
  image: string[];
  availability: boolean;
  description: string;
}

const CarDetailPage = ({ params }: { params: { id: string } }) => {
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState<Car[]>([]); // Wishlist state

  const carId = params.id;

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const query = `
          *[_type == "product" && _id == $id][0]{
            _id,
            name,
            "price": pricePerDay,
            "discountPrice": discountPricePerDay,
            
            "carType": type,
            year,
           engine,
            transmission,
            "seatingCapacity": seatingCapacity,
            safety,
            specialFeatures,
            "image": image.asset->url,
            availability,
            description
          }
        `;
        const result = await client.fetch(query, { id: carId });
        if (!result) {
          notFound();
        } else {
          setCar({
            id: result._id,
            name: result.name,
            price: result.price || 0,
            discountPrice: result.discountPrice || 64.87,
            // brand: result.brand || 'Unknown',
            carType: result.carType || 'Unknown',
            year: result.year || 2023,
            engine: result.engine || 'Electric',
            transmission: result.transmission || 'Unknown',
            seatingCapacity: result.seatingCapacity || 0,
            safety: result.safety || [],
            specialFeatures: result.specialFeatures || [],
            image: Array.isArray(result.image) ? result.image : result.image ? [result.image] : [],
            availability: result.availability || true,
            description: result.description || 'Book Your car.',
          });
        }
      } catch (error) {
        console.error('Error fetching car details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [carId]);

  useEffect(() => {
    // Load wishlist from localStorage on component mount
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const handleBookNow = () => {
    if (car) {
      localStorage.setItem('selectedCar', JSON.stringify(car)); // Car details save karna
      window.location.href = '/payment2'; // Payment page par redirect karna
    }
  };
  

  useEffect(() => {
    // Save wishlist to localStorage whenever it updates
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleAddToWishlist = () => {
    if (car) {
      const isAlreadyInWishlist = wishlist.some((item) => item.id === car.id);
      if (!isAlreadyInWishlist) {
        setWishlist((prevWishlist) => [...prevWishlist, car]);
        alert(`${car.name} has been added to your wishlist!`);
      } else {
        alert(`${car.name} is already in your wishlist.`);
      }
    }
  };

  if (loading) {
    return <p className="text-center py-8">Loading car details...</p>;
  }

  if (!car) {
    notFound();
  }

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side */}
          <div>
            {car?.image.length > 0 ? (
              <Image
                src={car.image[0]}
                alt={car.name}
                width={500}
                height={600}
                className="w-full h-auto rounded-lg shadow-md mb-4"
              />
            ) : (
              <p>No images available</p>
            )}

      <div className="flex gap-4 mt-4 overflow-x-auto">
     <div className="flex gap-4 mt-4 justify-start">
          {car?.image.map((img, index) => (
      <Image
        key={index}
        src={img}
        alt={`${car.name} gallery ${index + 1}`}
        width={100}
        height={100}
        className="w-36 h-24 rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
      />
    ))}
       </div>

  {/* Second Gallery */}
  <div className="flex gap-4 mt-4 justify-start">
    {car?.image.map((img, index) => (
      <Image
        key={index}
        src={img}
        alt={`${car.name} gallery ${index + 1}`}
        width={100}
        height={100}
        className="w-36 h-24 rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
      />
    ))}
  </div>

  {/* Third Gallery */}
  <div className="flex gap-4 mt-4 justify-start">
    {car?.image.map((img, index) => (
      <Image
        key={index}
        src={img}
        alt={`${car.name} gallery ${index + 1}`}
        width={100}
        height={100}
        className="w-36 h-24 rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform"
      />
    ))}
  </div>
</div>
   </div>



          {/* Right Side */}
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold text-blue-800">{car.name}</h1>
            <p className="text-gray-600 italic">{car.description}</p>
            <ul className="list-none text-gray-600 space-y-2">
              {/* <li>Brand: <span className="text-blue-800 font-semibold">{car.brand}</span></li> */}
              <li>Type: <span className="text-blue-800 font-semibold">{car.carType}</span></li>
              <li>Year: <span className="text-blue-800 font-semibold">{car.year}</span></li>
              <li>Engine: <span className="text-blue-800 font-semibold">{car.engine}</span></li>
              <li>Transmission: <span className="text-blue-800 font-semibold">{car.transmission}</span></li>
              <li>Seating Capacity: <span className="text-blue-800 font-semibold">{car.seatingCapacity}</span></li>
              <li>
                Availability: <span className={`font-bold ${car.availability ? 'text-green-600' : 'text-red-600'}`}>
                  {car.availability ? 'Available' : 'Not Available'}
                </span>
              </li>
            </ul>

            <div>
              <p className="text-gray-600">
                <span className="line-through text-gray-500">${car.price}</span>{' '}
                <span className="text-red-600 font-bold">${car.discountPrice}</span>
              </p>
            </div>

            <div className="flex gap-4 mt-4 flex-wrap">
              <button
           onClick={handleAddToWishlist}
          className="p-3 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-700 transition  sm:w-auto"
             >
              <FaHeart className="w-6 h-6" />
             </button>
             {/* <Link href="/payment">
                <button className="py-3 px-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition  sm:w-auto">
                  Book Now
                </button>
              </Link> */}
              <button
  onClick={handleBookNow}
  className="py-3 px-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition sm:w-auto"
>
  Book Now
</button>

              <Link href="/testdrive">
                  <button className="py-3 px-3 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition sm:w-auto">
              Test Drive
          </button>
            </Link>
             <Link href="/contact">
             <button className="py-3 px-6 text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 transition  sm:w-auto">
             Contact Dealer
          </button>
              </Link>
             

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetailPage;
