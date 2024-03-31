
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const CategoryCard = ({ title, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="no-underline">
      <div className='category bg-white p-4 shadow-lg rounded-md flex justify-center items-center gap-4 border border-transparent hover:border-[#1a9068] hover:cursor-pointer text-center'>
        <h1 className="text-lg font-bold text-black w-full">{title}</h1>
        <div className="rounded-lg p-2">
            <BsArrowUpRight size={20} style={{ color: '#1a9068' }} />
        </div>
      </div>
    </a>
  );
}

export default CategoryCard;
