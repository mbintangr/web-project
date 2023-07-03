import React from 'react'
// import { Carousel } from 'flowbite-react'
import Card from './Card'

function Trending() {
  return (
    <div className='bg-[#64ccc598] p-10 md:p-7 sm:p-3 mx-auto my-10 rounded-2xl shadow-xl text-[#001C30] max-w-[75vw] flex-col justify-center' id='trending'>
        <h1 className='text-3xl font-bold pb-5 text-center'>Trending🔥</h1>

        <div className='flex mx-auto flex-wrap'>
            <Card src="https://www.astronauts.id/blog/wp-content/uploads/2023/03/Resep-Rendang-Daging-Sapi-Untuk-Lebaran-Gurih-dan-Nikmat-1200x900.jpg" alt="Rendang" title="Rendang" description="Rendang is a traditional Indonesian dish that is widely recognized and celebrated for its rich and complex flavors." link="/Recipes"/>
            <Card src="https://www.astronauts.id/blog/wp-content/uploads/2023/03/Resep-Rendang-Daging-Sapi-Untuk-Lebaran-Gurih-dan-Nikmat-1200x900.jpg" alt="Rendang" title="Rendang" description="Rendang is a traditional Indonesian dish that is widely recognized and celebrated for its rich and complex flavors." link="/Recipes"/>
            <Card src="https://www.astronauts.id/blog/wp-content/uploads/2023/03/Resep-Rendang-Daging-Sapi-Untuk-Lebaran-Gurih-dan-Nikmat-1200x900.jpg" alt="Rendang" title="Rendang" description="Rendang is a traditional Indonesian dish that is widely recognized and celebrated for its rich and complex flavors." link="/Recipes"/>

        </div>
        
    </div>
  )
}

export default Trending