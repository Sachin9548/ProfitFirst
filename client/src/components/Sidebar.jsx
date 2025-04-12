import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo1.png';

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', exact: true },
    { name: 'Analytics', path: '/dashboard/analytics' },
    { name: 'Marketing', path: '/dashboard/marketing' },
    { name: 'Shipping', path: '/dashboard/shipping' },
    { name: 'Products', path: '/dashboard/products' },
    { name: 'Returns', path: '/dashboard/returns' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token'); // or whatever key you're using
    navigate('/Login');
  };

  return (
    <aside className="w-64 p-4 bg-[#141318] text-white flex flex-col justify-between">
      <div>
        <img src={Logo} alt="Logo" className="w-40 mb-8" />
        <div className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.exact || false}
              className={({ isActive }) =>
                `block p-2 rounded cursor-pointer hover:bg-[#2BE092] ${
                  isActive ? 'bg-[#2BE092] text-black font-medium' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="hover:bg-[#2BE092] p-2 rounded cursor-pointer">Settings</div>
        <div className="hover:bg-[#2BE092] p-2 rounded cursor-pointer">Help</div>
        <div 
          className="hover:bg-[#2BE092] p-2 rounded cursor-pointer"
          onClick={handleLogout}
        >
          Log Out
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
