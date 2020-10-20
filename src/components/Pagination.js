import React from 'react'

class Pagination extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 1
    }
    this.handleNumberClick = this.handleNumberClick.bind(this);
  }

  componentDidUpdate() {
    // this.props.onPageChange(this.state.page)
    // debugger
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
    console.log(this.state.page)
    return (
      <nav aria-label="Search characters pages">
        <ul className="pagination pagination-md pg-teal">
          <li className="page-item previous" onClick={this.handlePreviousButtonClick} ><a className="page-link" href="#">Previous</a></li>
          <li onClick={this.changeClassElement} className={(this.state.page === 1 ? 'active ' : '') + 'page-item number'} onClick={this.handleNumberClick}><a className="page-link" href="#">1</a></li>
          <li onClick={this.changeClassElement} className={(this.state.page === 2 ? 'active ' : '') + 'page-item number'} onClick={this.handleNumberClick}><a className="page-link" href="#">2</a></li>
          <li onClick={this.changeClassElement} className={(this.state.page === 3 ? 'active ' : '') + 'page-item number'} onClick={this.handleNumberClick}><a className="page-link" href="#">3</a></li>
          <li onClick={this.changeClassElement} className={(this.state.page === 4 ? 'active ' : '') + 'page-item number'} onClick={this.handleNumberClick}><a className="page-link" href="#">4</a></li>
          <li onClick={this.changeClassElement} className={(this.state.page === 5 ? 'active ' : '') + 'page-item number'} onClick={this.handleNumberClick}><a className="page-link" href="#">5</a></li>
          <li onClick={this.changeClassElement} className={(this.state.page === 6 ? 'active ' : '') + 'page-item number'} onClick={this.handleNumberClick}><a className="page-link" href="#">6</a></li>
          <li onClick={this.changeClassElement} className={(this.state.page === 7 ? 'active ' : '') + 'page-item number'} onClick={this.handleNumberClick}><a className="page-link" href="#">7</a></li>
          <li onClick={this.changeClassElement} className={(this.state.page === 8 ? 'active ' : '') + 'page-item number'} onClick={this.handleNumberClick}><a className="page-link" href="#">8</a></li>
          <li onClick={this.changeClassElement} className={(this.state.page === 9 ? 'active ' : '') + 'page-item number'} onClick={this.handleNumberClick}><a className="page-link" href="#">9</a></li>
          <li className="page-item next" onClick={this.handleNextButtonClick} ><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    )
  }
}

export default Pagination
