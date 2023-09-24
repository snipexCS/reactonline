import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Order from "./Order";

function CartItems(props) {

  const [ sum, setSum ] = useState(0);

  useEffect(() => {
    const orderSum = props.orders.reduce((prev, curr) => {
      return prev + Number.parseFloat(curr.price);
    }, 0);
    setSum(orderSum);
  }, [props.orders])


  const ShowNothing = () => {
    return (
      <div className="empty">
        <h2>Нет товаров</h2>
      </div>
    );
  };

  return (
    <div className="shop-cart">
      {props.orders.map((el) => <Order key={el.id} item={el} />)}
      {sum > 0 && <p className="summa"> Сумма :{sum} $</p>}
      {!props.orders.length && <ShowNothing />}
    </div>
  )
}

export default function Header(props) {
  const [cartIsOpen, setCartOpen] = useState(false);

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
          onClick={() => setCartOpen(!cartIsOpen)}
          className={`shop-cart-button ${cartIsOpen && "active"}`}
        />
        { cartIsOpen ? <CartItems orders={props.orders} /> : <></> }
      </div>
      <div className="presentation"></div>
    </header>
  );
}
