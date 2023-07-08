import React, { useState } from "react";
import { recipes } from "../data/data";
import Card from "../components/Card";
import CategoryCard from "../components/CategoryCard";

const Recipes = (props) => {
  const [foods, setFoods] = useState(recipes);

  const filterCategory = (category) => {
    setFoods(
      recipes.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className="px-[10vw] sm:px-[15vw] sm:pt-[130px] pt-[100px]">
        <h1 className="text-3xl font-bold mb-3">{props.foodName} Recipes!</h1>
        <p>Welcome to Cravery's Recipes page!, the page where you can find delicious and easy recipes for any occasion. Whether you're looking for a quick breakfast, a hearty dinner, or a decadent dessert, we have you covered. Browse our categories, search by ingredients, or check out our featured recipes. You'll be amazed by what you can create in your own kitchen with Cravery.</p>

      <div className="my-5">
        <div className="my-2">
          <h1 className="text-2xl font-bold my-4">
            Category
          </h1>
          {/* items */}
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-3 w-full">
            <button onClick={() => setFoods(recipes)}>
              <CategoryCard title='All' img="https://cdn.leonardo.ai/users/f2ba8c52-4fd9-4299-9cb1-bc5e20f0e77b/generations/ecdca4f1-84f6-4de4-ae0a-95db039fc42a/DreamShaper_v5_3d_render_high_qualitybackground_image_for_all_3.jpg"/>
            </button>
            <button onClick={() => filterCategory("Asia")}>
              <CategoryCard title='Asia' img='https://cdn.leonardo.ai/users/f2ba8c52-4fd9-4299-9cb1-bc5e20f0e77b/generations/0afdd322-4631-436c-83a8-48973689faa1/DreamShaper_v5_3d_render_high_qualitybackground_image_for_asia_3.jpg' />
            </button>
            <button onClick={() => filterCategory("America")}>
              <CategoryCard title='America' img='https://cdn.leonardo.ai/users/f2ba8c52-4fd9-4299-9cb1-bc5e20f0e77b/generations/d0722ccb-4825-4383-90d5-33ab11db24fc/DreamShaper_v5_3d_render_high_qualitybackground_image_for_amer_2.jpg' />
            </button>
            <button onClick={() => filterCategory("Europe")}>
              <CategoryCard title='Europe' img='https://cdn.leonardo.ai/users/f2ba8c52-4fd9-4299-9cb1-bc5e20f0e77b/generations/3bf65b31-7aa8-42af-b537-8cbf6fb3f47b/DreamShaper_v5_3d_render_high_qualitybackground_image_for_euro_2.jpg' />
            </button>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 grid-flow-dense">
        {foods.map((recipe, index) => (
          <Card
            src={recipe.img}
            title={recipe.name}
            description={recipe.description}
            link={recipe.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
