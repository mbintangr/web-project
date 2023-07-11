import React, { useState } from 'react';
import Layout from '../components/Layout';
import pict from '../assets/creator1.jpg';
import picts from '../assets/dzaky.jpg';

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState(null);

  const toggleModal = (creator) => {
    setSelectedCreator(creator);
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold mt-8 mb-4'>About Us</h1>
        <div className='grid grid-cols-2 gap-6'>
          <div
            className='flex flex-col items-center cursor-pointer hover:shadow-md transition duration-300'
            onClick={() => toggleModal('creator1')}
          >
            <img
              className='w-48 h-48 rounded-full'
              src={pict}
              alt='First Creator'
            />
            <h2 className='mt-4 text-xl font-medium'>Bintang</h2>
          </div>
          <div
            className='flex flex-col items-center cursor-pointer hover:shadow-md transition duration-300'
            onClick={() => toggleModal('creator2')}
          >
            <img
              className='w-48 h-48 rounded-full'
              src={picts}
              alt='Second Creator'
            />
            <h2 className='mt-4 text-xl font-medium'>Dzaky</h2>
          </div>
        </div>
        {showModal && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white rounded-lg p-8 max-w-md'>
              {selectedCreator === 'creator1' && (
                <div className='animate-fade-in'>
                  <img
                    className='w-64 h-64 rounded-full mb-4 mx-auto'
                    src={pict}
                    alt='First Creator'
                  />
                  <h2 className='text-2xl font-bold text-center'>Bintang</h2>
                  <p className='text-center'>Age: 19 years old</p>
                </div>
              )}
              {selectedCreator === 'creator2' && (
                <div className='animate-fade-in'>
                  <img
                    className='w-64 h-64 rounded-full mb-4 mx-auto'
                    src={picts}
                    alt='Second Creator'
                  />
                  <h2 className='text-2xl font-bold text-center'>Dzaky</h2>
                  <p className='text-center'>Age: 19 years old</p>
                </div>
              )}
              <button
                className='bg-gray-500 text-white rounded-lg px-4 py-2 mt-6 mx-auto block'
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        <p className='text-lg text-center max-w-2xl mt-8'>
          Welcome to our website! We are passionate individuals who love both food and coding. Our platform offers a diverse collection of recipes from various cuisines, both local and international. Whether you are interested in exploring traditional dishes from our homeland or trying out international flavors, you will find carefully curated recipes that are easy to follow. Join us on this culinary adventure!
        </p>
      </div>
    </Layout>
  );
};

export default About;
