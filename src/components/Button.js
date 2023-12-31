import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    
    <Link to={props.link}>
        <button type='button' className='bg-secondary py-2 px-3 rounded-2xl font-bold text-primary shadow-lg hover:bg-secondary/80'>
            {props.title}
        </button>
    </Link>
  )
}

export default Button