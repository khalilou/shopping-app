import React from 'react';
import {ShopContext} from '../shop-context'; 
import { PRODUCTS } from '../products';
import { useContext } from 'react';
import { CartItem } from './cart-item';

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
    </div>
  )
}
