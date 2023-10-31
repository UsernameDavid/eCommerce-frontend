import React, { Component } from "react";
import axios from "axios";

import ProductCartItem from "./product-cart-item.js";

export default class ProductCartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Products main page",
      isLoading: false,
      data: [],
      length: 0
    };

  }

  getProductItems() {
    axios
      .get('http://127.0.0.1:5000/product/get')
      .then(response => {
        this.setState({length: response.data.length})
        console.log("length", this.state.length)
        this.setState({
          data: response.data
        });       
      })
      .catch(error => {
        console.log("error al obtener respuesta", error);
      });
  }

  productItems() {
    return this.state.data.map(item => {
      return <ProductCartItem key={item.id} id={item.id} category={item.category} name={item.name} description={item.description} price={item.price} image={item.image} />;
    });
  }

  componentDidMount() {
    this.getProductItems();
  }

  render() {
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

