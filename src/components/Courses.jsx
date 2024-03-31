import React from 'react';
import CourseCard from './CourseCard';

const Courses = () => {
  const courses = [
    { id: 1, title: "Website 1", link: "https://ishar.odoo.com/", img: "https://c8.alamy.com/comp/MFR68H/white-blue-alphabet-letter-mi-m-i-logo-combination-design-on-black-background-suitable-for-a-company-or-business-MFR68H.jpg" },
    { id: 2, title: "Website 2", link: "https://ishar.odoo.com/", img: "https://c8.alamy.com/comp/MFR68H/white-blue-alphabet-letter-mi-m-i-logo-combination-design-on-black-background-suitable-for-a-company-or-business-MFR68H.jpg" },
    { id: 3, title: "Website 3", link: "https://ishar.odoo.com/", img: "https://c8.alamy.com/comp/MFR68H/white-blue-alphabet-letter-mi-m-i-logo-combination-design-on-black-background-suitable-for-a-company-or-business-MFR68H.jpg" },
    { id: 4, title: "Website 4", link: "https://ishar.odoo.com/", img: "https://c8.alamy.com/comp/MFR68H/white-blue-alphabet-letter-mi-m-i-logo-combination-design-on-black-background-suitable-for-a-company-or-business-MFR68H.jpg" },
  ];

  return (
    <div className='bg-black text-white py-8 px-4 text-center'>
      <h2 className="mb-8 text-2xl font-bold">My Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {courses.map(course => (
          <CourseCard 
            key={course.id} 
            title={course.title} 
            linkImg={course.img} // Pass the image URL here
            link={course.link} 
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
