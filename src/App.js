import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";


import SearchForm from "./components/SearchForm";
import WelcomePage from "./components/WelcomePage";
import LocationsList from "./components/WelcomePage";
import LocationsCard from "./components/LocationCard";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";

import Tabs from "./components/Tabs";

export default function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredCharacter, setFilteredCharacter] = useState([]);



  return (
    <main>
      <header>
        <SearchForm query={query} setQuery={setQuery}></SearchForm>
        <Header></Header>
      </header>
      <section>
        <Route exact path="/" component={WelcomePage}></Route>
        <Route path="/data" render={(props) => <Tabs {...props} data={data} filteredCharacter={filteredCharacter} />}></Route>
      </section>
    </main>
  );
}
