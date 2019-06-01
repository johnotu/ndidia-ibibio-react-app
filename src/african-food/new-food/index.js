import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class NewFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      image: "",
      recipe: "",
      rating: 0
    }
  }

  render() {
    return (
      <div className="container page-content">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter name of food" />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="text" name="description" id="description" placeholder="Enter food description" />
        </FormGroup>
      </div>
    );
  }  
}