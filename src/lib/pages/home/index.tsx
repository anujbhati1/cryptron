import { Link } from "react-router";

const Home = () => {
  return (
    <div className='flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center'>
      <h1 className='text-white text-2xl font-bold'>Home</h1>
      <Link
        to='/dashboard'
        className='bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600'
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;
