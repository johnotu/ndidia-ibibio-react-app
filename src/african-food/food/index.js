import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const Food = props => {
  const food = props.food.find(food => food._id === props.match.params.id);
  return (
    <div className="container-fluid page-content">
      <div className="row">
        <div className="mx-auto food-card">
          <Card className="text-center">
            <CardImg top width="100%" src="https://i.postimg.cc/Vk812NFQ/Nigerian-Vegetable-Soup-edit.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle className="font-weight-bold food-red">{food.name}</CardTitle>
              <CardSubtitle>{food.rating} stars</CardSubtitle>
              <CardText>{food.description}</CardText>
            </CardBody>
          </Card>
          <div className="mt-4">
            <h4>Recipe</h4>
            <p>{food.recipe}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;