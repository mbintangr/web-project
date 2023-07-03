import React from 'react';
import Button from './Button';

const Welcome = () => {
  return (
    <div className='flex flex-col justify-center h-[100vh] px-[15vw] bg-center bg-no-repeat bg-cover'>
      <h1 className='text-3xl font-bold py-2'>Hello There!👋</h1>
      <p className='pt-2 pb-4'>Welcome to Cravey, your ultimate destination for delicious treats and comforting comfort food. Our curated collection of recipes will satisfy your cravings and bring joy to your taste buds. With expert chefs, detailed instructions, and a vibrant community of food lovers, Cravey is where culinary dreams come true. Embark on a mouthwatering journey and indulge in the most satisfying flavors at Cravey.</p>
      {/* <Button link="/Recipes" title="Recipes"/> */}
      <a href="#trending"><button>Trending</button></a>
    </div>
  );
};

export default Welcome;