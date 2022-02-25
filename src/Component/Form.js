import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    dept: '',
    rating: '',
    user: [],
  };

  HandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  HandleSubmit = (event) => {
    event.preventDefault();

    const tempObj = {
      name: this.state.name,
      dept: this.state.dept,
      rating: this.state.rating,
    };

    const tempArr = this.state.user;
    tempArr.push(tempObj);
    this.setState({ user: tempArr });
  };

  render() {
    console.log(this.state.user, 'USER');
    return (
      <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form>
          <label htmlFor=''>Name:</label>
          <input
            type='text'
            name='name'
            id='name'
            value={this.state.name}
            onChange={this.HandleChange}
          />
          <br />
          <label htmlFor=''>Department:</label>
          <input
            type='text'
            name='dept'
            id='dept'
            value={this.state.dept}
            onChange={this.HandleChange}
          />
          <br />
          <label htmlFor=''>Rating: </label>
          <input
            type='text'
            name='rating'
            id='rating'
            value={this.state.rating}
            onChange={this.HandleChange}
          />
          <br />
          <button onClick={this.HandleSubmit}>Submit</button>
        </form>
        <div className='infodisplay'>
          {this.state.user.map((value) => {
            return (
              <div className='detailbox'>
                Name : {value.name} || Department : {value.dept} || Rating:
                {value.rating}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Form;
