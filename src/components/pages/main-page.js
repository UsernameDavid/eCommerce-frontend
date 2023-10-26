// ver vídeo https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/basic-route-setup-react
import React, { Component } from "react";
import Product from "../products/product";


const Main = (props) => {
  return (
    <div>
      <div className='products-item-wrapper'>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
          </div>
    </div>
  )
};

export default Main;
