// components/Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Rental Car Admin</h1>
      <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
