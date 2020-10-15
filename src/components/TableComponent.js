import React, { Component } from 'react'
// import axios from 'axios';
import TableChars from './TableChars';

class TableComponent extends Component {
  constructor() {
    super()
    this.state = {
      // name: '',
      // birthDate: '',
      // height: '',
      // mass: '',
      // homeworld: '',
      // species: ''
    }
  }


  
  
  render() {
    // console.log(this.props.data)
    return (
      <div>
        <TableChars charactersData={this.props.charactersData} filteredCharacters={this.props.filteredCharacters} />
      </div>
    )
  }
}

export default TableComponent