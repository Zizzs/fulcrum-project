import React from "react";

function Item(props) {
  return (
    <div>
      <p>{props.item.name}</p>
      <img src={props.item.image} alt={props.item.name} />
      <p>{props.item.price}</p>
      <button>Add To Cart</button>
    </div>
  );
}

export default Item;
