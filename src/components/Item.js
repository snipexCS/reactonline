import React, { Component } from "react";

// export class Item extends Component {
//   render() {
//     return (
//       <div className='item'>
//         <img src={'./img/' + this.props.item.img} />
// <h2>{this.props.item.title} </h2>
// <p>{this.props.item.desc} </p>
// <b>{this.props.item.price}$ </b>
// <div className='add-to-cart' onClick={()=> this.props.onAdd(this.props.item)}>+</div>

//       </div>
//     )
//   }
// }

// export default Item
function Item(props) {
  return (
    <div className="item">
      <img src={"./img/" + props.item.img} />
      <h2>{props.item.title} </h2>
      <p>{props.item.desc} </p>
      <b>{props.item.price}$ </b>
      <div className="add-to-cart" onClick={() => props.onAdd(props.item)}>
        +
      </div>
    </div>
  );
}
export default Item;
