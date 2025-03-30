import React from 'react';
import Header from '../components/Reuse/Header';
import { motion } from 'framer-motion';
import StatCard from '../components/Reuse/StatCard';
import { Zap } from 'lucide-react';
import { useCustomContext } from '../Context/CustomContext';
import { TbTransactionDollar } from 'react-icons/tb';
import { BadgeDollarSign } from 'lucide-react';
import BiaxialBarChart from './BiaxialBarChart';
import TotalDailyRevenue from './TotalDailyRevenue';

const OverviewPage = () => {
  const { data, loading, error } = useCustomContext();

  return (
    <div className="flex-1 overflow-auto relatibe z-20">
      <Header title="Financial Overview" />
      <main className="max-w-8xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Daily Revenue"
            icon={Zap}
            value={`${'$' + data.totalDailyRevenueForAllAssetUSD}`}
            color="#6366f1"
          />
          <StatCard
            name="Total Transaction Count"
            icon={TbTransactionDollar}
            value={`${data.totalDailyTransactions}`}
            color="#10b981"
          />

          <StatCard
            name="Daily Amount Processed"
            icon={BadgeDollarSign}
            value={`${'$' + data.totalDailyAmountProcessedUSD}`}
            color="#3b82f6"
          />
          <StatCard
            name="Total Sales"
            icon={TbTransactionDollar}
            value="$30,453"
            color="#6366f1"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:lg:grid-cols-[1fr_1.7fr] gap-8">
          <BiaxialBarChart />
          <TotalDailyRevenue data={data}/>
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
