import React from 'react';
import Layout from '../components/Layout';
import logo from '../assets/logo.png';
import { FiPhone, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+62 857-1577-1891', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/cristiano', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sandikagalih', '_blank');
  };

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="my-8">
          <img src={logo} alt="Logo" className="w-24 h-24 mb-4" />
          <h1 className="text-3xl font-bold">Contact</h1>
        </div>
        <div className="my-4">
          <div className="mb-8">
            <h2 className="text-xl font-semibold">Person 1</h2>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110"
              onClick={handleWhatsAppClick}
            >
              <FiPhone className="inline-block mr-2" />
              Hubungi via WhatsApp
            </button>
            <button
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110"
              onClick={handleInstagramClick}
            >
              <FiInstagram className="inline-block mr-2" />
              Kunjungi Instagram
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110"
              onClick={handleLinkedInClick}
            >
              <FiLinkedin className="inline-block mr-2" />
              Kunjungi LinkedIn
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}