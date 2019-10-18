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

  //    //first initial API call, only needed once initially (avoid constant refires)
  //    useEffect(() => {
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=1`)
  //     .then(response => {
  //       console.log(`characters response page=1`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 1`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=2`)
  //     .then(response => {
  //       console.log(`characters response page=2`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 2`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=3`)
  //     .then(response => {
  //       console.log(`characters response page=3`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 3`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=4`)
  //     .then(response => {
  //       console.log(`characters response page=4`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 4`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=5`)
  //     .then(response => {
  //       console.log(`characters response page=5`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 5`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=6`)
  //     .then(response => {
  //       console.log(`characters response page=6`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 6`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=7`)
  //     .then(response => {
  //       console.log(`characters response page=7`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 7`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=8`)
  //     .then(response => {
  //       console.log(`characters response page=8`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 8`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=9`)
  //     .then(response => {
  //       console.log(`characters response page=9`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 9`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=10`)
  //     .then(response => {
  //       console.log(`characters response page=10`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 10`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=11`)
  //     .then(response => {
  //       console.log(`characters response page=11`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 11`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=12`)
  //     .then(response => {
  //       console.log(`characters response page=12`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 12`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=13`)
  //     .then(response => {
  //       console.log(`characters response page=13`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 13`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=14`)
  //     .then(response => {
  //       console.log(`characters response page=14`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 14`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=15`)
  //     .then(response => {
  //       console.log(`characters response page=15`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 15`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=16`)
  //     .then(response => {
  //       console.log(`characters response page=16`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 16`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=17`)
  //     .then(response => {
  //       console.log(`characters response page=17`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 17`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=18`)
  //     .then(response => {
  //       console.log(`characters response page=18`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 18`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=19`)
  //     .then(response => {
  //       console.log(`characters response page=19`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 19`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=20`)
  //     .then(response => {
  //       console.log(`characters response page=20`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 20`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=21`)
  //     .then(response => {
  //       console.log(`characters response page=21`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 21`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=22`)
  //     .then(response => {
  //       console.log(`characters response page=22`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 22`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=23`)
  //     .then(response => {
  //       console.log(`characters response page=23`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 23`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=24`)
  //     .then(response => {
  //       console.log(`characters response page=24`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 24`, err)
  //     });
  //     axios
  //     .get(`https://rickandmortyapi.com/api/character/?page=25`)
  //     .then(response => {
  //       console.log(`characters response page=25`, response, data);
  //       setData(data => [...data, ...response.data.results])
  //       setFilteredCharacter(filteredCharacter => [...filteredCharacter, ...response.data.results]);
  //     })
  //     .catch(err=>{
  //       console.log(`characters error page 25`, err)
  //     });



  //   }, []);


  // //filter through collected data that is held in state
  // useEffect(() => {
  //   setFilteredCharacter(
  //     data.filter(character =>
  //       character.name.toLowerCase().includes(query.toLowerCase())
  //     )
  //   );
  // }, [query]);

  return (
    <main>
      <header>
        <SearchForm query={query} setQuery={setQuery}></SearchForm>
        <Header></Header>
      </header>
      <section>
        <Route exact path="/" component={WelcomePage}></Route>
        <Route path="/data" render={(props) => <Tabs {...props} filteredCharacter={filteredCharacter} />}></Route>
      </section>
    </main>
  );
}
