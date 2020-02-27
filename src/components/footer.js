import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: #2d2926ff;
  color: white;
  padding: 10px;
  margin-top: auto;

  a {
    color: cornsilk;
  }
`;

const Footer = () => {
  return (
    <StyledDiv>
      <p>Copyright &copy;{new Date().getFullYear()} Food Recipe App</p>
      <p>
        Powered by <a href={`www.spoonacular.com`}>spoonacular</a>
      </p>
    </StyledDiv>
  );
};

export default Footer;
