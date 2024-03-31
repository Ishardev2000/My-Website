import React, { useState } from 'react';

const CTA = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., sending data to a server
    console.log(formData);
    alert("Form submitted. We'll get back to you soon!");
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className='w-full bg-black py-24 px-4 text-white'>
      <div className='md:max-w-[800px] mx-auto'>
        <h2 className='text-3xl font-semibold text-center mb-8'>Contact Us</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className='p-2 rounded'
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className='p-2 rounded'
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className='p-2 rounded'
            rows="4"
            required
          />
          <button type="submit" className='px-8 py-3 bg-[#208446] hover:bg-[#156f5a] transition-colors duration-200 ease-in-out rounded'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
