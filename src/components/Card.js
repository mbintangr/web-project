import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
      <div className='flex-col mx-auto rounded-2xl shadow-2xl hover:shadow-secondary/30 bg-white min-w-[30%] hover:scale-105 duration-300'>
        <Link to={props.link}>
          <img src={props.src} alt={props.alt} className='rounded-t-xl shadow-lg w-[100%] h-[200px] object-cover'/>

          <div className='p-7'>
            <h1 className='text-xl font-bold mt-2'>{props.title}</h1>
            <p className='my-2'>{props.description}</p>
            <Button link={props.link} title="Read More" />
          </div>
        </Link>
      </div>
  )
}

export default Card