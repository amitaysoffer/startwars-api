import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import DisplayTable from './components/DisplayTable'
import Pagination from './components/Pagination'
import Spinner from './components/Spinner'

function App() {
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [spinner, setSpinner] = useState(true)
  const [page, setPage] = useState(1)

  function handleNumberClick(event) {
    setPage(parseInt(event.target.text))
  };

  function handleNextButtonClick() {
    if (page < 9) {
      setPage(prevPage => prevPage + 1)
    }
  }

  function handlePreviousButtonClick() {
    if (page > 1) {
      setPage(prevPage => prevPage - 1)
    }
  }


  async function onSearchFilterChange(e) {
    if (e.target.value) {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${e.target.value}`);
      const characters = response.data.results;

      for (const char of characters) {

        const homeworldResponse = await axios.get(char.homeworld.replace('http', 'https'))
        char.homeworld = homeworldResponse.data.name

        const speciesdResponse = await axios.get(char.species.replace('http', 'https'))
        char.species = speciesdResponse.data.name
      }
      setFilteredCharacters(prevFilteredCharacters => prevFilteredCharacters = characters)
    } else {
      setFilteredCharacters(prevFilteredCharacters => prevFilteredCharacters = characters)
    }
  }

  useEffect(() => {
    async function displayCharacters() {
      try {
        const response = await axios.get(`https://swapi.dev/api/people?page=${page}`);
        const characters = response.data.results

        for (const char of characters) {
          const homeworldResponse = await axios.get(char.homeworld.replace('http', 'https'))
          debugger
          char.homeworld = homeworldResponse.data.name

          const speciesdResponse = await axios.get(char.species.replace('http', 'https'))
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
  }, [page])

  return (
    <div className="app container">
      <Header />
      <Form characters={characters} onSearchFilterChange={onSearchFilterChange} />
      {spinner ? <Spinner /> : <DisplayTable characters={characters} filteredCharacters={filteredCharacters} />}
      <Pagination
        page={page}
        handleNumberClick={handleNumberClick}
        handleNextButtonClick={handleNextButtonClick}
        handlePreviousButtonClick={handlePreviousButtonClick} />
    </div>
  );
}

export default App;
