import React, { useContext }  from 'react'
import { FavoriteContext } from './favoriteContext'
import RecipeThumb from './recipeThumb'
import { Link } from 'react-router-dom'
import ResultGrid from './resultGrid'
import styled from 'styled-components'

const StyledButton = styled.button`
        padding: 0.5em 1em;
        background-color: #528854;
        color: white;
        border: 1px solid #2D2926FF;
        border-radius: 15px;
        font-size: 1.2em;
        font-family:'Open Sans', sans-serif;
        outline: none;
        margin: 1em;
        border: none;
        cursor: pointer;

`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

`





const MyRecipes = () => {
   const [favorite, setFavorite] = useContext(FavoriteContext)
   console.log(favorite)


  const deleteItem = (id) => {
    let newArr = favorite.filter((item) => item.foodId !== id)

    console.log(newArr)
    setFavorite(newArr)
  }
   
   
    return (
        <div>
          
            
          <ResultGrid header = 'My Recipes'> 
          
            { favorite.length > 0 ? 
            ( favorite.map(item => (
                 <StyledDiv key={item.foodId}>
                  
                    <Link to={`/${item.foodId}`}>
                  
                    <RecipeThumb
                      key ={item.foodId}
                      title = {item.title}
                      image = {item.image}

                    />
                    </Link>
                    <button onClick={()=>deleteItem(item.foodId)} >Remove Recipe</button>
                  </StyledDiv>
                  )) )   : (<h3>You have no recipes</h3>)}
            
           
          
        </ResultGrid>  

          { favorite.length > 0 ? <StyledButton onClick={()=> setFavorite([])}>Clear all</StyledButton> : ''}
        </div>
    )
}



export default MyRecipes