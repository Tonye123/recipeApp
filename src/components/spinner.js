import React from 'react'
import styled from 'styled-components'


const StyledDiv = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 5rem;
  
  
  .spinner {
  border: 16px solid #f3f3f3; 
  border-top: 14px solid #f04f30; 
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;

  }


  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}



`



const Spinner = ()=> {
    return (
        <StyledDiv>
            <div className="spinner">
            </div>
        </StyledDiv>
    )
}


export default Spinner