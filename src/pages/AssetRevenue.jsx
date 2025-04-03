import React from 'react';
import Header from '../components/Reuse/Header';
import { motion } from 'framer-motion';
import StatCard from '../components/Reuse/StatCard';
import { Zap } from 'lucide-react';
import { useCustomContext } from '../Context/CustomContext';
import TotalDailyRevenue from './TotalDailyRevenue';
import { Bitcoin } from 'lucide-react';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentsIcon from '@mui/icons-material/Payments';

const Asset = () => {
  const { data } = useCustomContext();

  return (
    <div className="flex-1 overflow-auto relatibe z-20">
      <Header title="ASSET & REVENUE" />
      <main className="max-w-8xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Revenue from Crypto Payment"
            icon={Bitcoin}
            value={`${data.totalRevenueForCryptoPayment}`}
            color="#6366f1"
          />
          <StatCard
            name="Cypto Revenue in USD"
            icon={MonetizationOnIcon}
            value={`${data.totalRevenueForCryptoPaymentUSD}`}
            color="#10b981"
          />
          <StatCard
            name="Total Crypto Payments Processed"
            icon={PaymentsIcon}
            value={`${data.totalAmountMadeProcessForCryptolPayment}`}
            color="#3b82f6"
          />

          <StatCard
            name="Total Crypto Transcation Count"
            icon={Zap}
            value={`${data.totalTransactionForCryptoPayment}`}
            color="#3b82f6"
          />
        </motion.div>

        <TotalDailyRevenue data={data} />
      </main>
    </div>
  );
};

export default Asset;
