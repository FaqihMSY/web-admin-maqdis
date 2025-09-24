import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import dashboardIcon from './assets/icon-dashboard.svg';
import chartIcon from './assets/icon-chart.svg';
import juiceIcon from './assets/icon-juice.svg';
import userIcon from './assets/icon-user.svg';
import adminImage from './assets/admin-avatar.png'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const userData = {
    name: 'Admin Jus Segar',
    avatar:adminImage , 
  };
  const navLinks = [
    { name: 'Dashboard', icon: dashboardIcon, path: '#' },//placeholder
    { name: 'Statistik', icon: chartIcon, path: '#' },
    { name: 'Kelola Jus', icon: juiceIcon, path: '#' },
    { name: 'Pelanggan', icon: userIcon, path: '#' },
  ];
  const dashboardStats = [
    {
      title: 'Total Pesanan',
      value: '1.250',
      description: 'Bulan Ini',
      color: 'bg-gradient-to-br from-amber-400 to-orange-500',
    },
    {
      title: 'Stok Jus (Botol)',
      value: '8.420',
      description: 'Siap Kirim',
      color: 'bg-gradient-to-br from-lime-400 to-green-500',
    },
    {
      title: 'Pendapatan Bulan Ini',
      value: 'Rp. 21.570.000',
      description: 'September 2025',
      color: 'bg-gradient-to-br from-rose-400 to-red-500',
    },
  ];
  const sideStats = {
    newOrders: { title: 'Pesanan Baru (7 Hari)', value: 127, label: 'Pesanan Baru' },
    onlineVisitors: { title: 'Pengunjung Online', value: 12, label: 'Sedang Aktif' },
  };


  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar navLinks={navLinks} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userData={userData} setIsSidebarOpen={setIsSidebarOpen} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-6">
          <Dashboard mainStats={dashboardStats} sideStats={sideStats} />
        </main>
      </div>
    </div>
  );
};

export default App;