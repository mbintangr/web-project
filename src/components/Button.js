import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    
    <Link to={props.link}>
        <button type='button' className='bg-[#176B87] py-2 px-3 rounded-2xl font-bold text-[#DAFFFB] shadow-lg hover:bg-[#176b87c9]'>
            {props.title}
        </button>
    </Link>
  )
}

export default Button