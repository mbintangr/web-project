import React from 'react'
import Button from './Button'

const Welcome = () => {
  return (
    <div className='flex-col h-[100vh] bg-zinc-200 px-[15vw] items-center justify-center py-[35vh]'>
      <h1 className='text-3xl font-bold py-2'>Hello There!</h1>
      <p className='pt-2 pb-4'>Welcome to the most fabulous clothing catalog website ever! Here you will find the latest trends, the hottest styles, and the best deals on everything from socks to hats. Whether you are looking for a casual outfit, a formal dress, or a funky accessory, we have it all. Browse our collections, shop by category, or use our handy search tool to find exactly what you need. And don't forget to check out our special offers and discounts for even more savings. You deserve to look amazing, and we are here to help you achieve that. So go ahead and explore our website, and get ready to be dazzled by our fashion choices!</p>
      <Button link="/Product" title="Products"/>
    </div>
  )
}

export default Welcome