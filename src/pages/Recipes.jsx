import React from 'react'

const Recipes = (props) => {
  return (
    <div className='px-[15vw] pt-[130px]'>
      <h1 className='text-3xl font-bold'>{props.foodName} Recipes!</h1>
    </div>
  )
}

export default Recipes