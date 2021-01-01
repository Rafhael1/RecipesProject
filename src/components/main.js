import React, {useEffect, useState} from "react";
import NavBar from './NavBar';
import Recipe from './Recipe';



const App = () => {

   const APP_ID = '5fa5a3e7';
   const APP_KEY = 'a096e28941164aa4aa65136e56c6e8cc';
  
   const [recipes, setRecipes] = useState([]);
   const [search, setSearch] = useState('');
   const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`    )
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }


  return(
    <div className="App">
      <NavBar />
     <form onSubmit={getSearch} className="search-form">
       <input
        className="search-bar"
        placeholder="Search"
        type="text" 
        value={search} 
        onChange={updateSearch} />
       <button 
       className="search-button" 
       type="submit">
         Search
         </button>
     </form>
     <div className="recipes">
     {recipes.map(recipe => (
       <Recipe 
       title={recipe.recipe.label}
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
       />
     ))}
     </div>
     <style jsx>{
        `@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

        .NavBar {
            list-style-type: none;
            margin: 0;
            padding: 10px 15px;
            width: 100%;
            background-image: linear-gradient(109.6deg, rgba(44, 83, 131, 1) 18.9%, rgba(95, 175, 201, 1) 91.1%);
            display: inline-flex;
            text-shadow: 0px 0px 5px black;
        }
        
        .title1 {
            color: rgb(0, 158, 145);
            font-family: 'Fredoka One', cursive;
            margin: 0;
            padding: 0 10px;
        }
        
        .title2 {
            color: rgb(0, 158, 145);
            font-family: 'Fredoka One', cursive;
            margin: 0;
            padding: 0;
        }
        
        .App {
            min-height: 100vh;
            background-color: #8EC5FC;
            background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
                        margin: 0;
            padding: 0;
            overflow: hidden;
          }
          
          .search-form{
            min-height: 10vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .search-bar{
            width: 50%;
            border: none;
            padding: 10px; 
          }
          
          .search-button {
            background: rgb(31, 132, 150);
            border: none;
            padding: 10px 20px;
            color: rgb(36, 36, 36)
          }
          
          .recipes{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          }html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
          
          a {
            color: inherit;
            text-decoration: none;
          }
          
          * {
            box-sizing: border-box;
            overflow-x: hidden;
          }
          
          `
    } </style>
    </div>
  )
}
export default App;
