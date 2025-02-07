


'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Car {
  id: string;
  name: string;
  price: number;
  discountPrice: number;
  brand: string;
  carType: string;
  year: number;
  image: string[]; // Array of images
}

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Car[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const handleRemoveFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((car) => car.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  if (wishlist.length === 0) {
    return (
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-blue-800">Your Wishlist is Empty</h1>
          <p className="text-gray-600 mt-4">Add cars to your wishlist to view them here.</p>
          <Link href="/">
            <button className="py-3 px-6 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition mt-6">
              Go to Home
            </button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Your Wishlist</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((car) => (
            <div key={car.id} className="bg-white p-6 rounded-lg shadow-lg">
              {car.image.length > 0 ? (
                <Image
                  src={car.image[0]}
                  alt={car.name}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg mb-4"
                />
              ) : (
                <p>No image available</p>
              )}
              <h2 className="text-xl font-bold text-blue-800">{car.name}</h2>
              <p className="text-gray-600">Brand: {car.brand}</p>
              <p className="text-gray-600">Type: {car.carType}</p>
              <p className="text-gray-600">Year: {car.year}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-600">
                  <span className="line-through text-gray-500">${car.price}</span>{' '}
                  <span className="text-red-600 font-bold">${car.discountPrice}</span>
                </p>
                <button
                  onClick={() => handleRemoveFromWishlist(car.id)}
                  className="py-2 px-4 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
              <div className="flex gap-4 mt-4">
                <Link href={`/final?id=${car.id}`}>
                  <button className="py-2 px-4 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition w-full">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishlistPage;





























// 'use client';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// interface Car {
//   id: string;
//   name: string;
//   price: number;
//   discountPrice: number;
//   brand: string;
//   carType: string;
//   year: number;
//   image: string[]; // Array of images
// }

// const WishlistPage = () => {
//   const [wishlist, setWishlist] = useState<Car[]>([]);

//   useEffect(() => {
//     const storedWishlist = localStorage.getItem('wishlist');
//     if (storedWishlist) {
//       setWishlist(JSON.parse(storedWishlist));
//     }
//   }, []);

//   const handleRemoveFromWishlist = (id: string) => {
//     const updatedWishlist = wishlist.filter((car) => car.id !== id);
//     setWishlist(updatedWishlist);
//     localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//   };

//   if (wishlist.length === 0) {
//     return (
//       <section className="py-12 bg-blue-50">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-2xl font-bold text-blue-800">Your Wishlist is Empty</h1>
//           <p className="text-gray-600 mt-4">Add cars to your wishlist to view them here.</p>
//           <Link href="/">
//             <button className="py-3 px-6 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition mt-6">
//               Go to Home
//             </button>
//           </Link>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-12 bg-blue-50">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold text-blue-800 mb-6">Your Wishlist</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {wishlist.map((car) => (
//             <div key={car.id} className="bg-white p-6 rounded-lg shadow-lg">
//               {car.image.length > 0 ? (
//                 <Image
//                   src={car.image[0]}
//                   alt={car.name}
//                   width={400}
//                   height={300}
//                   className="w-full h-auto rounded-lg mb-4"
//                 />
//               ) : (
//                 <p>No image available</p>
//               )}
//               <h2 className="text-xl font-bold text-blue-800">{car.name}</h2>
//               <p className="text-gray-600">Brand: {car.brand}</p>
//               <p className="text-gray-600">Type: {car.carType}</p>
//               <p className="text-gray-600">Year: {car.year}</p>
//               <div className="flex justify-between items-center mt-4">
//                 <p className="text-gray-600">
//                   <span className="line-through text-gray-500">${car.price}</span>{' '}
//                   <span className="text-red-600 font-bold">${car.discountPrice}</span>
//                 </p>
//                 <button
//                   onClick={() => handleRemoveFromWishlist(car.id)}
//                   className="py-2 px-4 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition"
//                 >
//                   Remove
//                 </button>
//               </div>
//               <div className="flex gap-4 mt-4">
//                 <Link href={{ pathname: "/final", query: { id: car.id } }}>
//                   <button className="py-2 px-4 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition w-full">
//                     Book Now
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WishlistPage;
