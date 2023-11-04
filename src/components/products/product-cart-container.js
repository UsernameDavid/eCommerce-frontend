import React, { Component } from "react";

import ProductCartItem from "./product-cart-item.js";

export default class ProductCartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Products main page",
      isLoading: false,
      arrayOfItems: []
      //      arrayOfItems: this.props.myCart.filter(item => this.props.myCart.filter(x => x.id === item.id).length > 1)

    };

    this.productCartItems = this.productCartItems.bind(this);

  }

  productCartItems() {

    return this.props.myCart.map((item, index) => {
      
      
      return !this.state.arrayOfItems.includes(item.id) ? 
      (
      <ProductCartItem key={index} id={item.id} category={item.category} name={item.name} description={item.description} price={item.price} image={item.image} myCart={this.props.myCart} removefromcart={this.props.removefromcart} productCartItems={this.productCartItems} getTotal={this.props.getTotal} />

      //can't render and update state at the same moment as it produces errors (re-render)
      /*this.setState ((state, props) => {
        arrayOfItems: state.arrayOfItems.concat(item.id)
      })*/       

      )
      : null; 
    });

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
