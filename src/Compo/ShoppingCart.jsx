import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems(cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);
    setTotalPrice(total);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Qty: 
            <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, e.target.value)} />
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={calculateTotalPrice}>Calculate Total Price</button>
      <button onClick={() => addToCart({ id: 1, name: 'Product1', price: 10 })}>Add Product1</button>
      <button onClick={() => addToCart({ id: 2, name: 'Product2', price: 15 })}>Add Product2</button>
    </div>
  );
};

export default ShoppingCart;
