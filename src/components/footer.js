import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background: #2d2926ff;
    color: white;
    padding: 10px;
 

`



const Footer = () => {
    return(
        <StyledDiv>
           <p>Copyright - 2020 Yummy Food App</p>     
           <p>Powered by <a href={`www.spoonacular.com`}>spoonacular</a></p>
        </StyledDiv>
    )
}


export default Footer;