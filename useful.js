<motion.div
  className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-semibold text-gray-100">Price List</h2>
  </div>
  <div className="overflow-x-auto">
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
                  {header.split(/(?=[A-Z])/).join(' ')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {revenuePerBill.map((item) => (
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
                          {Object.entries(item[header]).map(([key, value]) => (
                            <span key={key}>
                              {key}: {typeof value === 'number' ? value : value}
                            </span>
                          ))}
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
  </div>
</motion.div>;
