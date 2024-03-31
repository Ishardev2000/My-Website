import React from 'react';
import CategoryCard from './CategoryCard'; // Ensure the path is correct based on your project structure

const Categories = () => {
  const categories = [
    { title: 'W3Schools', url: 'https://www.w3schools.com' },
    { title: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
    { title: 'CSS-Tricks', url: 'https://css-tricks.com' },
    // You can add more categories as needed
  ];

  return (
    <div className='w-full bg-black p-5 text-white'>
      <div className='md:max-w-[1100px] mx-auto'>
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Go to this website for learning
          </h2>
        </div>
        
        {/* Categories Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              url={category.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
