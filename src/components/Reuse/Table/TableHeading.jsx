import React from 'react'

const TableHeading = ({text}) => {
  return (
    <div className="flex justify-between items-center">
    <h2 className="text-xl font-semibold text-gray-100">
      {text}
    </h2>
  </div>
  )
}

export default TableHeading