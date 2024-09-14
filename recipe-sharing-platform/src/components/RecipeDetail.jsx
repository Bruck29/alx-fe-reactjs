import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL params
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe with the matching ID from the data
    const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10">Recipe not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-6" />
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
        <ul className="list-disc pl-5">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Instructions</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
