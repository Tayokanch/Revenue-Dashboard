import { useState } from 'react';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import OverviewPage from './pages/OverviewPage';
import { CustomProvider } from './Context/CustomContext';
import PriceData from './pages/PriceData';
import BillsRevenue from './pages/BillsRevenue';
import Asset from './pages/AssetRevenue';
import PlatformBlance from './pages/PlatformBlance';
import Coin from './pages/Coin';

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <Sidebar />
      <CustomProvider>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/PriceData" element={<PriceData />} />
          <Route path="/Billpayment" element={<BillsRevenue />} />
          <Route path="/Asset&Revenue" element={<Asset />} />
          <Route path="/PlatformBalance" element={<PlatformBlance />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
      </CustomProvider>
    </div>
  );
}

export default App;
