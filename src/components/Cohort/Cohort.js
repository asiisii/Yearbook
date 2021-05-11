import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE
function Cohort(props) {
  return (
      <article className="card">
        <img src={props.photo}/>    
        <h1 className="name">{props.name}</h1>
        <p className="quote">{props.quote}</p>
        <p className="superlative">{props.superlative}</p>
      </article> 
  )
}

export default Cohort;
