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
      charactersData: [],
      filteredCharacters: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const filterChar = this.state.charactersData.filter(char => char.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({ filteredCharacters: filterChar })
  }

  componentDidMount() {
    axios.get('https://swapi.dev/api/people?1')
      .then(response => {
        const charactersData = response.data.results
        this.setState({
          charactersData: charactersData,
          filteredCharacters: charactersData
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form charactersData={this.state.charactersData} handleChange={this.handleChange} />
        <TableComponent charactersData={this.state.charactersData} filteredCharacters={this.state.filteredCharacters} />
      </div>
    );
  }
}

export default App;
