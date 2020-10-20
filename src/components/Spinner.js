import React from 'react'

function Spinner() {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-warning" style={styleSpinner} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

const styleSpinner = {
  width: '4rem',
  height: '4rem',
  margin: '30px 0'
}

export default Spinner