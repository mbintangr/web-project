import React from 'react';
import Layout from '../components/Layout';

function Contact() {
  const message = 'Halo, saya ingin menghubungi Anda.';
  const phoneNumber = '=+62 81289473692';
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p className="text-center mb-8">
         Halo saya tertarik untuk menghubungi anda
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Contact via WhatsApp
        </a>
      </div>
    </Layout>
  );
}

export default Contact;
