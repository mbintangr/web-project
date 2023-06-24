import React from 'react'

const Button = (props) => {
  return (
    
    <a href={props.link}>
        <button type='button' className='bg-[#176B87] py-2 px-3 rounded-2xl font-bold text-[#DAFFFB]'>
            {props.title}
        </button>
    </a>
  )
}

export default Button