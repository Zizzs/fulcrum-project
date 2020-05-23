import React, { Component } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Book",
          price: "12.49",
          taxed: false,
          import: false,
          image:
            "https://images.freeimages.com/images/large-previews/f7d/book-1179516.jpg",
        },
        {
          name: "Music CD",
          price: "14.99",
          taxed: true,
          import: false,
          image:
            "https://images.freeimages.com/images/large-previews/976/compact-disk-1242785.jpg",
        },
        {
          name: "Chocolate Bar",
          price: "0.85",
          taxed: false,
          import: false,
          image:
            "https://images.freeimages.com/images/large-previews/cb6/chocolate-1322112.jpg",
        },
        {
          name: "Packet of Headache Pills",
          price: "9.75",
          taxed: false,
          import: false,
          image:
            "https://images.freeimages.com/images/large-previews/154/pills-1421720.jpg",
        },
        {
          name: "Imported Box of Chocolates",
          price: "10.00",
          taxed: false,
          import: true,
          image:
            "https://images.freeimages.com/images/large-previews/b39/chocolates-1186984.jpg",
        },
        {
          name: "Imported Box of Chocolates",
          price: "11.25",
          taxed: false,
          import: true,
          image:
            "https://images.freeimages.com/images/large-previews/b39/chocolates-1186984.jpg",
        },
        {
          name: "Bottle of Perfume",
          price: "18.99",
          taxed: true,
          import: false,
          image:
            "https://images.freeimages.com/images/large-previews/6d0/perfume-1560440.jpg",
        },
        {
          name: "Imported Bottle of Perfume",
          price: "47.50",
          taxed: true,
          import: true,
          image:
            "https://images.freeimages.com/images/large-previews/6d0/perfume-1560440.jpg",
        },
        {
          name: "Imported Bottle of Perfume",
          price: "27.99",
          taxed: true,
          import: true,
          image:
            "https://images.freeimages.com/images/large-previews/6d0/perfume-1560440.jpg",
        },
      ],
      cart: [],
    };
  }

  addItemToCart = (e, item) => {
    e.preventDefault();
    let currentCart = this.state.cart;
    currentCart.push(item);
    this.setState({ cart: currentCart });
    //console.log(this.state.cart);
  };

  render() {
    return (
      <div>
        <Header cart={this.state.cart} />
        <Body addItemToCart={this.addItemToCart} items={this.state.items} />
      </div>
    );
  }
}

export default App;
