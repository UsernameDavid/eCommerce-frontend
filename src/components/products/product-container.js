import React, { Component } from "react";
import axios from "axios";

import ProductItem from "./product-item";

export default class PortfolioContainer extends Component {
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
      return <ProductItem key={item.id} id={item.id} category={item.category} name={item.name} description={item.description} price={item.price} image={item.image} />;
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
        <div className="homepage-wrapper">
          <div className="filter-links">
            <button
              className="btn"
              onClick={() => this.handleFilter("Beauty & Personal Care")}
            >
              Beauty & Personal Care
            </button>
            <button
              className="btn"
              onClick={() => this.handleFilter("Home & Kitchen")}
            >
              Home & Kitchen
            </button>
            <button
              className="btn"
              onClick={() => this.handleFilter("Automotive")}
            >
              Automotive
            </button>
            <button
              className="btn"
              onClick={() => this.handleFilter("Clothing, Shoes & Jewelry")}
            >
              Clothing, Shoes & Jewelry
            </button>
            <button
              className="btn"
              onClick={() => this.handleFilter("Electronics")}
            >
              Electronics
            </button>
            <button
              className="btn"
              onClick={() => this.handleFilter("Appliances")}
            >
              Appliances
            </button>
            <button
              className="btn"
              onClick={() => this.handleFilter("CLEAR_FILTERS")}
            >
              All
            </button>
          </div>
        </div>
        <div className="products-item-wrapper">{this.productItems()}</div>
      </div>
    );
  }
}

