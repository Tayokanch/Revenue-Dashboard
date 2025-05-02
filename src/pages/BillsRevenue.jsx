import React from 'react';
import Header from '../components/Reuse/Header';
import { motion } from 'framer-motion';
import StatCard from '../components/Reuse/StatCard';
import { Zap } from 'lucide-react';
import { useCustomContext } from '../Context/CustomContext';
import { TbTransactionDollar } from 'react-icons/tb';
import PaymentIcon from '@mui/icons-material/Payment';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import TableHeading from '../components/Reuse/Table/TableHeading';
import Table from '../components/Reuse/Table/Table';
import Title from '../components/Reuse/Title';
import { Gift } from 'lucide-react';
const BillsRevenue = () => {
  const { data } = useCustomContext();

  const revenuePerBill = data?.totalDailyRevenuePerBillType || [];

  const headers =
    revenuePerBill?.length > 0 ? Object.keys(revenuePerBill[0]) : [];

  return (
    <div className="flex-1 overflow-auto relatibe z-20">
      <Header>
        <Title title={'Bill Payment & Revenue'}></Title>
      </Header>
      <main className="max-w-8xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Bill Payments"
            icon={PaymentIcon}
            value={`${'$' + data.totalAmountMadeForBillPayment}`}
            color="#6366f1"
          />
          <StatCard
            name="Revenue from Bill Payments"
            icon={TbTransactionDollar}
            value={`${data.totalRevenueForBillPayment}`}
            color="#10b981"
          />

          <StatCard
            name="Total Bill Transactions"
            icon={Zap}
            value={`${data.totalTransactionForBillPayment}`}
            color="#3b82f6"
          />
        </motion.div>

        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TableHeading text={'Daily Revenue Per Asset'} />
          <Table>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    {headers?.map((header) => (
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
                  {revenuePerBill.map((item) => (
                    <motion.tr
                      key={item.billType}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {headers.map((header) => {
                        if (header === 'billType') {
                          return (
                            <td
                              key={header}
                              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center"
                            >
                              {item.billType
                                .toLowerCase()
                                .includes('airtime') ? (
                                <CellWifiIcon className="text-[#627EEA]" />
                              ) : item.billType
                                  .toLowerCase()
                                  .includes('gift card') ? (
                                <Gift className="text-[#F7931A]" />
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
                                      {key}:{' '}
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
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Table>
        </motion.div>
      </main>
    </div>
  );
};

export default BillsRevenue;
