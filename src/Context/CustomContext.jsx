import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
const CustomContext = createContext();

export const CustomProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: 'usd',
    symbol: '$',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/getFinancialData'
        );
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchAllCoin = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': 'CG-HxwXDEE4qccCb6hQcPajD3W6',
          },
        };
        const cryptoData = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
          options
        );
        setAllCoin(cryptoData.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllCoin();
    fetchData();
  }, [currency.name]);

  return (
    <CustomContext.Provider
      value={{ data, loading, allCoin, currency, setCurrency }}
    >
      {children}
    </CustomContext.Provider>
  );
};

export const useCustomContext = () => useContext(CustomContext);
