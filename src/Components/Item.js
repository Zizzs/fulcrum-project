import React from "react";

function Item(props) {
  return (
    <div className="col s6 m3">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.item.name}</span>
          <img
            width="75"
            height="75"
            src={props.item.image}
            alt={props.item.name}
          />
          <p>{props.item.price}</p>
        </div>
        <div className="card-action">
          <i
            onClick={(e) => props.addItemToCart(e, props.item)}
            className="small material-icons"
          >
            add_shopping_cart
          </i>
        </div>
      </div>
    </div>
  );
}

export default Item;
