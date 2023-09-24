import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ShopContext } from "./ShopContext";

function Order(props) {

  const context = useContext(ShopContext);
 
  return (
    <div className="item">
      <img src={"./img/" + props.item.img} alt={props.item.id} />
      <h2>{props.item.title} </h2>
      <b>{props.item.price}$ </b>
      <AiFillDelete className="delete-icon" onClick={()=>context.deleteOrder(props.item.id)} />
    </div>
  );
}
export default Order;
