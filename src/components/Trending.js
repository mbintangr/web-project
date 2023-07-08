import React from 'react'
// import { Carousel } from 'flowbite-react'
import Card from './Card'
import { trending } from '../data/data'

function Trending() {
  return (
    <div className='bg-tertiary p-7 mx-auto my-10 rounded-3xl shadow-xl text-black max-w-[80vw] sm:max-w-[75vw] flex-col justify-center' id='trending'>
        <h1 className='text-2xl sm:text-3xl font-bold pb-5 text-center'>Trending🔥</h1>

        <div className='mx-auto grid md:grid-cols-3 gap-6'>

            {trending.map((item, index) => (
              <Card src={item.img} title={item.name} description={item.description} link={item.link}/>
            ))}

        </div>
        
    </div>
  )
}

export default Trending