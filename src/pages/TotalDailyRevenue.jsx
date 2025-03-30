import React from 'react';
import { motion } from 'framer-motion';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import TableHeading from '../components/Reuse/Table/TableHeading';
import Table from '../components/Reuse/Table/Table';
import { useNavigate } from 'react-router-dom';
const TotalDailyRevenue = ({ data }) => {
  const revenuePerAsset = data.totalDailyRevenuePerAsset || [];

  const headers =
    revenuePerAsset.length > 0 ? Object.keys(revenuePerAsset[0]) : [];
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8 hover:cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      onClick={() => navigate('/Asset&Revenue')}
    >
      <TableHeading text={'Daily Revenue Per Asset'} />
      <Table>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                {headers.map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                  >
                    {header
                      .split(/(?=[A-Z])/)
                      .join(' ')
                      .split(' ')
                      .slice(0, 3)
                      .join(' ')}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {revenuePerAsset.map((item) => (
                <motion.tr
                  key={item.asset}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {headers.map((header) => {
                    if (header === 'asset') {
                      return (
                        <td
                          key={header}
                          className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center"
                        >
                          {item.asset.toLowerCase().includes('bitcoin') ||
                          item.asset.toLowerCase().includes('btc') ? (
                            <FaBitcoin className="text-[#F7931A]" />
                          ) : item.asset.toLowerCase().includes('ethereum') ||
                            item.asset.toLowerCase().includes('eth') ? (
                            <FaEthereum className="text-[#627EEA]" />
                          ) : item.asset.toLowerCase().includes('solana') ||
                            item.asset.toLowerCase().includes('sol') ? (
                            <SiSolana className="text-[#00FFA3]" />
                          ) : null}
                          {item[header]}
                        </td>
                      );
                    }

                    if (typeof item[header] === 'object') {
                      return (
                        <td
                          key={header}
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-300"
                        >
                          <div className="flex flex-col">
                            {Object.entries(item[header]).map(
                              ([key, value]) => (
                                <span key={key}>
                                  {key.toUpperCase()} :{' '}
                                  {typeof value === 'number' ? value : value}
                                </span>
                              )
                            )}
                          </div>
                        </td>
                      );
                    }

                    return (
                      <td
                        key={header}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-300"
                      >
                        {typeof item[header] === 'number'
                          ? item[header]
                          : item[header]}
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Table>
    </motion.div>
  );
};

export default TotalDailyRevenue;
