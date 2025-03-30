import React from 'react';

const Thead = ({headers}) => {
  return (
    <thead>
      <tr>
        {headers?.map((header) => (
          <th
            key={header}
            className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
          >
            {header.split(/(?=[A-Z])/).join(' ')}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
