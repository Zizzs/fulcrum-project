import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../App.css";

const Cart = (props) => {
  return (
    <div id="cartDiv">
      {props.cart.map((item, index) => (
        <React.Fragment key={uuidv4()}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Cart;
