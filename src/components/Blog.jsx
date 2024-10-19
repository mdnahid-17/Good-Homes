import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
    const {id,estate_title,image,segment_name,description,price,status,area,location,facilities,}=blog;
    return (
        <div className='border p-5 mb-5 rounded-md hover:shadow-xl'>
            <img src={image} alt="" />
            <ul className='flex justify-around py-2'>
                {facilities.map((tag,idx)=> <li key={idx} className='text-red-600 font-semibold text-lg'>{tag}</li>)}
            </ul>
            <h3 className='text-2xl font-bold border-dashed border-b-2 pb-3'>{estate_title}</h3>
            <h4 className='text-xl font-semibold'>{segment_name}</h4>
            <p className='text-base text-gray-400'>{description}</p>
            <div className='flex-col lg:flex justify-between py-5'>
                <div>
                <p className='text-lg font-medium'>Price: {price}</p>
                <p className='text-lg font-medium'>Status: {status}</p>
                </div>
              <div>
              <p className='text-lg font-medium'>Area: {area}</p>
              <p className='text-lg font-medium'>Location: {location}</p>
              </div>
            </div>
       <div className='flex justify-end'>
       <Link to={`/blogs/${id}`} className='p-3 lg:w-[180px] rounded-full lg:p-4 bg-red-700 text-white text-lg font-semibold text-center'>View Property</Link>
       </div>
        </div>
    );
};

export default Blog;