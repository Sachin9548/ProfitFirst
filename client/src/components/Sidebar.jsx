import React from 'react';
import Logo from '../assets/logo1.png'; // Adjust the path as necessary
const Sidebar = ({ currentPage, setCurrentPage }) => {
  const navItems = ['Dashboard', 'Analytics', 'Marketing', 'Shipping', 'Products', 'Returns'];

  return (
    <aside className="w-64 p-4 bg-[#141318] text-white flex flex-col justify-between">
      <div>
        {/* <h1 className="text-2xl font-bold mb-8"></h1> */}
        <img src={Logo} alt="Logo" className="w-40" />
        <div className="space-y-2">
          {navItems.map(item => (
            <div
              key={item}
              className={`p-2 rounded cursor-pointer hover:bg-[#2BE092] ${currentPage === item ? 'bg-[#2BE092]' : ''}`}
              onClick={() => setCurrentPage(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {['Settings', 'Help', 'Log Out'].map(item => (
          <div key={item} className="hover:bg-[#2BE092] p-2 rounded cursor-pointer">{item}</div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
