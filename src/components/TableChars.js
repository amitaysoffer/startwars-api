import React from 'react'
import TableChar from './TableChar'


class DisplayTable extends React.Component {
  constructor() {
    super()
    this.state = {
      homeworld: '',
      species: ''
    }
  }


  // const { characters } = props.data
  // console.log(characters);
  render() {
    // debugger
    console.log(this.props.charactersData)
    console.log(this.props.filteredCharacters)

    // const mapChars = this.props.filteredCharacters.length > 0
    //   ?

    const mapChars =  this.props.filteredCharacters.map(charData =>
        <TableChar charData={charData} key={charData.name} />)
      // :
      // this.props.charactersData.map(charData =>
      //   <TableChar charData={charData} key={charData.name} />)


    return (
      <table className="table table-striped table-hover table-dark">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Homeworld</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {mapChars}
        </tbody>
      </table>
    )
  }
}

export default DisplayTable