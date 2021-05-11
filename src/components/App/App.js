import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
    // this.getData = this.getData.bind(this)
  }

  getData(dataType) {
    return this.state[dataType].map(person => 
      <Cohort 
        key={person.id}
        name={person.name}
        quote={person.quote}
        superlative={person.superlative}
        photo={person.photo}
      />)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
        </header>
        <h2>Staff</h2>
        <div className="container">
          {this.getData('staff')}
          {/* {this.getData('students')} */}
        </div>
        <h2>Students</h2>
        <div className="container">
          {/* {this.getData('staff')} */}
          {this.getData('students')}
        </div>
      </div>
    );
  }
}

export default App;
