import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'


const StyledHeader = styled.header`

    background-color: tomato;
    height: 15vh;
    display: flex;
   

    
    img.logo {
        padding-left: 2em;
        height: 5rem;
        padding-top: 1rem;
    
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
        align-self: flex-end;
        
        
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
            <figure>
            <Link to={`/`}  ><img className="logo" src={logo} alt="logo" /></Link>
            </figure>
            <nav>
                 
                 <li className="recipes"><Link to={`/myRecipes/`}>My Recipes</Link></li>
                
                            
                        
            </nav>
        </StyledHeader>
    )
}

export default Header;