import React from 'react'

function Form(props) {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">Name of Character</span>
      </div>
      <input onChange={(e) => props.onSearchFilterChange(e)} type="text" id="search-filter" className="form-control"></input>
    </div>
  )
}

export default Form