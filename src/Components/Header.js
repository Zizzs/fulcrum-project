import React from "react";

const Header = (props) => {
  return (
    <nav>
      <div className="nav-wrapper cyan lighten-2">
        <a className="brand-logo">Shopping Website</a>
        <ul id="nav-mobile" className="right">
          <li>
            <a>
              <i style={{ marginLeft: 25 }} className="right">
                {props.cart.length}
              </i>
              <i className="material-icons">shopping_cart</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
