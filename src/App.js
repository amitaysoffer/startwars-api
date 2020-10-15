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
    // console.log(e.target.value)
    // console.log(this.state.charactersData)

    // debugger
    const a = this.state.charactersData.filter(char => char.name.includes(e.target.value))
    this.setState({ filteredCharacters: a })

    // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    // const result = words.filter(word => word.length > 6);
  }


  componentDidUpdate() {
    
  }

  componentDidMount() {
    axios.get('https://swapi.dev/api/people?1')
      .then(response => {
        const charactersData = response.data.results
        this.setState({ 
          charactersData: charactersData,
          filteredCharacters: charactersData

        })
        // console.log(this.state.data)
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
