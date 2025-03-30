import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PaymentIcon from '@mui/icons-material/Payment';
import { useState } from 'react';
import {
  BarChart2,
  ChartNoAxesCombined,
  DollarSign,
  DollarSignIcon,
  Landmark,
  LandmarkIcon,
  Menu,
  TrendingUp,
} from 'lucide-react';
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
    icon: DollarSignIcon,
    color: '#10b981',
    href: '/PriceData',
  },
  {
    name: 'Transaction',
    icon: PaymentIcon,
    color: '#ec3kjoe9',
    href: '/Transaction',
  },

  {
    name: 'Daily Revenue',
    icon: ChartNoAxesCombined,
    color: '#ec4899',
    href: '/DailyRevenue',
  },

  {
    name: 'Platform Balance',
    icon: Landmark,
    color: '#3b82f6',
    href: '/PlatformBalance',
  },
];
const Sidebar = () => {
  const [isSadebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSadebarOpen ? 'w-64' : 'w-20'
      }`}
      animate={{ width: isSadebarOpen ? 250 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSadebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit cursor-pointer"
        >
          <Menu size={24} />
        </motion.button>
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex item-center p-4 text-sm font-medium rounded-lg hover:bg-gray700 transition-colors md-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: '20px' }}
                />
                <AnimatePresence>
                  {isSadebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
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
