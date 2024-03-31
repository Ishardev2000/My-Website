import React from 'react';

const CourseCard = ({ title, linkImg, link }) => {
  // Function to handle button click to open URL in new tab
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='bg-black border border-white drop-shadow-xl overflow-hidden my-4 mr-2 text-white rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
      <img src={linkImg} alt={title} className='h-40 w-full object-cover rounded-t-lg' />
      <div className='p-5'>
        <h2 className='py-2 truncate text-lg font-semibold'>{title}</h2>
        {/* Button to open link in a new tab */}
        <button
          onClick={() => openInNewTab(link)}
          className='mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-150 ease-in-out'
        >
          Visit
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
