import React, { Component } from "react";
import axios from "axios";

import ProductCartItem from "./product-cart-item.js";

export default class ProductCartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Products main page",
      isLoading: false,
      data: this.props.myCart
    };

  }

  productItems() {
    return this.state.data.map(item => {
      return <ProductCartItem key={item.id} id={item.id} category={item.category} name={item.name} description={item.description} price={item.price} image={item.image} myCart={this.props.myCart} />;
    });
  }

  componentDidMount() {
    this.data = this.props.data
    console.log("datos iniciales cart container", this.props.data)
    this.productItems();

  }

  render() {
    const { myCart } = this.props;
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="products-item-wrapper">{this.productItems()}</div>
      </div>
    );
  }
}

