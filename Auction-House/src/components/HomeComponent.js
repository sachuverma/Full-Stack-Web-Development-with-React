import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Home extends Component {
  render() {
    const allitems = this.props.products.map((product) => {
      return (
        <div key={product.id} className="col-12 col-md-4 mt-4">
          <Card>
            <CardImg width="100%" src={product.image} alt={product.name} />
            <CardImgOverlay body className="ml-5">
              <CardTitle heading>{product.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    console.log("menu component render ran");

    return (
      <div className="container">
        <div className="row">{allitems}</div>
      </div>
    );
  }
}

export default Home;
