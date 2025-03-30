const Table = ({children}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        {children}
      </table>
    </div>
  );
};

export default Table;
