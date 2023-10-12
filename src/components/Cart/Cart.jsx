import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material'
import { useNavigate } from 'react-router-dom';
const Cart = ({ cart, onUpdateCartQuantity, onRemoveFromCart, onCheckout  }) => {
  if (!cart) {
    return <div>Loading cart...</div>; // Add a loading state or handle the case where cart is undefined
  }
 
  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      {cart.line_items.map((item) => (
        <div key={item.id} className="cart-item">
           
          <h3>{item.name}</h3>
          <p>Price: ${item.price.formatted}</p>
          <p>Quantity: {item.quantity}</p>
          
          <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Items: {cart.total_items}</p>
        <p>Total Price: ${cart.subtotal ? cart.subtotal.formatted : 0}</p> {/* Check if subtotal is defined */}
        {cart.total_items > 0 && ( // Add a conditional check here
    <button onClick={onCheckout}><a href="/checkout">Checkout</a></button> 
  )}
      </div>
    </div>
  );
};

export default Cart;
