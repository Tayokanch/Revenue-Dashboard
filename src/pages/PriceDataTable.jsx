import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
const PriceDataTable = ({ searchTerm, setSearchTerm, allCoin, currency }) => {
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    const searchInput = e.target.value.toLowerCase();
    const filteredCoins = allCoin.filter(
      (item) =>
        item?.symbol.toLowerCase().includes(searchTerm) ||
        item?.name.toLowerCase().includes(searchInput)
    );

    setDisplayCoin(filteredCoins);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Crypto Currency</h2>
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
                #
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Coins
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                24H Change
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 cursor-pointer">
            {displayCoin?.slice(0, 15).map((item, key) => (
              <motion.tr
                key={key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  <Link
                    to={`/coin/${item?.id}`}
                    className="flex items-center gap-2 w-full h-full"
                  >
                    {item?.market_cap_rank}
                  </Link>
                </td>

                <td className="gap-2.5 px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <Link
                    to={`/coin/${item?.id}`}
                    className="flex items-center gap-2 w-full h-full"
                  >
                    <img className="w-8.5" src={item?.image} alt={item?.name} />
                    <p>{item?.name + ' - ' + item?.symbol}</p>
                  </Link>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <Link
                    to={`/coin/${item?.id}`}
                    className="block w-full h-full"
                  >
                    {currency?.symbol} {item?.current_price.toLocaleString()}
                  </Link>
                </td>

                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm ${
                    Math.floor(item?.price_change_percentage_24h * 100) < 1
                      ? 'text-red-500'
                      : 'text-green-500'
                  }`}
                >
                  <Link
                    to={`/coin/${item?.id}`}
                    className="block w-full h-full"
                  >
                    {Math.floor(item?.price_change_percentage_24h * 100) / 100}
                  </Link>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <Link
                    to={`/coin/${item?.id}`}
                    className="block w-full h-full"
                  >
                    {currency?.symbol} {item?.market_cap.toLocaleString()}
                  </Link>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <div></div>
    </motion.div>
  );
};

export default PriceDataTable;
