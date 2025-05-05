import React, { useState } from 'react';
import Header from '../components/Reuse/Header';
import Form from './Form';
import { motion } from 'framer-motion';
import TableHeading from '../components/Reuse/Table/TableHeading';
import Table from '../components/Reuse/Table/Table';
import { useNavigate } from 'react-router-dom';
import { useCustomContext } from '../Context/CustomContext';
import { BsStripe } from 'react-icons/bs';
import { SiBinance } from 'react-icons/si';
import { TbBrandPaypay } from 'react-icons/tb';
import { IoMdAlert } from 'react-icons/io';
import venly from '../assets/62f10abd4177a24963a5e034.png';
import PlatformChart from './PlatformChart';

const PlatformBalance = () => {
  const { data } = useCustomContext();
  const [message, setMessage] = useState(null);
  const platformBalances = data?.platformBalances || [];
  const headers =
    platformBalances.length > 0 ? Object.keys(platformBalances[0]) : [];
  const navigate = useNavigate();

  if (!message?.status) {
    return <Form setMessage={setMessage} message={message} />;
  }
  if (message?.status) {
    return (
      <div className="relative flex-1 overflow-auto z-10">
        <Header title="Platform Balance" />

        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mt-5 mx-10 lg:mx-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TableHeading text={'Providers Balance & Threshold'} />
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {platformBalances.map((item) => (
                    <motion.tr
                      key={item.asset}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {headers.map((header) => {
                        if (header === 'provider') {
                          return (
                            <td
                              key={header}
                              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center"
                            >
                              {item.provider.toLowerCase().includes('venly') ? (
                                <img
                                  src={venly}
                                  loading="lazy"
                                  alt="Venly Logo"
                                  className="w-6 h-6"
                                />
                              ) : item.provider
                                  .toLowerCase()
                                  .includes('repeadly') ? (
                                <TbBrandPaypay className="text-[#627EEA]" />
                              ) : item.provider
                                  .toLowerCase()
                                  .includes('strip') ? (
                                <BsStripe className="text-[#6772e5]" />
                              ) : item.provider
                                  .toLowerCase()
                                  .includes('binance') ? (
                                <SiBinance className="text-[#f0b90b]" />
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
                                      {typeof value === 'number'
                                        ? value
                                        : value}
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 flex items-center">
                        <span
                          className={`w-3 h-3 rounded-full ${
                            item.availableBalance > 2 * item.threshold
                              ? 'bg-green-500'
                              : item.availableBalance > 1.2 * item.threshold
                              ? 'bg-yellow-500'
                              : item.availableBalance < item.threshold
                              ? 'bg-red-500'
                              : 'bg-gray-500'
                          }`}
                        ></span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Table>
        </motion.div>

        <motion.div
          className="max-w-[400px] w-full bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mt-5 mx-10 lg:mx-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="">
            <div className="flex items-center gap-2 mb-4">
              <IoMdAlert className="text-red-500 text-xl" />
              <TableHeading text="Threshold Alert" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <p className="text-sm">Green = Balance is healthy</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <p className="text-sm">Yellow = Approaching the threshold</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <p className="text-sm">
                  Red = Below threshold, requires top-up
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <PlatformChart data={data} />
        
      </div>
    );
  }
};

export default PlatformBalance;
