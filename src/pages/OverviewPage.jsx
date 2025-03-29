import React from 'react';
import Header from '../components/Reuse/Header';
import { motion } from 'framer-motion';
import StatCard from '../components/Reuse/StatCard';
import { Zap } from 'lucide-react';

const OverviewPage = () => {
  return (
    <div className="flex overflow-auto relatibe z-20">
      <Header />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Sales" icon ={Zap} value="$30,453" color = "#6366f1" />
          <StatCard name="Total Sales" icon ={Zap} value="$30,453" color = "#6366f1" />
          <StatCard name="Total Sales" icon ={Zap} value="$30,453" color = "#6366f1" />
          <StatCard name="Total Sales" icon ={Zap} value="$30,453" color = "#6366f1" />

        </motion.div>
      </main>
    </div>
  );
};

export default OverviewPage;
