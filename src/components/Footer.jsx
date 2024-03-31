import React from 'react';

const Footer = () => {
  const exploreLinks = ["Home", "About us", "Courses", "Contact us"];

  return (
    <section className='w-full py-8 px-4 bg-black'>
      <div className='max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center text-white'>
        
        <div className='flex justify-center flex-wrap'>
          {exploreLinks.map((link, index) => (
            <p key={index} className="mx-4 my-2">{link}</p>
          ))}
        </div>

        <form className='flex items-center mt-4 md:mt-0'>
          <input type="email" className="px-1 py-1 mr-2 border-0 outline-none text-xs-12px" placeholder='Enter your email' style={{background: 'rgba(255, 255, 255, 0.2)', color: 'white'}}/>
          <button type="submit" className='px-3 py-1 bg-[#208446] text-white'>Subscribe</button>
        </form>

      </div>
    </section>
  );
};

export default Footer;
