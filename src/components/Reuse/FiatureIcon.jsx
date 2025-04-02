import React from 'react';

const FiatureIcon = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <svg
        width="331.5"
        height="108.285"
        viewBox="0 0 410.22222222222223 134"
        className="looka-1j8o68f"
        style={{ display: 'block', verticalAlign: 'top' }}
      >
        <g fill="#00adb5">
          <rect width="60" height="65" rx="14"></rect>
        </g>
        <g transform="matrix(1.185,0,0,1.185,10.056,-11.792)" fill="#111111">
          <path d="M0.66 16.56c0.06 0 30.72-0.42 30.9-0.24c0.78 0.72 1.2 8.4 1.2 17.1c-2.52-2.7-7.02-6.24-13.68-7.2c-2.04-0.48-3.66-0.3-3.66-0.3c-1.14 0.12-1.98 1.02-1.86 2.16c0.06 0.96 0.84 1.68 1.74 1.86c0.18 0 0.42 0.06 0.66 0.06c0.66 0 1.2 0.06 1.8 0.18c2.34 0.6 5.76 3.06 4.2 12c-4.32-1.26-7.62-0.42-8.34 0.66c-1.44 2.04-0.24 9.48 1.02 17.22c-7.08 0-13.74-0.3-14.16-0.96c-1.2-2.16 0-42.36 0.18-42.54z"></path>
        </g>
        {isSadebarOpen && (
          <g transform="matrix(1.013,0,0,1.013,66.57,-5)" fill="#eeeeee">
            <text x="10" y="50" fontSize="40" fontWeight="bold">
              Fiature
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default FiatureIcon;
