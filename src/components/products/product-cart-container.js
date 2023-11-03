import React, { Component } from "react";

import ProductCartItem from "./product-cart-item.js";

export default class ProductCartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Products main page",
      isLoading: false,
      arrayOfItems: []
    };

  }

  productItems() {

    return this.props.myCart.map(item => {

      return !this.state.arrayOfItems.includes(item.id) ? 
      (
        this.state.arrayOfItems = this.state.arrayOfItems.concat(item.id),
        <ProductCartItem key={item.id} id={item.id} category={item.category} name={item.name} description={item.description} price={item.price} image={item.image} myCart={this.props.myCart} removefromcart={this.props.removefromcart} />
      )
      : null; 
    });

  }

  componentDidMount() {
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

