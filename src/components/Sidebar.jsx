import React from 'react';

const Sidebar = ({ navLinks, isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity md:hidden ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-green-600">Jus Segar</h1>
          <p className="text-sm text-gray-500">Admin Dashboard</p>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a 
                  href={link.path} 
                  className={`flex items-center px-4 py-3 text-gray-600 rounded-lg transition-colors duration-200 
                    ${index === 0 
                      ? 'bg-green-100 text-green-700 font-bold' 
                      : 'hover:bg-green-50 hover:text-green-600'
                    }`}
                >
                  <img src={link.icon} alt={`${link.name} icon`} className="w-5 h-5 mr-3" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;