import React, { useState, useEffect } from 'react';
import Logo from '../assets/logoo.jpg';
import Hamburger from '../assets/hamburgerMenu.svg';
import Close from '../assets/close.svg';
import { motion } from 'framer-motion';

const NavItem = ({ children }) => (
  <li className='list-none p-4 hover:bg-gray-700 hover:text-white text-white cursor-pointer'>{children}</li>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navItems = ['Home', 'About', 'Learnig', 'Contect',].map(item => (
    <NavItem key={item}>{item}</NavItem>
  ));

  return (
    <div className={`w-full h-[96px] bg-black fixed top-0 left-0 z-50 shadow-md transition-transform duration-300 ${!visible && '-translate-y-full'}`}>
      <nav className='p-4 md:max-w-[1080px] max-w-[400px] mx-auto w-full h-full flex justify-between items-center text-white'>
        <img src={Logo} alt="logo" className='h-[25px] cursor-pointer' />
        <div className="hidden md:flex gap-4">
          {navItems}
        </div>
        <div className='hidden md:flex'>
          <button role="button" className='px-8 py-3 bg-green-500 text-white'>Sign up for free</button>
        </div>
        <motion.div whileTap={{ scale: 0.6 }} className="md:hidden cursor-pointer" onClick={handleToggle}>
          <img src={toggle ? Close : Hamburger} alt="menu" style={{ filter: 'invert(60%) sepia(91%) saturate(750%) hue-rotate(90deg) brightness(90%) contrast(85%)' }} />
        </motion.div>
      </nav>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className={toggle ? 'absolute top-[96px] left-0 z-20 p-4 bg-black w-full md:hidden' : 'hidden'}>
        <ol className=" text-white">
          {navItems}
          <div className='flex flex-col my-4 gap-4'>
            <button role="button" className='px-8 py-5 bg-green-500 text-white'>Sign up for free</button>
          </div>
        </ol>

      </motion.div>
    </div>
  );
}

export default Navbar;
