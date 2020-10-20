import axios from 'axios';
import React from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import DisplayTable from './components/TableChars'
import Pagination from './components/Pagination'
import Spinner from './components/Spinner'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      filteredCharacters: [],
      spinner: true
    }
    this.onSearchFilterChange = this.onSearchFilterChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  onSearchFilterChange = (e) => {
    const filterChar = this.state.characters.filter(char => char.name.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({ filteredCharacters: filterChar })
  }

  async onPageChange(page) {
    try {
      const response = await axios.get(`https://swapi.dev/api/people?page=${page}`);
      const characters = response.data.results

      for (const char of characters) {
        const homeworldResponse = await axios.get(char.homeworld)
        char.homeworld = homeworldResponse.data.name

        const speciesdResponse = await axios.get(char.species)
        char.species = speciesdResponse.data.name
      }
      this.setState({
        characters: characters,
        filteredCharacters: characters,
        spinner: false
      })
    } catch (err) {
      console.log('error in promise, ', err)
    }
  }

  async componentDidMount() {
    console.log('component did mount')
    try {
      const response = await axios.get('https://swapi.dev/api/people?page=1');
      const characters = response.data.results

      for (const char of characters) {
        const homeworldResponse = await axios.get(char.homeworld)
        char.homeworld = homeworldResponse.data.name

        const speciesdResponse = await axios.get(char.species)
        char.species = speciesdResponse.data.name
      }
      this.setState({
        characters: characters,
        filteredCharacters: characters,
        spinner: false
      })
    } catch (err) {
      console.log('error in promise, ', err)
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form characters={this.state.characters} onSearchFilterChange={this.onSearchFilterChange} />
        {this.state.spinner ? <Spinner /> : <DisplayTable characters={this.state.characters} filteredCharacters={this.state.filteredCharacters} />}
        <Pagination onPageChange={this.onPageChange} />
      </div>
    );
  }
}

export default App;
