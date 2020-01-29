import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import uuidv4 from 'uuid/v4';

function App() {
  const APP_ID = '018e8d91';
  const APP_KEY = '718ccd39473ab51ffe8b4891fdd70515';

  // Recipes is an empty array:
  const [recipes, setRecipes] = useState([]);
  // Search bar empty array:
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    // Get the recipes upon page load by default & when the form is submitted
    console.log('fetch')
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    // Formats repsonse data into a workable manner:
    const data = await response.json();

    // 
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const getSearch = e => {
    // Prevents Page refresh when the form is submitted
    e.preventDefault();
    // Set query variable to whatever is in the search bar
    setQuery(search)
    setSearch('');
  }

  // QUESTION
  // Does react tell this function declaration that the 'e' variable is a reference to the input field?
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(e.target.value)
  }

  return (
    <>
      <div className='App'>
        {/* Good Practise to add classNames in react. */}
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className='recipes'>
          {recipes.map(recipe => (
            <Recipe
              key={uuidv4()}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
