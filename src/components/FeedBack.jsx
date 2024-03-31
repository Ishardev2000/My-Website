import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeedBackCard from './FeedBackCard';

const FeedBack = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };

    return (
        <section className='w-full bg-black py-24 px-4 text-white'>
            <div className='md:max-w-[1100px] mx-auto'>
                <h1 className='text-3xl font-bold text-center mb-6'>What Our Clients Say</h1>
                <p className='text-gray-400 text-center mb-8'>Discover the experiences and testimonials of clients who have trusted in our services. Their feedback is the foundation of our continuous improvement and commitment to excellence.</p>
                <Slider {...settings}>
                    <FeedBackCard />
                    <FeedBackCard />
                    <FeedBackCard />
                    <FeedBackCard />
                    <FeedBackCard />
                    {/* Add more FeedBackCard components as needed */}
                </Slider>
            </div>
        </section>
    );
};

export default FeedBack;
