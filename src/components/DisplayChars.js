import React from 'react'

function DisplayChars(props) {
  const { name, birth_year, height, mass, homeworld, species } = props.charData
  return (
    <tr>
      <td>{name}</td>
      <td>{birth_year}</td>
      <td>{height}</td>
      <td>{mass}</td>
      <td>{homeworld}</td>
      <td>{species}</td>
    </tr>
  )
}

export default DisplayChars
