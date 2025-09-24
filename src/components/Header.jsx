import React from 'react';

const Header = ({ userData, setIsSidebarOpen }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b shadow-sm">
      <button 
        onClick={() => setIsSidebarOpen(true)} 
        className="text-gray-500 focus:outline-none md:hidden"
        aria-label="Buka menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <div className="hidden md:block">
        <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
      </div>

      <div className="flex items-center space-x-4">
        <span className="font-medium text-gray-700">{userData.name}</span>
        <img className="w-10 h-10 rounded-full object-cover" src={userData.avatar} alt="User Avatar" />
      </div>
    </header>
  );
};

export default Header;