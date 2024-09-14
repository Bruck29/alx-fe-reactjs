import React, { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from 'react-router-dom';

<Link to={`/recipe/${recipe.id}`}>
  <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300">
    <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
      <p className="text-gray-600">{recipe.summary}</p>
    </div>
  </div>
</Link>


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
