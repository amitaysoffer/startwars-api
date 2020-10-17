import axios from 'axios';
import React from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import TableComponent from './components/TableComponent'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      filteredCharacters: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const filterChar = this.state.characters.filter(char => char.name.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({ filteredCharacters: filterChar })
  }

  async componentDidMount() {
    const response = await axios.get('https://swapi.dev/api/people?1');
    const characters = response.data.results

    for (const char of characters) {
      const homeworldResponse = await axios.get(char.homeworld)
      char.homeworld = homeworldResponse.data.name

      const speciesdResponse = await axios.get(char.species)
      char.species = speciesdResponse.data.name
    }

    this.setState({
      characters: characters,
      filteredCharacters: characters
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form characters={this.state.characters} handleChange={this.handleChange} />
        <TableComponent characters={this.state.characters} filteredCharacters={this.state.filteredCharacters} />
      </div>
    );
  }
}

export default App;
