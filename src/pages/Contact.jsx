import React from 'react';
import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p className="text-center mb-8">
         Hubungi kami!
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
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
