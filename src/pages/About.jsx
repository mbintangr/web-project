import React, { useState } from 'react';
import Layout from '../components/Layout';
import pict from '../assets/creator1.jpg';
import picts from '../assets/asia.jpg';

const About = () => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold pb-5'>About Us!</h1>
        <div className='mb-auto grid grid-cols-2'>
          <div className='flex flex-col items-center'>
            <img
              className='w-48 h-48 rounded-full cursor-pointer'
              src={pict}
              alt='First Creator'
              onClick={toggleDescription}
            />
            {showDescription && (
              <p className='mt-2 text-center'>
                Description of the first creator goes here.
              </p>
            )}
          </div>
          <div className='flex flex-col items-center mt-8'>
            <img
              className='w-48 h-48 rounded-full cursor-pointer'
              src={picts}
              alt='Second Creator'
              onClick={toggleDescription}
            />
            {showDescription && (
              <p className='mt-2 text-center'>
                Description of the second creator goes here.
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
