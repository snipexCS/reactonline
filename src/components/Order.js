import React, { Component } from "react";
import { AiFillDelete } from "react-icons/ai";

// export class Order extends Component {
//   render() {
//     return (
//       <d.propiv className="item">
//       <img src={"./img/" + this.props.item.img} />
//       <h2>{thiss.item.title} </h2>
//       <b>{this.props.item.price}$ </b>
//     </div>
//     )
//   }
// }

// export default Order



function Order(props) {
 

  return (
    <div className="item">
      <img src={"./img/" + props.item.img} />
      <h2>{props.item.title} </h2>
      <b>{props.item.price}$ </b>
      <AiFillDelete className="delete-icon" onClick={()=>props.onDelete(props.item.id)} />
    </div>
  );
}
export default Order;
