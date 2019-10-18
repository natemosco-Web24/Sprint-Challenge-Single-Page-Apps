import React, { useState } from "react";
import Styled from "styled-components";

const StyledSection = Styled.section`
  .search-form {
    width:100%
    display: flex;
    flex-direction: column;
    align-items: center;
    .search{
      width:400px;
      border-color:orange;
      .searchbar{
      }
    }
  }
`;

export default function SearchForm({ query, setQuery }) {

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <StyledSection className="search-form">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="searchbar"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
    </StyledSection>
  );
}
