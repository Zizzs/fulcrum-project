import React from "react";

function Item(props) {
  return (
    <div class="col s6 m3">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{props.item.name}</span>
          <img
            width="75"
            height="75"
            src={props.item.image}
            alt={props.item.name}
          />
          <p>{props.item.price}</p>
        </div>
        <div class="card-action">
          <i class="small material-icons">add_shopping_cart</i>
        </div>
      </div>
    </div>
  );
}

export default Item;
