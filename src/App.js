// import axios from 'axios';
import React from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import AddDataToTable from './components/AddDataToTable'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // imageURL: ''
    }
  }

  
    // axios.get('https://dog.ceo/api/breeds/image/random')
    //   .then(response => {
    //     // console.log(response)
    //     console.log(response.data);
    //     this.setState({ imageURL: response.data.message });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  // }
  render() {
    return (
      <div className="App">
        {/* <img src={this.state.imageURL} alt="dog"/> */}
        <Header />
        <Form />
        <AddDataToTable />
      </div>
    );
  }
}

export default App;
