import React, { useState } from 'react';
import Layout from '../components/Layout';
import foto1 from '../assets/bintang.jpeg';
import foto2 from '../assets/dzaky.jpg';
import Footer from '../components/Footer';

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState(null);

  const toggleModal = (creator) => {
    setSelectedCreator(creator);
    setShowModal(!showModal);
  };

  return (
    <div className='h-full relative '>
      <Layout className="">
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl sm:text-3xl text-primary font-bold mb-8'>About Us</h1>
          <div className='grid grid-cols-2 gap-6'>
            <div
              className='flex flex-col items-center cursor-pointer hover:scale-105 transition duration-300'
              onClick={() => toggleModal('creator1')}
            >
              <img
                className='w-[35vw] h-[35vw] max-w-[200px] max-h-[200px] object-cover rounded-full'
                src={foto1}
                alt='First Creator'
              />
              <h2 className='mt-4 text-lg sm:text-xl font-medium'>Bintang Ramadhan</h2>
            </div>
            <div
              className='flex flex-col items-center cursor-pointer hover:scale-105 transition duration-300'
              onClick={() => toggleModal('creator2')}
            >
              <img
                className='w-[35vw] h-[35vw] max-w-[200px] max-h-[200px] object-cover rounded-full'
                src={foto2}
                alt='Second Creator'
              />
              <h2 className='mt-4 text-lg sm:text-xl font-medium'>Dzaky Naufal</h2>
            </div>
          </div>
          {showModal && (
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
              <div className='bg-white rounded-lg p-8 max-w-md'>
                {selectedCreator === 'creator1' && (
                  <div className='animate-fade-in'>
                    <img
                      className='w-64 h-64 rounded-full mb-4 mx-auto'
                      src={foto1}
                      alt='First Creator'
                    />
                    <h2 className='text-2xl font-bold text-center'>Bintang Ramadhan</h2>
                    <p className='text-center mt-3'>Thank you for visiting our website! We appreciate your support in our mission to share international and local recipes. We hope you find culinary inspiration and enjoy delicious dishes. Stay tuned for the latest recipes and cooking tips. Thank you for stopping by!</p>
                  </div>
                )}
                {selectedCreator === 'creator2' && (
                  <div className='animate-fade-in'>
                    <img
                      className='w-64 h-64 rounded-full mb-4 mx-auto'
                      src={foto2}
                      alt='Second Creator'
                    />
                    <h2 className='text-2xl font-bold text-center'>Dzaky Naufal</h2>
                    <p className='text-center mt-3'>Thank you for visiting our recipe website! We appreciate your support and hope you enjoy our collection of international and local recipes. Happy cooking and have a delightful culinary experience!!</p>
                  </div>
                )}
                <button
                  className='bg-secondary text-primary rounded-lg px-4 py-2 mt-6 mx-auto block font-semibold'
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <p className='text-lg text-center mt-8'>
            Welcome to our website! We are passionate individuals who love both food and coding. Our platform offers a diverse collection of recipes from various cuisines, both local and international. Whether you are interested in exploring traditional dishes from our homeland or trying out international flavors, you will find carefully curated recipes that are easy to follow. Join us on this culinary adventure!
          </p>
        </div>
      </Layout>
      <Footer position="relative" />
    </div>
  );
};

export default About;
