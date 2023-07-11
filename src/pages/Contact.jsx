import React from 'react';
import Layout from '../components/Layout';
import person1Photo from '../assets/creator1.jpg';
import person2Photo from '../assets/dzaky.jpg';
import { FiPhone, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const handleWhatsAppClick = (phoneNumber) => {
    const message = encodeURIComponent('"Hello! I am interested in your food recipe website. I would like to provide some suggestions and ask a few questions regarding the content and features on the site. Are you available to discuss? Thank you!"');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleInstagramClick = (instagramUsername) => {
    window.open(`https://www.instagram.com/${instagramUsername}`, '_blank');
  };

  const handleLinkedInClick = (linkedinUsername) => {
    window.open(`https://www.linkedin.com/in/${linkedinUsername}`, '_blank');
  };

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="my-8">
          <h1 className="text-3xl font-bold mb-4">Contact</h1>
          <div className="flex items-center mb-8">
            <img src={person1Photo} alt="Person 1" className="w-32 h-32 rounded-full mr-4" />
            <div>
              <h2 className="text-lg font-semibold">Bintang Ramadhan</h2>
              <div className="flex">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110 mr-2"
                  onClick={() => handleWhatsAppClick('+6285715771891')}
                >
                  <FiPhone className="inline-block mr-1" />
                  WhatsApp
                </button>
                <button
                  className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110 mr-2"
                  onClick={() => handleInstagramClick('person1')}
                >
                  <FiInstagram className="inline-block mr-1" />
                  Instagram
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                  onClick={() => handleLinkedInClick('person1')}
                >
                  <FiLinkedin className="inline-block mr-1" />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <img src={person2Photo} alt="Person 2" className="w-32 h-32 rounded-full mr-4" />
            <div>
              <h2 className="text-lg font-semibold">Person 2 Name</h2>
              <div className="flex">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110 mr-2"
                  onClick={() => handleWhatsAppClick('+6281318041130')}
                >
                  <FiPhone className="inline-block mr-1" />
                  WhatsApp
                </button>
                <button
                  className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110 mr-2"
                  onClick={() => handleInstagramClick('person2')}
                >
                  <FiInstagram className="inline-block mr-1" />
                  Instagram
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                  onClick={() => handleLinkedInClick('person2')}
                >
                  <FiLinkedin className="inline-block mr-1" />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </Layout>
  );
}