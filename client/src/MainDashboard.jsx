import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Marketing from './pages/Marketing';

function MainDashboard() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'Analytics':
        return <Analytics />;
      case 'Marketing':
        return <Marketing />;
      case 'Dashboard':
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex bg-[#0d1d1e] overflow-hidden relative">
         {/* Add the two blurred circles */}
       <div 
    className="absolute left-80 -top-48 w-full h-64 rounded-full blur-[190px] opacity-50 z-0"
    style={{
      background: 'linear-gradient(to right, rgb(18, 235, 142), rgb(18, 235, 142))',

    }}
  ></div>
  
  <div 
    className="absolute left-80 -bottom-24 w-full h-24 rounded-full blur-[190px] opacity-50 z-0"
    style={{
      background: 'linear-gradient(to left, rgb(18, 235, 142), rgb(18, 235, 142))',
    }}
  ></div>
                {/* Sidebar */}
            <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col max-h-screen">
                 <Topbar />
            
                {/* Scrollable content area */}
                <div className="flex-1 overflow-y-auto p-4 hide-scrollbar">
                    {renderPage()}
                </div>
            </div>
    </div>
  );
}

export default MainDashboard;
