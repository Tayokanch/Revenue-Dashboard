import React, { useEffect } from 'react';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const Form = ({message, setMessage}) => {
  const [formData, setFormData] = useState('');

  const encode = (data) => btoa(JSON.stringify(data));
  const decode = (token) => JSON.parse(atob(token));
  const payload = { role: 'CEO', email: 'FIATURE.CEO.co.uk' };
  const token = encode(payload);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.trim() === token) {
      setMessage({ message: ' Access granted!', status: true });
      console.log('Successful login:', decode(token));
    } else {
      setMessage({
        message: ' Invalid token or Expired Token',
        status: false,
      });
    }
  };
  return (
    <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700  ">
      <div className="flex flex-col [&>*:not(:last-child)]:mb-4">
        <h2 className="text-xl font-semibold text-gray-100 text-center">
          LOGIN AS CEO
        </h2>
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
        {message?.status === true && (
          <div className="border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-4 py-3 rounded-lg mb-4 flex items-center gap-2 animate-fade-in shadow-lg shadow-emerald-500/10">
            <ThumbUpIcon className="w-5 h-5" />
            {message.message}
          </div>
        )}

        {message?.status === false && (
          <div className="border border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400 px-4 py-3 rounded-lg mb-4 flex items-center gap-2 animate-fade-in shadow-lg shadow-rose-500/10">
            <CloseIcon className="w-5 h-5" />
            {message.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
