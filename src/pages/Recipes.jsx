import React, { useState } from "react";
import { recipes } from "../data/data";
import Card from "../components/Card";
import CategoryCard from "../components/CategoryCard";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

import allCategory from "../assets/all.jpg";
import asiaCategory from "../assets/asia.jpg";
import americaCategory from "../assets/america.jpg";
import europeCategory from "../assets/europe.jpg";

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
    <div>
      <Layout>
        <h1 className="text-2xl sm:text-3xl text-primary font-bold mb-3">
          {props.foodName} Recipes!
        </h1>
        <p>
          Welcome to Cravery's Recipes page!, the page where you can find
          delicious and easy recipes for any occasion. Whether you're looking
          for a quick breakfast, a hearty dinner, or a decadent dessert, we have
          you covered. Browse our categories, search by ingredients, or check
          out our featured recipes. You'll be amazed by what you can create in
          your own kitchen with Cravery.
        </p>

        <div className="my-5">
          <div className="my-2">
            <h1 className="text-2xl text-primary font-bold my-4">Category</h1>
            {/* items */}
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-3 w-full">
              <button onClick={() => setFoods(recipes)}>
                <CategoryCard title="All" img={allCategory} />
              </button>
              <button onClick={() => filterCategory("Asia")}>
                <CategoryCard title="Asia" img={asiaCategory} />
              </button>
              <button onClick={() => filterCategory("America")}>
                <CategoryCard title="America" img={americaCategory} />
              </button>
              <button onClick={() => filterCategory("Europe")}>
                <CategoryCard title="Europe" img={europeCategory} />
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
      </Layout>
      <Footer />
    </div>
  );
};

export default Recipes;
