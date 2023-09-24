import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState } from "react";
import Items from "./components/Items";
import { ShopContext } from "./components/ShopContext";
import { itemList } from './components/ItemList';

function App() {

const [orders, setOrders] = useState([])

function deleteOrder(id){
  setOrders(orders.filter(el=> el.id !== id ))
}

function  addToOrder(item){
  const isDuplicate = orders.find(order => order.id === item.id);
  if (!isDuplicate) {
    setOrders([...orders, item])
  }
}

const printItems = () => {
  console.warn(itemList);
}

  return (
    <ShopContext.Provider value={{
      deleteOrder, addToOrder, printItems
    }}>
      <div className="wrapper">
        <Header orders={orders} />
        <Items items={itemList} />
        <Footer />
      </div>
    </ShopContext.Provider>
  );
}

export default App;
