import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components';
import Spinner from './spinner'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { FavoriteContext } from './favoriteContext'

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 20px;
    padding: 1em;

    img {
        border-radius: 5px;
    }

    h1 {
        text-align: center;
        padding: 1rem;
    }

    .ingDiv {
        padding: 2em;
        padding-top: 4em;
    }

   
    li {
        line-height: 40px;
        
    }

    .instructions  {
        padding: 2em;
        line-height: 1.8em;
    }

    p {
        padding-top: 0.8em;
    }

    .butDiv {
        display: flex;
        flex-direction: column;
        margin-right: auto;
        padding: 2em;
    }

    button {
        
        padding: 10px 10px;
        
        background-color: #528854;
        color: white;
        border: 1px solid #2D2926FF;
        border-radius: 6px;
        font-size: 1.2em;
        font-family:'Open Sans', sans-serif;
        border: none;    
        outline: none;
        cursor: pointer;
    } 

    button:disabled {
        opacity: 0.3;
        cursor: not-allowed; 
    }

 

    a {
        color: tomato;
        cursor: pointer;
        padding-top: 0.5em;
    }
   
   @media only screen and (max-width:1095px) {
        display: flex;
        flex-direction: column;

        img {
            width: 100%;
        }

        .ingDiv {
        padding-top: 1em;
    }

    



   }
  

`





const RecipeDetails = ({ match }) => {
    const[recipe,setRecipe] = useState({
        ingredients: [],

    })
    const [isLoading, setLoading ] = useState(false)
    const [isClicked, setClick] = useState(false)
    const [error, setError] = useState(null)
    const[ favorite, setFavorite ] = useContext(FavoriteContext)
    
    const id = match.params.id;

    
async function fetchItem() {
    
    setLoading(true)
    const API_KEY = process.env.REACT_APP_KEY
    const result = await fetch( `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
  
      })

      if(result.ok) {
          
      const resJson = await result.json()
     
      
      setRecipe({
          ingredients: resJson.extendedIngredients,
          time: resJson.readyInMinutes,
          image: resJson.image,
          title: resJson.title,
          instructions: resJson.instructions
        })

    setLoading(false)

      } else {

          throw new Error("Unable to Fetch Data")
          
              }


     
      

}
    // useEffect(()=>{
    //     fetchItem()
       
    // },[])

    useEffect(()=> {
        if(localStorage[id]) {
          setRecipe(JSON.parse(localStorage[id]))
          setLoading(false)
        } else { 
          fetchItem()
          .catch((error)=> {
            setLoading(false);
            setError(error.message) 
        
        })

        }
        
      },[id])
  
      useEffect(()=>{
        localStorage.setItem(id, JSON.stringify(recipe))
  
      },[id,recipe])


    const { time, ingredients,image,title,instructions} = recipe
    
    
    const handleClick = () => {
        console.log(favorite)
        const resultFind = favorite.find(({foodId}) => foodId === id)
        if(resultFind){
            setClick(true)
            return
        }
        setFavorite(fav => [ ...fav, {title,image,foodId:id}])
        setClick(true)
    }
   
     
    return(
        <StyledDiv>
            { isLoading  ?  <Spinner /> : <>
            <div>
                <h1>{title}</h1>
                <img src={image} alt={`${title}`}/>
            </div>
            
            <div className="ingDiv">
                <h2 className="ingredients">Ingredients</h2>
                {ingredients.map(({name,originalString}) => (
                    <li key={name}>{originalString}</li>
                ))}
                <p>Preparation and Cooking Time: {time}mins</p>  
            </div> 
            <div className="instructions">
                <h2>Instructions</h2>
                <p>{instructions}</p>
            </div>
            <div className="butDiv">
    <button onClick={handleClick} disabled={isClicked} >Add to My Recipes</button>
            {isClicked && <Link to={"/myRecipes/"}>Added to My Recipes</Link>}
            </div> </> }
            
           
            
            
               {error ? <p>{error}</p> : null} 
                 

        </StyledDiv>
    )
}

RecipeDetails.propTypes = {
  match: PropTypes.object
}


export default RecipeDetails;