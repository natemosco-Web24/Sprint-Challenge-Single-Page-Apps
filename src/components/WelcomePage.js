import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWelcomePage = styled.main`
  width:97%;
  height:auto;
  min-height:90vh;
  background: url("https://images.alphacoders.com/936/936934.jpg") no-repeat 100%/cover;
  header{
    background-color: #ffffff1f;
    width:100%;
  }
  h1{
    color: #e6e6e6;
    text-shadow: -2px 3px 8px black;
  }
  .image{
    width:200px;
    height:200px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background: url("https://rickandmortyapi.com/api/character/avatar/1.jpeg") no-repeat 100%/cover;
 
    h4{
      background-color: #fdfdfd;
      padding: 3px;
      border-top-right-radius: 25px;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 22px;
      color: #d8be0d;
      font-weight: 700;
      text-shadow: 1px 3px 3px black;
    }
  }
  button{
    border-radius: 30px;
    height: 30px;
    width: 107px;
    font-size: 14px;
    font-weight: 700;
    color: red;
    background-color: #363675;
    text-shadow: -2px 3px 8px black;
    overflow: hidden;
  }
`;

export default function WelcomePage() {
  return (

    <StyledWelcomePage>
      <section className="welcome-page">
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
        </header>
        <div className="image">
          <h4> Good Times...</h4>
          {/* <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          /> */}
        </div>
        <Link to="/data">
          <button>Enter Here</button>
        </Link>
      </section>
    </StyledWelcomePage>
  );
}
