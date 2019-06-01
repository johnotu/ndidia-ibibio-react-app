import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './navbar';
import FoodGallery from './food-gallery';
import Food from './food';

export default class AfricanFood extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/" exact component={FoodGallery} />
        <Route path="/:id" exact component={Food} />
      </Router>
    );
  }
}