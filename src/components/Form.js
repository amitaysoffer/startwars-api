import React from 'react'

function Form(props) {
  return (
    <div className="input-wrapper">
      <input onChange={(e) => props.onSearchFilterChange(e)} 
      type="text" 
      id="search-filter" 
      className="form-control" 
      placeholder="May the force will be with whom?"></input>
    </div>
  )
}

export default Form