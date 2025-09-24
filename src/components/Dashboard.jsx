import React from 'react';
import StatCard from './StatCard';

const Dashboard = ({ mainStats, sideStats }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mainStats.map((stat) => (
          <StatCard key={stat.title} stat={stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Statistik Penjualan Jus (Per Varian)</h3>
            <span className="px-4 py-1 text-sm font-medium bg-gray-200 text-gray-700 rounded-full">Bulan Ini</span>
          </div>
          <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-center">
              Placeholder untuk Grafik.
              <br/>
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h4 className="text-base font-medium text-gray-600">{sideStats.newOrders.title}</h4>
            <p className="text-5xl font-bold text-gray-800 mt-2">{sideStats.newOrders.value}</p>
            <p className="text-sm text-amber-500 font-semibold mt-1">● {sideStats.newOrders.label}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h4 className="text-base font-medium text-gray-600">{sideStats.onlineVisitors.title}</h4>
            <p className="text-5xl font-bold text-gray-800 mt-2">{sideStats.onlineVisitors.value}</p>
            <p className="text-sm text-lime-500 font-semibold mt-1">● {sideStats.onlineVisitors.label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;