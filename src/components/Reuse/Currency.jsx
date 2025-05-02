import React from 'react';
import { useCustomContext } from '../../Context/CustomContext';
const Currency = () => {
  const { currency, setCurrency } = useCustomContext();

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case 'usd':
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      case 'gbp':
        setCurrency({ name: 'gbp', symbol: '£' });
        break;
      case 'eur':
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      default:
        setCurrency({ name: 'usd', symbol: '$' });
    }
  };
  return (
    <select
      onChange={currencyHandler}
      className="text-xl font-semibold text-gray-100 cursor-pointer backdrop-blur-md shadow-lg border-2 rounded-md border-gray-700 "
    >
      <option className="cursor-pointer" value="usd">
        USD
      </option>
      <option className="cursor-pointer" value={'gbp'}>
        GBP
      </option>
      <option className="cursor-pointer" value={'eur'}>
        EUR
      </option>
    </select>
  );
};

export default Currency;
