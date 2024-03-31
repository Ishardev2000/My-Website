import React from 'react';
import avatar from '../assets/avatar.png';
import quotationMark from '../assets/quotationMark.png';

const FeedBackCard = () => {
  return (
    <div className='bg-white text-black p-8 border border-gray-300 shadow-sm my-8 mx-2 rounded-lg'>
        <div className='flex justify-between items-start'>
            <div className='flex gap-4 items-center'>
                <img src={avatar} alt="feedback" className='w-16 h-16 rounded-full object-cover' />
                <div>
                    <h1 className='font-bold'>Jenny Wilson</h1>
                    <p className='text-gray-600'>UI/UX Designer</p>
                </div>
            </div>
            <img src={quotationMark} alt="quote" className='h-8' />
        </div>
        <div className='py-8'>
            <h3 className='text-lg font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto praesentium distinctio excepturi dolor, nihil unde exercitationem eligendi sit quam nemo cumque, tenetur hic, quasi atque. Fuga saepe vitae cum quasi!</h3>
        </div>
    </div>
  );
}

export default FeedBackCard;
