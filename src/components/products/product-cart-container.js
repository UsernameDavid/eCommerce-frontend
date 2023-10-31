import React, { Component } from "react";
import axios from "axios";

import ProductCartItem from "./product-cart-item.js";

export default class ProductCartContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Products main page",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getProductItems();
    } else {
      this.getProductItems(filter);
    }
  }

  getProductItems(filter = null) {
    axios
      .get('http://127.0.0.1:5000/product/get')
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.filter(item => {
              return item.category === filter;
            })
          });
        } else {
          this.setState({
            data: response.data
          });       
        }
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

