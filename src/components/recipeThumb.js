import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledRecipeThumb = styled.div`
  img {
    width: 100%;
    /* min-height: 340px; */
    transition: all 0.3s;
    object-fit: cover; 
   
    border: 4px solid whitesmoke;
    animation: animateMovieThumb 0.5s;

    :hover {
      opacity: 0.8;
    }

    .clickable {
      cursor: pointer;
    }

    @keyframes animateMovieThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;





const RecipeThumb = ({image,title}) => {
    
    let img = JSON.stringify(image)
    if(img.indexOf("/") !== -1){ 
    let imgNameIndex = img.lastIndexOf("/") + 1;
    image = img.substr(imgNameIndex)
    image = JSON.parse(`"${image}`)
    } else {
      image = image
    }
    

    return (
        <StyledRecipeThumb>
            <img src={`https://spoonacular.com/recipeImages/${image}`} height={150} alt="food" />
            <div>{title} </div>

        </StyledRecipeThumb>

    )
}

RecipeThumb.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
}

export default RecipeThumb;