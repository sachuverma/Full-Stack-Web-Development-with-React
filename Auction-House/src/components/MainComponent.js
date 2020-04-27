import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { PRODUCTS } from "../shared/products";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/home"
            component={() => <Home products={this.state.products} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
