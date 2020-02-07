import React, { useContext }  from 'react'
import { FavoriteContext } from './favoriteContext'
import RecipeThumb from './recipeThumb'
import { Link } from 'react-router-dom'
import ResultGrid from './resultGrid'
import styled from 'styled-components'

const StyledButton = styled.button`
        padding: 10px 10px;
        background-color: #343148ff;
        color: white;
        border: 1px solid #2D2926FF;
        border-radius: 6px;
        font-size: 1.2em;
        font-family:'Open Sans', sans-serif;
        outline: none;
        cursor: pointer;

`





const MyRecipes = () => {
   const [favorite, setFavorite] = useContext(FavoriteContext)
   console.log(favorite)


   
   
    return (
        <div>
            
          <ResultGrid header = 'My Recipes'> 
          
            { favorite.length > 0 ? 
            ( favorite.map(item => (
                
                  <Link to={`/${item.foodId}`} key={item.foodId}>
                 
                  <RecipeThumb
                    key ={item.foodId}
                    title = {item.title}
                    image = {item.image}
                  />
                  </Link>
                  
                  )) )   : (<h3>You have no recipes</h3>)}
            
           
          
        </ResultGrid>  

          { favorite.length > 0 ? <StyledButton onClick={()=> setFavorite([])}>Clear all</StyledButton> : ''}
        </div>
    )
}



export default MyRecipes