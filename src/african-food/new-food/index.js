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
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
      </div>
    );
  }  
}