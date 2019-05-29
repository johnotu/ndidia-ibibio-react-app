import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const Gallery = props => {
  return (
    <main role="main">
      <div className="container gallery">

        <div className="row">

          {/* <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardImg top width="100%" src="https://i.postimg.cc/jSLKYfHN/mp.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card> */}

          <div className="col-lg-4">


            <Card className="text-center">
              <CardImg top width="100%" src="https://i.postimg.cc/Vk812NFQ/Nigerian-Vegetable-Soup-edit.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle className="font-weight-bold food-red">Edikan Ikong</CardTitle>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Gallery;