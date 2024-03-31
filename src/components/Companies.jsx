
import React from 'react';
import Company1 from '../assets/company-logo-1.png'; // Example logo, replace with actual paths
import Company2 from '../assets/company-logo-2.png';
import Company3 from '../assets/company-logo-3.png';
import Company4 from '../assets/company-logo-4.png';

const Companies = () => {
  return (
    <section className='w-full bg-black text-white py-[50px] flex justify-center items-center'>
      <div className='md:max-w-[1100px] mx-auto px-4'>
        <h1 className='text-center text-2xl font-bold mb-6'>Trusted by Leading Web Development Teams</h1>
        <p className='text-center mb-8'>Our courses are utilized by teams around the world to keep their web development skills sharp.</p>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-8'>
          <img src={Company1} alt="Company 1" className='mx-auto' />
          <img src={Company2} alt="Company 2" className='mx-auto' />
          <img src={Company3} alt="Company 3" className='mx-auto' />
          <img src={Company4} alt="Company 4" className='mx-auto' />
        </div>
      </div>
    </section>
  );
};

export default Companies;
