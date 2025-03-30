import React from 'react';
import { useState } from 'react';
const Form = () => {
  const [formData, setFormData] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setFormData(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', formData);
  };
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 m-10">
      <div className="flex flex-col items-center mb-6 ">
        <h2 className="text-xl font-semibold text-gray-100">LOGIN AS CEO</h2>
        <form onSubmit={handleSubmit} className="flex gap-2 mt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Access Token"
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData}
              onChange={(e) => setFormData(e.target.value)}
            />
          </div>
          <button
            className="bg-gradient-to-r from-blue-600 to-indigo-700
                text-white font-medium py-2 px-6 rounded-lg
                border-2 border-indigo-400
                shadow-lg
                hover:from-blue-500 hover:to-indigo-600
                hover:border-indigo-300
                hover:shadow-xl
                transition-all duration-300
                transform hover:-translate-y-1
                flex items-center justify-center
                relative overflow-hidden
                group hover:cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
