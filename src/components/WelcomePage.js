import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledWelcomePage = styled.main`
  width:97%;
  height:auto;
  min-height:90vh;
  background: url("https://images5.alphacoders.com/796/796108.jpg") no-repeat 100%/cover;
  header{
    background-color: #1e90ff85;
    width:100%;
  }
  h1{
    color: yellow;
    text-shadow: -2px 3px 8px black;
  }
  .image{
    width:200px;
    height:200px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background: url("https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjpzP-4jKblAhUFrZ4KHVSzASgQjRx6BAgBEAQ&url=https%3A%2F%2Fwall.alphacoders.com%2Fbig.php%3Fi%3D936934&psig=AOvVaw0mEKWRTagYM0bqMcnMQEMF&ust=1571498014559961") no-repeat 100%/cover;
 
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
          <h4>I remember that...</h4>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </div>
        <Link to="/characterlist">
          <button>Enter Here</button>
        </Link>
      </section>
    </StyledWelcomePage>
  );
}
