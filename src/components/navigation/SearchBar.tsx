

// 'use client';

// import * as React from "react";
// import { Icon } from "./Icon";
// import { SearchBarProps } from "./types";

// export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//   return (
//     <div className="flex  flex-auto gap-10 px-5 py-2.5 text-sm font-medium tracking-tight text-justify bg-white border border-solid border-slate-300 border-opacity-40 rounded-[70px] text-slate-500 max-w-full">
//       <div className="flex gap-5 w-full md:w-auto"> {/* Make sure it is full width on mobile */}
//         <Icon
//           src="/images/search.png"
//           alt="Search icon"
//           className="w-[24px] h-[24px] "
//         />
//         <label htmlFor="searchInput" className="sr-only">
//           Search something here
//         </label>
//         <input
//           id="searchInput"
//           type="text"
//           className="bg-transparent border-none outline-none basis-auto w-full"  // Full width input
//           placeholder="Search something here"
//           onChange={(e) => onSearch?.(e.target.value)}
//         />
//       </div>
//       <Icon
//         src="/images/filter.png"
//         alt="Filter icon"
//         className="w-[24px] h-[24px]"
//       />
//     </div>
//   );
// };















'use client'
import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import sanityClient from '@sanity/client';

import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  type: string;
  originalprice: number;
  transmission: string;
  fuelCapacity: string;
  seatingCapacity: string;
  pricePerDay: number;
  imageUrl: string;
}

const client = sanityClient({
  projectId: 'kpy3htu1',
  dataset: 'production',
  useCdn: true,
});

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        _id,
        name,
        type,
        originalprice,
        transmission,
        fuelCapacity,
        seatingCapacity,
        pricePerDay,
        "imageUrl": image.asset->url
      }`;

      const result = await client.fetch(query);
      setProducts(result);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  return (
    <div className="relative w-full">
      <div className="flex items-center w-full">
        <FiSearch
          className="text-gray-600 text-xl cursor-pointer"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        />
        {isSearchOpen && (
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 rounded-md w-full sm:w-64 ml-2"
          />
        )}
      </div>

      {isSearchOpen && filteredProducts.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-lg max-h-96 overflow-y-auto w-full sm:w-[300px] z-20">
          <ul className="max-h-96 overflow-y-auto">
            {filteredProducts.map((product) => (
              <li key={product._id} className="p-2 border-b hover:bg-gray-100">
                <a href={`/car/${product._id}`} className="flex items-center space-x-3">
                  {product.imageUrl && (
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="w-16 h-16 sm:w-12 sm:h-12 object-cover rounded"
                    />
                  )}
                  <div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">{product.name}</p>
                    <p className="text-gray-600 text-xs sm:text-sm">${product.pricePerDay}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
