import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  max-width: 100vw;
  display: flex;
  position: relative;
  color: #aaa;
  font-size: 1.2rem;

  input {
    width: 100vw;
    height: 6vh;
    border: 1px solid #ccc;
    border-radius: 4px;
    border-right: none;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    padding-left: 20px;
    font-size: 1.2em;
    background-color: #f7fafc;
    text-indent: 28px;
  }

  button {
    position: relative;
    padding: 5px;
    min-width: 20vw;
    background-color: #528854;
    color: #fef9d7;
    border: none;
    border-radius: 6px;
    font-size: 1.3rem;
    font-family: "Open Sans", sans-serif;
    outline: none;
  }

  .fa-search {
    position: absolute;
    top: 14px;
    left: 10px;
  }
`;

const Search = ({ handleChangeEvent, handleClickEvent }) => {
  return (
    <StyledDiv>
      <span className="fa fa-search"></span>
      <input
        type="text"
        placeholder="search recipes"
        onChange={handleChangeEvent}
      />
      <button onClick={handleClickEvent}>Search</button>
    </StyledDiv>
  );
};

Search.propTypes = {
  handleChangeEvent: PropTypes.func,
  handleClickEvent: PropTypes.func
};

export default Search;
