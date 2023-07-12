import React from "react";
import { FiPhone, FiInstagram, FiLinkedin } from "react-icons/fi";

const ContactInfo = ({ img, name, phone, ig, linkedin }) => {
  return (
    <div>
      <div className="flex-col sm:flex items-center w-full">
        <img src={img} alt="Profile" className="w-40 h-40 object-cover rounded-full mr-6" />

        {/* User 1 Name and Contact Button */}
        <div>
          <h2 className="text-xl font-semibold my-3">{name}</h2>

          {/* Social buttons */}
          <div className="mt-4 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
            <a href={"https://wa.me/" + phone} target="_blank" rel="noreferrer">
              <button className="bg-secondary hover:bg-secondary/80 text-primary font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-primary/30">
                <div className="flex items-center justify-center text-sm sm:text-md">
                  <FiPhone className="mr-2" />
                  <p>WhatsApp</p>
                </div>
              </button>
            </a>

            <a href={ig} target="_blank" rel="noreferrer">
              <button className="bg-secondary hover:bg-secondary/80 text-primary font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-primary/30">
                <div className="flex items-center justify-center text-sm sm:text-md">
                  <FiInstagram className="mr-2" />
                  Instagram
                </div>
              </button>
            </a>

            <a href={linkedin} target="_blank" rel="noreferrer">
              <button className="bg-secondary hover:bg-secondary/80 text-primary font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-primary/30">
                <div className="flex items-center justify-center text-sm sm:text-md">
                  <FiLinkedin className="mr-2" />
                  LinkedIn
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
