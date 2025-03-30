import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { FaEthereum } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import { FaBitcoin } from 'react-icons/fa';
const PriceDataTable = ({ data, searchTerm, setSearchTerm }) => {
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    const products = data?.priceData ? Object.entries(data.priceData) : [];
    setfilteredProducts(products);
    console.log('this is products', products);
  }, [data]);

  const handleSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();
    const priceData = data?.priceData || {};
    const filtered = Object.entries(priceData).filter(([key]) =>
      key.toLowerCase().includes(searchInput)
    );
    setSearchTerm(searchInput);
    setfilteredProducts(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Price List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Coin"
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Asset
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Price(USD)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map(([key, value]) => (
              <motion.tr
                key={key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  {key.toLowerCase().includes('bitcoin') ||
                  key.toLowerCase().includes('btc') ? (
                    <FaBitcoin className="text-orange-500" />
                  ) : key.toLowerCase().includes('ethereum') ||
                    key.toLowerCase().includes('eth') ? (
                    <FaEthereum className="text-purple-500" />
                  ) : key.toLowerCase().includes('solana') ||
                    key.toLowerCase().includes('sol') ? (
                    <SiSolana className="text-green-500" />
                  ) : null}
                  {key}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ${value}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        
      </div>
    </motion.div>
  );
};

export default PriceDataTable;
