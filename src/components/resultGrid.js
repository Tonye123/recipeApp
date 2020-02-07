import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledHeader = styled.h1`
    padding: 1em;
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 60px;
    padding: 1em;
   

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }

  

`;





const ResultGrid = ({header,children}) => {
    return(
        <>
        {header && <StyledHeader>{header}</StyledHeader>}
        <StyledGrid>
            
              {children}
        </StyledGrid>
        </>
    )
}

ResultGrid.propTypes = {
  children: PropTypes.array,
  header: PropTypes.string
}

export default ResultGrid;