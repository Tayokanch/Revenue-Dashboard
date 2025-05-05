import React, { useEffect } from 'react';
import Chart from 'react-google-charts';
import { useState } from 'react';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState(['Date', 'Prices']);
  useEffect(() => {
    const dataCopy = [['Date', 'Prices']];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      console.log("This is copy data", dataCopy)

      setData(dataCopy);
    }
  }, [historicalData]);


  return (
    <Chart chartType="LineChart" data={data} height={'100%'} legendToggle />
  );
};

export default LineChart;
