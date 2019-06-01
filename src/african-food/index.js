import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './navbar';
import FoodGallery from './food-gallery';
import Food from './food';

export default class AfricanFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: null
    }
  }

  componentDidMount() {
    if (!this.state.food) {
      axios.get(`${process.env.REACT_APP_API_BASE_URL}/food`)
        .then(result => this.setState({ food: result.data.food }))
      .catch(error => console.log('Error obtaining food record from API', error))
    }
  }


  render() {
    const { food } = this.state;

    if (!food) {
      return (
        <div className="page-content">
          <h3>Getting food records...</h3>
        </div>
      )
    }
    return (
      <Router>
        <NavBar />
        <Route path="/" exact render={props => <FoodGallery food={food} />} />
        <Route path="/:id" render={props => <Food {...props} food={food} />} />
      </Router>
    );
  }
}