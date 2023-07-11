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
        <h1 className='text-3xl font-bold pb-5'>About Us!</h1>
        <div className='mb-auto grid grid-cols-2 gap-4'>
          <div
            className='flex flex-col items-center cursor-pointer'
            onClick={() => toggleModal('creator1')}
          >
            <img
              className='w-48 h-48 rounded-full'
              src={pict}
              alt='First Creator'
            />
          </div>
          <div
            className='flex flex-col items-center cursor-pointer'
            onClick={() => toggleModal('creator2')}
          >
            <img
              className='w-48 h-48 rounded-full'
              src={picts}
              alt='Second Creator'
            />
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
                  <p className='text-center'>
                    Umur: 19 Tahun
                    Pesan singkat: "Pesan singkat saya"
                  </p>
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
                  <p className='text-center'>
                    Umur: 19 Tahun
                    Pesan singkat: "Ini pesan singkat"
                  </p>
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
          <p className='text-center mt-4'>
            Dear valued readers,
          we are excited to introduce our new website that combines our love for food and coding. As two individuals who share a passion for both culinary delights and the world of technology, we have created a platform that offers a diverse collection of recipes from various cuisines, both local and international.
          Our website is a valuable resource for food enthusiasts, providing inspiration and a wide range of culinary options. Whether you are interested in exploring traditional dishes from our homeland or venturing into international flavors, you will find carefully curated recipes that have been extensively tested and come with easy-to-follow instructions.
        </p>

      </div>
    </Layout>
  );
};

export default About;