import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

import { motion } from 'framer-motion';

const data = [
  {
    name: 'BTC',
    usdRevenue: 10.61,
    nativeRevenue: 0.000126,
    transactions: 18,
  },
  {
    name: 'ETH',
    usdRevenue: 10.61,
    nativeRevenue: 0.000126,
    transactions: 18,
  },
];

const BiaxialBarChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium md-4 text-gray-100">
        Revenue Per Asset
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip 
          contentStyle={{
            backgroundColor: "rgba(31, 41, 52, 0.8)",
            borderColor: "4b5563",
            itemStyle: "e5e7eb"

          }}
           />
          <Legend />
          <Bar yAxisId="left" dataKey="usdRevenue" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="nativeRevenue" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default BiaxialBarChart;
