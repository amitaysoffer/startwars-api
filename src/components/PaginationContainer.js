import React from 'react'
import PaginationDisplay from './PaginationDisplay'

class PaginationContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 1
    }
  }

  handleNumberClick = (event) => {
    this.props.onPageChange(event.target.text);
    this.setState({ page: parseInt(event.target.text) });
  };

  handleNextButtonClick = () => {
    if (this.state.page < 9) {
      const nextNumber = parseInt(this.state.page) + 1
      this.props.onPageChange(nextNumber);
      this.setState({ page: nextNumber });
    }
  }

  handlePreviousButtonClick = () => {
    if (this.state.page > 1) {
      const previousNumber = this.state.page - 1
      this.props.onPageChange(previousNumber);
      this.setState({ page: previousNumber });
    }
  }

  render() {
    return (
      <nav aria-label="Search characters pages">
        <PaginationDisplay handleNumberClick={this.handleNumberClick} handleNextButtonClick={this.handleNextButtonClick} handlePreviousButtonClick={this.handlePreviousButtonClick} page={this.state.page} />
      </nav>
    )
  }
}

export default PaginationContainer
