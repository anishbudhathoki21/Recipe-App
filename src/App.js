import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = ()=>{

  const API_ID="25af5fc0";
  const API_KEY=" a697ecc41c3416eb8305d1e311ed75a3";
  
  const [recipes, setRecipes]=useState([
    
 ]);

  const [search,setSearch]=useState("");

  const [query,setQuery]=useState('chicken');

    useEffect(  () => {
      getRecipes();
      },[query]);

    const getRecipes= async ()=>
    {
      const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
      const data = await response.json();
      
      setRecipes(data.hits);
      
    }

    const updateSearch= e => {
      setSearch(e.target.value);
      }

      const getSearch=e=>
      {
        e.preventDefault();
        setQuery(search);
        setSearch('');
      }
 
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit">Search</button>

      </form>
      {/* <h1 onClick={()=> setCounter(counter+1)}>{counter}</h1> */}
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients}
        /> 
      ))}
      </div>
    </div>
  )
}

export default App;
