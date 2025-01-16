import { Link } from "react-router";

const Page404 = () => {
  return (
    <div className='grid gap-4 md:flex md:min-h-[60vh] md:items-center text-white'>
      <div className='text-center'>
        <img width={400} src='/assets/404 Error-rafiki.svg' alt='404' />
      </div>
      <div className='text-center md:text-start'>
        <h1 className='text-3xl'>Page not Found</h1>
        <div className='grid gap-2'>
          <p className='mt-5'>It&apos;s Okay!</p>
          <div className='mt-5'>
            <Link to='/dashboard' className='underline text-red-600'>
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
