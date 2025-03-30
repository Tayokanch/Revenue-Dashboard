import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const PlatformChart = ({ data }) => {
  const platformBalances = data?.platformBalances || [];

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mt-5 mx-5 sm:mx-10 lg:mx-20 max-w-full lg:max-w-[700px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Platform Balance Chart
      </h2>
      <div className="h-80">
        {platformBalances.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={platformBalances}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
              <XAxis 
                dataKey="provider" 
                tick={{ fill: '#E2E8F0' }}
                axisLine={{ stroke: '#4A5568' }}
              />
              <YAxis 
                tick={{ fill: '#E2E8F0' }}
                axisLine={{ stroke: '#4A5568' }}
              />
              <Tooltip 
                contentStyle={{
                  background: '#2D3748',
                  borderColor: '#4A5568',
                  borderRadius: '0.5rem',
                  color: '#E2E8F0'
                }}
              />
              <Legend />
              
              {/* Available Balance Bar in green (now comes first) */}
              <Bar
                dataKey="availableBalance"
                fill="#48BB78" // Green color
                name="Available Balance"
                radius={[4, 4, 0, 0]}
              />
              
              {/* Threshold Bar in red (now comes second) */}
              <Bar 
                dataKey="threshold" 
                fill="#F56565" // Red color
                name="Threshold"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </motion.div>
  );
};

export default PlatformChart;