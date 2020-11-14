import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import DisplayTable from './components/DisplayTable'
import Pagination from './components/Pagination'
import Spinner from './components/Spinner'

function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [page, setPage] = useState(1);
  const [canSearch, setCanSearch] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  // const timeoutRef = useRef(null);
  let timeoutRef = useState(null);

  function onSearchFilterChange(e) {
    setCanSearch(false);
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    if (timeoutRef !== null) {
      clearTimeout(timeoutRef);
    }

    if (canSearch) performApiCall();

    timeoutRef = setTimeout(() => {
      timeoutRef = null;
      setCanSearch(true);
    }, 1000);
  }, [canSearch]);

  async function getHomeAndSpeciesInfo(characters) {
    for (const char of characters) {
      const httpsRequestHomeWorld = `https${char.homeworld.substring(4)}`
      const homeworldResponse = await axios.get(httpsRequestHomeWorld)
      char.homeworld = homeworldResponse.data.name

      if (char.species.length < 1) {
        char.species = 'Human'
      } else {
        const httpsRequestSpecies = `https${char.species[0].substring(4)}`
        const speciesdResponse = await axios.get(httpsRequestSpecies)
        char.species = speciesdResponse.data.name
      }
    }
    return characters
  }

  async function performApiCall() {
    if (searchValue) {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${searchValue}`);
      const characters = response.data.results;
      const completeCharacters = await getHomeAndSpeciesInfo(characters);
      setFilteredCharacters(completeCharacters)
    } else {
      setFilteredCharacters(characters)
    }
  }

  async function displayCharacters() {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
      const characters = response.data.results
      const completeCharacters = await getHomeAndSpeciesInfo(characters);
      setCharacters(completeCharacters)
      setFilteredCharacters(completeCharacters)
      setSpinner(prevSpinner => prevSpinner = false)
    } catch (err) {
      console.log('error in promise, ', err)
    }
  }

  useEffect(() => {
    displayCharacters();
  }, [page])

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

  return (
    <div className="app container">
      <Header />
      <Form characters={filteredCharacters} onSearchFilterChange={onSearchFilterChange} />
      {spinner ? <Spinner /> : <DisplayTable filteredCharacters={filteredCharacters} />}
      <Pagination
        page={page}
        handleNumberClick={handleNumberClick}
        handleNextButtonClick={handleNextButtonClick}
        handlePreviousButtonClick={handlePreviousButtonClick} />
    </div>
  );
}

export default App;
