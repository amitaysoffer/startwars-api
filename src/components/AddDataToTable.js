import React, { Component } from 'react'
import axios from 'axios';
import DisplayTable from './DisplayTable';

class AddDataToTable extends Component {
  constructor() {
    super()
    this.state = {
      data: ''
    }
  }

  componentDidMount() {

    axios.get('https://swapi.dev/api/people')
      .then(response => {
        // console.log(response)
        console.log(response.data.results);
        console.log(response.data.results);
        console.log(response.data.results);

        // this.setState({
        //   data: response.data.results
        //   data: response.data.results
        //   data: response.data.results
        //   data: response.data.results
        //   data: response.data.results
        // });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <DisplayTable />
      </div>
    )
  }
}

export default AddDataToTable