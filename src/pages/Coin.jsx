import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCustomContext } from '../Context/CustomContext';
import axios from 'axios';
import { Line } from 'recharts';
import LineChart from '../components/LineChart/LineChart';
import Loader from "../components/Loader.jsx"
const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useCustomContext();
  const [newdata, setNedata] = useState(false)

  const fetchCoinData = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-HxwXDEE4qccCb6hQcPajD3W6',
        },
      };
      const coin = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      setCoinData(coin.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchHistoricalData = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-HxwXDEE4qccCb6hQcPajD3W6',
        },
      };
      const historicalData = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`,
        options
      );

      console.log('HistoricalData:', historicalData);
      setHistoricalData(historicalData.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHistoricalData();
    fetchCoinData();
  }, [coinId, currency]);
  return coinData && historicalData ? (
    <>
      <div className="">
        <div className="">
          <img src={coinData.image.large} alt={coinData.id} />
          <p>
            <b>
              {coinData.name}({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
      </div>
      <div className="">
        <LineChart historicalData={historicalData} />
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Coin;
