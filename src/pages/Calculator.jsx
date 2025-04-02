import { useState } from 'react';
import { FaCalculator } from 'react-icons/fa';

function Calculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  const toggleCalculator = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-end z-50">
      <button
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        onClick={toggleCalculator}
      >
        <FaCalculator size={24} />
      </button>

      {isOpen && (
        <div className="relative mt-2 w-72 h-96 bg-gray-800 text-white p-4 rounded-xl shadow-xl flex flex-col">
          <input
            type="text"
            value={input}
            className="w-full h-16 p-3 text-right text-xl bg-gray-700 rounded-md mb-3 outline-none"
            readOnly
          />

          <div className="grid grid-cols-4 gap-2 flex-grow">
            {[
              '7',
              '8',
              '9',
              '/',
              '4',
              '5',
              '6',
              '*',
              '1',
              '2',
              '3',
              '-',
              '0',
              '.',
              '=',
              '+',
              'C',
              '%',
            ].map((btn) => (
              <button
                key={btn}
                className="p-4 bg-gray-600 rounded-md text-center text-lg font-bold hover:bg-gray-500"
                onClick={() => handleButtonClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Calculator;
