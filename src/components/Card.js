import React from 'react'
import Button from './Button'

function Card(props) {
  return (
    <div className='flex-col my-3 mx-auto rounded-2xl shadow-xl bg-white min-w-[30%]  hover:scale-105 duration-300'>
        <img src={props.src} alt={props.alt} className='rounded-t-xl shadow-lg w-[100%] h-[150px] object-cover lg:h-[250px]'/>

        <div className='p-7'>
          <h1 className='text-xl font-bold mt-2'>{props.title}</h1>
          <p className='my-2'>{props.description}</p>
          <Button link={props.link} title="Learn More" />
        </div>
    </div>
  )
}

export default Card