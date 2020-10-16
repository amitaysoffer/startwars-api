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

    // for (const char of characters)  {
    for (const char of characters) {
      const homeworld = await axios.get(char.homeworld)
      
      // debugger
      .then(response => {
        // console.log(char)
        // console.log(characters)
        
      })
    }


    this.setState({
      characters: characters,
      filteredCharacters: characters
    })
  }

  // let characters = ''
  // axios.get('https://swapi.dev/api/people?1')
  //   .then(response => {
  //     characters = response.data.results
  //     characters.forEach((char, index) => {
  //       // console.log(char)
  //       // console.log(index)
  //       axios.get(char.homeworld)
  //         .then(response => {
  //           char.homeworld = response.data.name
  //           debugger
  //         })
  //     });
  //     this.setState({
  //       characters: characters,
  //       filteredCharacters: characters
  //     })
  //   })
  //     .catch(error => {
  //       console.log(error);
  //     });


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
