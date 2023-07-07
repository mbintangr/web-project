import React from 'react'
import {recipes} from '../data/data' 
import Card from '../components/Card'

const Recipes = (props) => {
  return (
    <div className='px-[15vw] pt-[130px]'>
      <h1 className='text-3xl font-bold mb-5'>{props.foodName} Recipes!</h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
        {recipes.map((recipe, index) => (
          <Card src={recipe.img} title={recipe.name} description={recipe.description} link={recipe.link}/>
        ))}
      </div>
    </div>
  )
}

export default Recipes