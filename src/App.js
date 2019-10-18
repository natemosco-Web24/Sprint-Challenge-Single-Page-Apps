import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import axios from "axios";
import { Route, Link } from "react-router-dom";


import SearchForm from "./components/SearchForm";
import WelcomePage from "./components/WelcomePage";
import LocationsList from "./components/WelcomePage";
import LocationsCard from "./components/LocationCard";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";


export default function App() {
  return (
    <main>
      <header>
        <SearchForm></SearchForm>
        <Header></Header>
      </header>
      <section>

      </section>
    </main>
  );
}
