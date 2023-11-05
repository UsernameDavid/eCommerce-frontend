import React, { Component } from "react";

import ProductCartItem from "./product-cart-item.js";

export default class ProductCartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Products main page",
      isLoading: false
    };

    this.productCartItems = this.productCartItems.bind(this);

  }

  productCartItems() {
    return this.props.myCart.map((item, index) => {
      return <ProductCartItem key={index} id={item.id} category={item.category} name={item.name} description={item.description} price={item.price} image={item.image} myCart={this.props.myCart} removefromcart={this.props.removefromcart} productCartItems={this.productCartItems} getTotal={this.props.getTotal} />
    })
  }

  componentDidMount() {
    this.productCartItems();
  }

  render() {
    const { myCart } = this.props;
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="products-item-wrapper">{this.productCartItems()}</div>
      </div>
    );
  }
}
