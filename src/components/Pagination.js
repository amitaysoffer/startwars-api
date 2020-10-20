import React from 'react'

class Pagination extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 1
    }
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleNextElement = this.handleNextElement.bind(this);
    this.setNumberColor = this.setNumberColor.bind(this);
  }

  componentDidUpdate() {
    // this.props.onPageChange(this.state.page)
    // debugger
  }

  handleNumberClick = (event) => {
    this.props.onPageChange(event.target.text);
    this.setState({ page: event.target.text });
    this.setNumberColor();
  };

  // my function
  // handleNumberClick = (event) => {

  //   this.props.onPageChange(event.target.text);

  //   // Next button
  //   if (event.target.parentElement.className.includes('next') && this.state.page < 9) {
  //     this.setState({ page: this.state.page + 1 })
  //     debugger
  //     document.querySelectorAll('.number')[this.state.page].classList.add('active')
  //     document.querySelectorAll('.number')[this.state.page - 1].classList.remove('active')
  //     console.log('Next', this.state.page)
  //   }
  //   // Previous button
  //   if (event.target.parentElement.className.includes('previous') && this.state.page > 1) {
  //     this.setState({ page: this.state.page - 1 })
  //     console.log('Previos', this.state.page)
  //   }

  //   event.target.parentElement.parentElement.children[this.state.page].classList.remove('active')
  //   event.target.parentElement.classList.add('active')
  //   this.setState({ page: parseInt(event.target.text) })
  //   console.log('Normal Number', this.state.page)

  //   console.log(document.querySelectorAll('.number')[this.state.page])
  //   // debugger
  //   this.setNumberColor()

  // }

  setNumberColor = () => {
    // debugger
    // event.target.parentElement.parentElement.children[this.state.page].classList.remove('active')
    // event.target.parentElement.classList.add('active')
  }

  handleNextElement = (event) => {

    const nextNumber = event.target.parentElement.classList.contains('next') ?
      parseInt(this.state.page) + 1 :
      parseInt(this.state.page) - 1;
    this.props.onPageChange(nextNumber);
    this.setState({ page: nextNumber });

    // debugger
    // if (e.target.parentElement.className.includes('next') && this.state.page < 9) {
    //   this.setState({ page: this.state.page + 1 })
    // }
    // if (e.target.parentElement.className.includes('previous') && this.state.page > 1) {
    //   this.setState({ page: this.state.page - 1 })
    // }
    // debugger
    // this.props.onPageChange(this.state.page)
  }

  render() {
    return (
      <nav aria-label="Search characters pages">
        <ul className="pagination pagination-md pg-teal">
          <li className="page-item previous" onClick={this.handleNextElement} ><a className="page-link" href="#">Previous</a></li>
          <li onClick={this.changeClassElement} className="page-item number active" data-value="1" onClick={this.handleNumberClick}><a className="page-link" href="#">1</a></li>
          <li onClick={this.changeClassElement} className="page-item number" onClick={this.handleNumberClick}><a className="page-link" href="#">2</a></li>
          <li onClick={this.changeClassElement} className="page-item number" onClick={this.handleNumberClick}><a className="page-link" href="#">3</a></li>
          <li onClick={this.changeClassElement} className="page-item number" onClick={this.handleNumberClick}><a className="page-link" href="#">4</a></li>
          <li onClick={this.changeClassElement} className="page-item number" onClick={this.handleNumberClick}><a className="page-link" href="#">5</a></li>
          <li onClick={this.changeClassElement} className="page-item number" onClick={this.handleNumberClick}><a className="page-link" href="#">6</a></li>
          <li onClick={this.changeClassElement} className="page-item number" onClick={this.handleNumberClick}><a className="page-link" href="#">7</a></li>
          <li onClick={this.changeClassElement} className="page-item number" onClick={this.handleNumberClick}><a className="page-link" href="#">8</a></li>
          <li onClick={this.changeClassElement} className="page-item number" onClick={this.handleNumberClick}><a className="page-link" href="#">9</a></li>
          <li className="page-item next" onClick={this.handleNextElement} ><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    )
  }
}

export default Pagination
