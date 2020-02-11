import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Search from '../src/components/search';
import ResultGrid from '../src/components/resultGrid';
import RecipeThumb from './components/recipeThumb';
import Spinner from './components/spinner'


function Home() {
  const[recipes,setRecipes] = useState([]);
  const[searchTerm, setSearch] = useState('');
  const[input, setInput] = useState('');
  const[isLoading, setLoading] = useState(false)
  const[error, setError] = useState(null)


  async function fetchData(query){
      setLoading(true)
      setRecipes([])
    const API_KEY = process.env.REACT_APP_KEY;
    const result = await fetch(`https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${API_KEY}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }

    })
    if(result.ok) {
      const resJson = await result.json();
      console.log(resJson)
      setRecipes(resJson.results)
      
      setLoading(false)
     

    } else {
       throw new Error('Unable to Fetch data')
    }
   
   
  }


  useEffect(()=>{
    fetchData(searchTerm)
    .catch((error)=> {
      setLoading(false);
      setError(error.message) 
  
  })
  },[searchTerm])


  useEffect(()=>{
    if(sessionStorage['defaultRecipes']){
      setLoading(false)
      setRecipes(JSON.parse(sessionStorage.getItem('defaultRecipes')))
    }
    else {
      fetchData()
    }
  },[])

  useEffect(()=> {
    if(!searchTerm) {
        sessionStorage.setItem('defaultRecipes', JSON.stringify(recipes))
    }

},[searchTerm, recipes])

  


  const handleClick = () => {
    setSearch(input)
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  
  console.log('recipes:' + recipes)
  return (
    <div>
        
        <Search handleChangeEvent={handleChange} handleClickEvent={handleClick} />
  
        { isLoading && <Spinner />}
        <ResultGrid header = {searchTerm ? `${recipes.length} Results for ${searchTerm}` : ' '}> 
        {recipes.map(item => (
             <Link to={`/${item.id}`} key={item.id}>
            <RecipeThumb
              key ={item.id}
              title = {item.title}
              image = {item.image}
            />
            </Link>
        
        ))}

      
     
      </ResultGrid>
          
      {error ? <p>{error}</p> : null}
     
      
    </div>
  );
}

export default Home;
