import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import DisplayTable from './components/TableChars'
import PaginationContainer from './components/PaginationContainer'
import Spinner from './components/Spinner'

function App() {

  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [spinner, setSpinner] = useState(true)

  async function onSearchFilterChange(e) {
    if (e.target.value) {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${e.target.value}`);
      const characters = response.data.results;

      for (const char of characters) {
        const homeworldResponse = await axios.get(char.homeworld)
        char.homeworld = homeworldResponse.data.name

        const speciesdResponse = await axios.get(char.species)
        char.species = speciesdResponse.data.name
      }
      setFilteredCharacters(prevFilteredCharacters => prevFilteredCharacters = characters)
    } else {
      setFilteredCharacters(prevFilteredCharacters => prevFilteredCharacters = characters)
    }
  }

  async function onPageChange(page) {
    try {
      const response = await axios.get(`https://swapi.dev/api/people?page=${page}`);
      const characters = response.data.results

      for (const char of characters) {
        const homeworldResponse = await axios.get(char.homeworld)
        char.homeworld = homeworldResponse.data.name

        const speciesdResponse = await axios.get(char.species)
        char.species = speciesdResponse.data.name
      }
      setCharacters(prevCharacters => prevCharacters = characters)
      setFilteredCharacters(prevFilteredCharacters => prevFilteredCharacters = characters)
      setSpinner(prevSpinner => prevSpinner = false)
    } catch (err) {
      console.log('error in promise, ', err)
    }
  }

  useEffect(() => {
    async function displayCharacters() {
      try {
        const response = await axios.get('https://swapi.dev/api/people?page=1');
        const characters = response.data.results

        for (const char of characters) {
          const homeworldResponse = await axios.get(char.homeworld)
          char.homeworld = homeworldResponse.data.name

          const speciesdResponse = await axios.get(char.species)
          char.species = speciesdResponse.data.name
        }
        setCharacters(prevCharacters => prevCharacters = characters)
        setFilteredCharacters(prevFilteredCharacters => prevFilteredCharacters = characters)
        setSpinner(prevSpinner => prevSpinner = false)
      } catch (err) {
        console.log('error in promise, ', err)
      }
    }
    displayCharacters();
  }, [])

  return (
    <div className="App container">
      <Header />
      <Form characters={characters} onSearchFilterChange={onSearchFilterChange} />
      {spinner ? <Spinner /> : <DisplayTable characters={characters} filteredCharacters={filteredCharacters} />}
      <PaginationContainer onPageChange={onPageChange} />
    </div>
  );
}

export default App;
