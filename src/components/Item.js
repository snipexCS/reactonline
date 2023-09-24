import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";


// export default Item
function Item(props) {

  const context = useContext(ShopContext);

  return (
    <div className="item">
      <img src={"./img/" + props.item.img} alt={props.item.id} />
      <h2>{props.item.title} </h2>
      <p>{props.item.desc} </p>
      <b>{props.item.price}$ </b>
      <div className="add-to-cart" onClick={() => {
        context.addToOrder(props.item);
        context.printItems();
      }}>
        +
      </div>
    </div>
  );
}
export default Item;
