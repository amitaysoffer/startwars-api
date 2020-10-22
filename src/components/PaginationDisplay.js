import React from 'react';


function PaginationDisplay(props) {
  console.log(props.page)
  return (
    <ul className="pagination pagination-md pg-teal">
      <li className="page-item previous" onClick={props.handlePreviousButtonClick} ><a className="page-link" href="/#">Previous</a></li>
      <li className={(props.page === 1 ? 'active ' : '') + 'page-item number'} onClick={props.handleNumberClick}><a className="page-link" href="/#">1</a></li>
      <li className={(props.page === 2 ? 'active ' : '') + 'page-item number'} onClick={props.handleNumberClick}><a className="page-link" href="/#">2</a></li>
      <li className={(props.page === 3 ? 'active ' : '') + 'page-item number'} onClick={props.handleNumberClick}><a className="page-link" href="/#">3</a></li>
      <li className={(props.page === 4 ? 'active ' : '') + 'page-item number'} onClick={props.handleNumberClick}><a className="page-link" href="/#">4</a></li>
      <li className={(props.page === 5 ? 'active ' : '') + 'page-item number'} onClick={props.handleNumberClick}><a className="page-link" href="/#">5</a></li>
      <li className={(props.page === 6 ? 'active ' : '') + 'page-item number'} onClick={props.handleNumberClick}><a className="page-link" href="/#">6</a></li>
      <li className={(props.page === 7 ? 'active ' : '') + 'page-item number'} onClick={props.handleNumberClick}><a className="page-link" href="/#">7</a></li>
      <li className={(props.page === 8 ? 'active ' : '') + 'page-item number'} onClick={props.handleNumberClick}><a className="page-link" href="/#">8</a></li>
      <li className={(props.page === 9 ? 'active ' : '') + 'page-item number'} onClick={props.handleNumberClick}><a className="page-link" href="/#">9</a></li>
      <li className="page-item next" onClick={props.handleNextButtonClick} ><a className="page-link" href="/#">Next</a></li>
    </ul>
  )
}

export default PaginationDisplay