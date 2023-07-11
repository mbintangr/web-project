import React from 'react';
import Layout from '../components/Layout';
import foto1 from '../assets/creator1.jpg';
import foto2 from '../assets/dzaky.jpg';
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
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Contact</h1>
        <div className="grid grid-cols-1 gap-8">
          <div className="flex items-center">
            <img src={foto1} alt="Person 1" className="w-40 h-40 rounded-full mr-6" />
            <div>
              <h2 className="text-xl font-semibold">Bintang Ramadhan</h2>
              <div className="mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110 mb-4"
                  onClick={() => handleWhatsAppClick('nomerwa')}
                >
                  <FiPhone className="inline-block mr-2" />
                  WhatsApp
                </button>
                <button
                  className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110 mb-4"
                  onClick={() => handleInstagramClick('usernameig')}
                >
                  <FiInstagram className="inline-block mr-2" />
                  Instagram
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                  onClick={() => handleLinkedInClick('linkedin')}
                >
                  <FiLinkedin className="inline-block mr-2" />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <img src={foto2} alt="Person 2" className="w-40 h-40 rounded-full mr-6" />
            <div>
              <h2 className="text-xl font-semibold">Dzaky Naufal</h2>
              <div className="mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110 mb-4"
                  onClick={() => handleWhatsAppClick('+6281318041130')}
                >
                  <FiPhone className="inline-block mr-2" />
                  WhatsApp
                </button>
                <button
                  className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110 mb-4"
                  onClick={() => handleInstagramClick('dzakynfll')}
                >
                  <FiInstagram className="inline-block mr-2" />
                  Instagram
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
                  onClick={() => handleLinkedInClick('dzaky-naufal-8a19b3245')}
                >
                  <FiLinkedin className="inline-block mr-2" />
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
