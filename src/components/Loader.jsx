import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-900">
      <ClipLoader color="#36d7b7" size={70} />
    </div>
  );
};

export default Loader;
