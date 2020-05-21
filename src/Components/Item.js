import React from "react";

function Item(props) {
  return (
    <div>
      <p>{props.item.name}</p>
      <img src={props.item.image} alt={props.item.name} />
      <p>{props.item.price}</p>
      <i class="small material-icons">add_shopping_cart</i>
    </div>
  );
}

export default Item;
