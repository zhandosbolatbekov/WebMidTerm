import React, { Component } from 'react';
import './App.css';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.selected = 0;
    }
}

class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productList: [
              new Product('Milk', 300, 0),
              new Product('Bread', 100, 0),
              new Product('Icecream', 150, 0),
              new Product('Candy', 200, 0),
            ],
            total: 0,
        };
    }

    onClick(index) {

      var newProductList = [];
      var newTotal = 0;

      for(var i = 0; i < this.state.productList.length; ++i) {
        let product = this.state.productList[i];
        if(i === index) {
          if(product.selected) {
            product.selected = 0;
          } else {
            product.selected = 1;
          }
        } 
        newProductList.push(product);
        if(product.selected)
          newTotal += product.price;

      }

      this.setState({
        productList: newProductList,
        total: newTotal,
      });
    }

    renderButton(product, index) {
      if(this.state.productList[index].selected) {
        return (
          <button className="selected" onClick={() => this.onClick(index)}>{product.name} {product.price} tg</button>
        );
      } else {
        return (
          <button className="not_selected" onClick={() => this.onClick(index)}>{product.name} {product.price} tg</button>
        );
      }
    }

    render() {
        return (
            <div className="root_div">
                <div>
                    <il>{
                            this.state.productList.map((product, index) => 
                              this.renderButton(product, index),
                            )
                    }</il>
                </div>
                <label>{this.state.total}</label>
            </div>
        );
    }
}

export default Products;
