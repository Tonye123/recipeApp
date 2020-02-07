import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const StyledHeader = styled.header`

    background-color: tomato;
    height: 15vh;
   

    
    .logo {
        padding-left: 2em;
    
    }

    nav {
    display: flex;
    width: 50vw;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    margin-left: auto;
    
 
    }

    li {
        list-style: none;
        
    }

     .recipes {
    
      
        font-size: 1.5em;
        padding-right: 2em;
        font-family: 'Handlee', cursive;
    
        
        
    } 

    a {
        text-decoration: none;
        color: #fef9d7;
        
    }

    a:hover {
        text-decoration: underline;
    }


  


`

  

const Header = () => {
    return(
        <StyledHeader>
            <Link to={`/`} className="logo" >Food Recipe App</Link>
            <nav>
                 
                 <li className="recipes"><Link to={`/myRecipes/`}>My Recipes</Link></li>
                
                            
                        
            </nav>
        </StyledHeader>
    )
}

export default Header;