import React, { Component } from "react";
import M from "materialize-css";
import Cart from "./Cart.js";
import "../App.css";

class Header extends Component {
  componentDidMount() {
    let element = document.querySelectorAll(".dropdown-trigger");
    let options = {
      alignment: "right",
      inDuration: 500,
      outDuration: 225,
    };
    M.Dropdown.init(element, options);
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper cyan lighten-2">
            <p id="headerLogo" className="brand-logo">
              Shopping Website
            </p>
            <ul id="nav-mobile" className="right">
              <li>
                <a className="dropdown-trigger" data-target="cartDropdown">
                  <i style={{ marginLeft: 25 }} className="right">
                    {this.props.cart.length}
                  </i>
                  <i className="material-icons">shopping_cart</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div id="cartDropdown" className="dropdown-content">
          <Cart cart={this.props.cart} />
        </div>
      </div>
    );
  }
}

export default Header;
