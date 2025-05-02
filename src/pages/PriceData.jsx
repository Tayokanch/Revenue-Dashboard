import React, { useState } from 'react';
import Header from '../components/Reuse/Header';
import { FaEthereum } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import { FaBitcoin } from 'react-icons/fa';
import StatCard from '../components/Reuse/StatCard';
import { motion } from 'framer-motion';
import { useCustomContext } from '../Context/CustomContext';
import PriceDataTable from './PriceDataTable';
import Title from '../components/Reuse/Title';
import Currency from '../components/Reuse/Currency';
const PriceData = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, allCoin } = useCustomContext();

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header>
        <Title title={'Price Data'}></Title>
        <Currency />
      </Header>
      <main className="max-w 7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-8"
        >
          <StatCard
            name={`BTC`}
            icon={FaBitcoin}
            value={`${data?.priceData?.BTC}`}
            color="#F7931A"
          />
          <StatCard
            name={`ETH`}
            icon={FaEthereum}
            value={`${data?.priceData?.ETH}`}
            color="#627EEA"
          />
          <StatCard
            name={`SOL`}
            icon={SiSolana}
            value={`${data?.priceData?.SOL}`}
            color="#00FFA3"
          />
        </motion.div>
        <PriceDataTable
          data={data}
          allCoin = {allCoin}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </main>
    </div>
  );
};

export default PriceData;
