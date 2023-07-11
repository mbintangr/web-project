import React, { useState } from 'react';
import Layout from '../components/Layout';
import pict from '../assets/creator1.jpg';
import picts from '../assets/asia.jpg';
import Modal from 'react-modal';

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
        <Modal
          isOpen={showModal}
          onRequestClose={toggleModal}
          className='modal'
          overlayClassName='overlay'
        >
          <div className='modal-content'>
            {selectedCreator === 'creator1' && (
              <div>
                <img
                  className='w-64 h-64 rounded-full mb-4'
                  src={pict}
                  alt='First Creator'
                />
                <p className='text-center'>
                  Description of the first creator goes here.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed consequat arcu vitae enim efficitur, at dignissim purus ultrices.
                </p>
              </div>
            )}
            {selectedCreator === 'creator2' && (
              <div>
                <img
                  className='w-64 h-64 rounded-full mb-4'
                  src={picts}
                  alt='Second Creator'
                />
                <p className='text-center'>
                  Description of the second creator goes here.
                  Vestibulum at nibh nec elit congue tincidunt.
                  Aenean eget neque consequat, luctus felis ac, suscipit nunc.
                </p>
              </div>
            )}
            <button className='modal-close' onClick={toggleModal}>
              Close
            </button>
          </div>
        </Modal>
      </div>
    </Layout>
  );
};

export default About;
