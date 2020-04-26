import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Menu from "./components/MenuComponent";
import { PRODUCTS } from "./shared/products";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="secondary">
          <div className="container">
            <NavbarBrand href="/">Auction-Home</NavbarBrand>
          </div>
        </Navbar>
        <Menu products={PRODUCTS} />
      </div>
    );
  }
}

export default App;
