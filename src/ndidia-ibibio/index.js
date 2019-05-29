import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './navbar';
import FoodGallery from './food-gallery';
import Food from './food';

export default class NdidiaIbibio extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/" exact component={FoodGallery} />
        <Route path="/:slug" exact component={Food} />
      </Router>
    );
  }
}