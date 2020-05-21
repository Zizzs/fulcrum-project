import React from "react";

const Header = (props) => {
  return (
    <nav>
      <div class="nav-wrapper cyan lighten-2">
        <a class="brand-logo">Shopping Website</a>
        <ul id="nav-mobile" class="right">
          <li>
            <a>
              <i class="material-icons">shopping_cart</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
