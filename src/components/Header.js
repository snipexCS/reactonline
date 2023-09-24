import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Order from "./Order";

const showOrders = (props) => {
  let sum = 0;

  props.orders.forEach((el) => {
    sum += Number.parseFloat(el.price);
  });

  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}

      <p className="summa"> Сумма :{sum} $</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Нет товаров</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">Dilshod</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <AiOutlineShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
