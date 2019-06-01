import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const FoodGallery = props => {
  const { food } = props;
  return (
    <main role="main">
      <div className="container page-content">

        <div className="row">
          
          {
            food.map(food => (
              <div className="col-lg-4" key={food._id}>

                <Link to={`/food/${food._id}`}>
                  <Card className="text-center">
                    <CardImg top width="100%" src={food.image} alt="Card image cap" />
                    <CardBody>
                      <CardTitle className="font-weight-bold text-decoration-none">{food.name}</CardTitle>
                      <CardSubtitle>{food.rating} stars</CardSubtitle>
                      <CardText>{food.description}</CardText>
                    </CardBody>
                  </Card>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  );
}

export default FoodGallery;