import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/favorites">My Favorites</Link> | 
          <Link to="/recommendations">Recommendations</Link>
        </nav>
        
        <Routes>
          {/* Home route displaying RecipeList and AddRecipeForm */}
          <Route path="/" element={
            <>
              <h1>Recipe Sharing App</h1>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />

          {/* Route for viewing a recipe's details */}
          <Route path="/recipe/:id" element={
            <>
              <RecipeDetails />
              <EditRecipeForm />
              <DeleteRecipeButton />
            </>
          } />

          {/* Route for viewing the user's favorite recipes */}
          <Route path="/favorites" element={<FavoritesList />} />

          {/* Route for viewing personalized recommendations */}
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
