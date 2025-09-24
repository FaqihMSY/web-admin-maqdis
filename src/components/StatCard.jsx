import React from 'react';

const StatCard = ({ stat }) => {
  return (
    <div className={`p-6 rounded-2xl text-white shadow-lg transform hover:-translate-y-1 transition-transform duration-300 ${stat.color}`}>
      <p className="text-sm font-medium opacity-80">{stat.title}</p>
      <p className="text-3xl font-bold mt-2">{stat.value}</p>
      <p className="text-xs mt-1 opacity-70">{stat.description}</p>
    </div>
  );
};

export default StatCard;