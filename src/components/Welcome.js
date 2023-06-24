import React from 'react'
import Button from './Button'

const Welcome = () => {
  return (
    <div className='flex-col h-[100vh] bg-zinc-200 px-[15vw] items-center justify-center py-[35vh]'>
      <h1 className='text-3xl font-bold py-2'>Hello There!</h1>
      <p className='pt-2 pb-4'>Welcome to Cravey, your ultimate destination for indulgent treats and comforting comfort food. Our carefully curated collection of recipes will satisfy your cravings and bring pure delight to your taste buds. From decadent chocolate desserts to cheesy comfort foods, our expert chefs and passionate food enthusiasts have perfected each recipe, ensuring you can recreate these irresistible dishes with ease. With detailed instructions, helpful tips, and a vibrant community of food lovers, Cravey is more than just a website—it's a place where culinary dreams come true. Get ready to embark on a mouthwatering journey and indulge in the most satisfying flavors at Cravey.</p>
      <Button link="/Recipes" title="Recipes"/>
    </div>
  )
}

export default Welcome