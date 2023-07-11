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
            <p className='text-center mt-2'>
              Nama Pembuat 1
              <br />
              Pesan singkat dari Pembuat 1
            </p>
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
            <p className='text-center mt-2'>
              Nama Pembuat 2
              <br />
              Pesan singkat dari Pembuat 2
            </p>
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
                  <h2 className='text-2xl font-bold text-center'>Creator 1</h2>
                  <p className='text-center'>
                    Umur: 25 tahun
                    <br />
                    Pesan singkat: "Halo! Saya adalah pencipta kreatif yang bersemangat dalam dunia teknologi."
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
                  <h2 className='text-2xl font-bold text-center'>Creator 2</h2>
                  <p className='text-center'>
                    Umur: 30 tahun
                    <br />
                    Pesan singkat: "Hai! Saya adalah seorang desainer berpengalaman yang mencintai seni dan inovasi."
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
          Selamat datang di website kami! Kami adalah dua orang pembuat web yang bersemangat dalam
          menggabungkan teknologi dengan kreativitas. Kami harap Anda menikmati eksplorasi di dunia
          kuliner melalui website ini. Terima kasih atas kunjungan Anda!
        </p>
      </div>
    </Layout>
  );
};

export default About;

