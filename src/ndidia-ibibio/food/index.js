import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const Food = props => {
  console.log('props', props);
  return (
    <div className="container-fluid page-content">
      <div className="row">
        <div className="mx-auto food-card">
          <Card className="text-center">
            <CardImg top width="100%" src="https://i.postimg.cc/Vk812NFQ/Nigerian-Vegetable-Soup-edit.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle className="font-weight-bold food-red">Edikan Ikong</CardTitle>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Food;