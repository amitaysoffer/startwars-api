import React, { Component } from 'react'
import axios from 'axios';
import TableChars from './TableChars';

class TableComponent extends Component {
  constructor() {
    super()
    this.state = {
      data: []
      // name: '',
      // birthDate: '',
      // height: '',
      // mass: '',
      // homeworld: '',
      // species: ''
    }
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  componentDidMount() {

    axios.get('https://swapi.dev/api/people?1')
      .then(response => {
        const charactersData = response.data.results
        this.setState({ data: charactersData })
        console.log(this.state.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <TableChars data={this.state.data} />
      </div>
    )
  }
}

export default TableComponent