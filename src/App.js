// import axios from 'axios';
import React from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import TableComponent from './components/TableComponent'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <TableComponent />
      </div>
    );
  }
}

export default App;
