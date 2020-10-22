import React, { useState } from 'react'
import PaginationDisplay from './PaginationDisplay'

function PaginationContainer(props) {
  const [page, setPage] = useState(1)

  function handleNumberClick(event) {
    props.onPageChange(event.target.text);
    setPage(parseInt(event.target.text))
  };

  function handleNextButtonClick() {
    if (page < 9) {
      setPage(prevPage => prevPage + 1)
      props.onPageChange(page + 1);
    }
  }

  function handlePreviousButtonClick() {
    if (page > 1) {
      setPage(prevPage => prevPage - 1)
      props.onPageChange(page - 1);
    }
  }

  return (
    <nav aria-label="Search characters pages">
      <PaginationDisplay handleNumberClick={handleNumberClick} handleNextButtonClick={handleNextButtonClick} handlePreviousButtonClick={handlePreviousButtonClick} page={page} />
    </nav>
  )
}


export default PaginationContainer
