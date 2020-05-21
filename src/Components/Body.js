import React from "react";
import Item from "../Components/Item";
import { v4 as uuidv4 } from "uuid";

const Body = (props) => {
  return (
    <div>
      {props.items.map((item, index) => (
        <React.Fragment key={uuidv4()}>
          <Item item={item} index={index} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Body;
