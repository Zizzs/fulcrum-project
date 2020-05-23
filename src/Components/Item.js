import React from "react";
import "../App.css";

function Item(props) {
  return (
    <div className="col s12 m3 text-center">
      <div className="card">
        <div className="card-image">
          <img
            style={{
              height: 125,
              width: 125,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src={props.item.image}
            alt={props.item.name}
          />
        </div>
        <div className="card-content">
          <span
            style={{ fontWeight: "bold", fontSize: 18 }}
            className="card-title"
          >
            {props.item.name}
          </span>
          <p>${props.item.price}</p>
        </div>
        <div className="card-action">
          <i
            style={{ cursor: "pointer" }}
            onClick={(e) => props.addItemToCart(e, props.item)}
            className="small material-icons buyButton"
          >
            add_shopping_cart
          </i>
        </div>
      </div>
    </div>
  );
}

export default Item;
