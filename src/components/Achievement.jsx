import React from 'react';
import Achieve from '../assets/achievement.png';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaSass, FaWordpress, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

const Achievement = () => {
  return (
    <section className='w-full bg-black py-10 md:py-20 text-white'>
        <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center justify-center'>
            <div className='space-y-6 mx-auto text-center'>
                <h1 className='text-3xl md:text-4xl font-semibold leading-tight'>
                    My <span className='text-[#208486]'>Tech Stack</span>
                </h1>
                <p className='text-lg'>Leading companies use the same technologies to build amazing products.</p>
                <div className='grid md:grid-cols-3 gap-4'>
                    {/* HTML */}
                    <div className="flex items-center space-x-3 justify-center">
                        <div className="p-4 bg-[#e34f26] rounded-xl">
                            <FaHtml5 size={30} color='white'/>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>HTML</h2>
                        </div>
                    </div>
                    {/* CSS */}
                    <div className="flex items-center space-x-3 justify-center">
                        <div className="p-4 bg-[#1572B6] rounded-xl">
                            <FaCss3Alt size={30} color='white'/>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>CSS</h2>
                        </div>
                    </div>
                    {/* SASS */}
                    <div className="flex items-center space-x-3 justify-center">
                        <div className="p-4 bg-[#cc6699] rounded-xl">
                            <FaSass size={30} color='white'/>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>SASS</h2>
                        </div>
                    </div>
                    {/* Bootstrap */}
                    <div className="flex items-center space-x-3 justify-center">
                        <div className="p-4 bg-[#563d7c] rounded-xl">
                            <FaBootstrap size={30} color='white'/>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>Bootstrap</h2>
                        </div>
                    </div>
                    {/* Tailwind */}
                    <div className="flex items-center space-x-3 justify-center">
                        <div className="p-4 bg-[#38b2ac] rounded-xl">
                            <SiTailwindcss size={30} color='white'/>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>Tailwind</h2>
                        </div>
                    </div>
                    {/* JavaScript */}
                    <div className="flex items-center space-x-3 justify-center">
                        <div className="p-4 bg-[#f7df1e] rounded-xl">
                            <SiJavascript size={30} color='black'/>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>JavaScript</h2>
                        </div>
                    </div>
                    {/* React */}
                    <div className="flex items-center space-x-3 justify-center">
                        <div className="p-4 bg-[#61DBFB] rounded-xl">
                            <FaReact size={30} color='white'/>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>React</h2>
                        </div>
                    </div>
                    {/* WordPress */}
                    <div className="flex items-center space-x-3 justify-center">
                        <div className="p-4 bg-[#21759b] rounded-xl">
                            <FaWordpress size={30} color='white'/>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>WordPress</h2>
                        </div>
                    </div>
                    {/* Node.js */}
                    <div className="flex items-center space-x-3 justify-center">
                        <div className="p-4 bg-[#539e43] rounded-xl">
                            <FaNodeJs size={30} color='white'/>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold'>Node.js</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img src={Achieve} alt="Achievements" className='max-w-full h-auto'/>
            </div>
        </div>
    </section>
  );
};

export default Achievement;
