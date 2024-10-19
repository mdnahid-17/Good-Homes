import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center pt-32 space-y-4'>
        <h1 className='text-5xl font-bold'>Oops!</h1>
        <p className='text-xl text-gray-400'>Sorry, an unexpected error has occurred.</p>
       <Link to='/' className='btn btn-outline btn-primary text-lg'>Go Back</Link>
      </div>
    );
};

export default ErrorPage;