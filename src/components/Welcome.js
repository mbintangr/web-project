import React from 'react';

const Welcome = () => {
  return (
    <div className='flex sm:px-[15vw] px-[10vw] h-screen items-center'>
      {/* welcome */}
      <div className=''>
        <h1 className='text-3xl font-bold py-2'>Hello There!👋</h1>
        <p className='pt-2 pb-4'>Welcome to Cravey, your ultimate destination for delicious treats and comforting comfort food. Our curated collection of recipes will satisfy your cravings and bring joy to your taste buds. With expert chefs, detailed instructions, and a vibrant community of food lovers, Cravey is where culinary dreams come true. Embark on a mouthwatering journey and indulge in the most satisfying flavors at Cravey.</p>
        <a href="#trending"><button className='bg-secondary py-2 px-3 rounded-2xl font-bold text-quaternary shadow-lg hover:bg-[#176b87c9]'>Trending</button></a>
      </div>
    </div>
  );
};

export default Welcome;