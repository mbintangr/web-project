import React from 'react'
import Button from './Button'

function Card(props) {
  return (
    <div className='flex-col my-3 mx-auto p-7 rounded-2xl shadow-xl bg-white w-[30%] min-w-[150px]'>
        <img src={props.src} alt={props.alt} className='rounded-xl shadow-lg' />
        <h1 className='text-xl font-bold mt-2'>{props.title}</h1>
        <p className='my-2'>{props.description}</p>
        <Button link={props.link} title="Learn More" />
    </div>
  )
}

export default Card