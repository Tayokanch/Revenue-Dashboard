import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PaymentIcon from '@mui/icons-material/Payment';
import { useState } from 'react';
import { CircleDollarSign } from 'lucide-react';
import { BarChart2, ChartNoAxesCombined, Landmark, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const SIDEBAR_ITEMS = [
  {
    name: 'Overview',
    icon: BarChart2,
    color: '#6366f1',
    href: '/',
  },
  {
    name: 'Price Data',
    icon: ChartNoAxesCombined,
    color: '#10b981',
    href: '/PriceData',
  },
  {
    name: 'Bills & Revenue',
    icon: PaymentIcon,
    color: '#ec4899',
    href: '/Billpayment',
  },
  {
    name: 'Assets & Revenue',
    icon: CircleDollarSign,
    color: '#ec4899',
    href: '/Asset&Revenue',
  },
  {
    name: 'Platform Balance',
    icon: Landmark,
    color: '#3b82f6',
    href: '/PlatformBalance',
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
      animate={{ width: isSidebarOpen ? 250 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mb-10"
        >
          <div className="flex items-center gap-4">
            <Menu
              size={34}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors cursor-pointer flex-shrink-0"
            />
            {isSidebarOpen && (
              <div className="flex items-center min-w-0">
                <svg
                  width="180"
                  height="40"
                  viewBox="0 0 300.5 70"
                  style={{ display: 'block' }}
                >
                  <g fill="#00adb5">
                    <rect width="60" height="65" rx="14"></rect>
                  </g>
                  <g
                    transform="matrix(1.185,0,0,1.185,10.056,-11.792)"
                    fill="#111111"
                  >
                    <path d="M0.66 16.56c0.06 0 30.72-0.42 30.9-0.24c0.78 0.72 1.2 8.4 1.2 17.1c-2.52-2.7-7.02-6.24-13.68-7.2c-2.04-0.48-3.66-0.3-3.66-0.3c-1.14 0.12-1.98 1.02-1.86 2.16c0.06 0.96 0.84 1.68 1.74 1.86c0.18 0 0.42 0.06 0.66 0.06c0.66 0 1.2 0.06 1.8 0.18c2.34 0.6 5.76 3.06 4.2 12c-4.32-1.26-7.62-0.42-8.34 0.66c-1.44 2.04-0.24 9.48 1.02 17.22c-7.08 0-13.74-0.3-14.16-0.96c-1.2-2.16 0-42.36 0.18-42.54z"></path>
                  </g>
                  <g transform="matrix(1.013,0,0,1.013,66.57,-5)" fill="#eeeeee">
                    <text x="10" y="50" fontSize="30" fontWeight="bold">
                      Fiature
                    </text>
                  </g>
                </svg>
              </div>
            )}
          </div>
        </motion.button>

        <nav className="flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-3 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: '20px' }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;