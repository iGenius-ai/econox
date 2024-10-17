"use client"

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const TokenomicsChart = () => {
  const data = [
    { name: 'Development', value: 30 },
    { name: 'Marketing', value: 20 },
    { name: 'Team', value: 25 },
    { name: 'Community', value: 25 },
  ];

  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];

  return (
    <div className="w-full max-w-lg mx-auto mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4">Tokenomics</h2>
      <p className="text-center text-gray-300 mb-6">
        Our token distribution is designed to ensure sustainable growth and community engagement.
      </p>
      <div className="flex justify-center">
        <PieChart width={400} height={400} className="md:max-w-lg max-w-[350px] aspect-square mx-auto">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </div>
    </div>
  );
};

export default TokenomicsChart;
