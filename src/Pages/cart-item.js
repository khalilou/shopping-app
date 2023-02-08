import React from 'react';
import { useContext, useEffect } from 'react';
import {ShopContext} from '../shop-context'; 

export const CartItem = (props) => {

    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    const { id, productName, price, productImage } = props.data;
    useEffect(() => {
      addToCart(id)
      removeFromCart(id)
    }, []);
  return (
    <div className="CartItem">
        <img src={productImage} alt="" />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p> 
            <p>${price}</p>
            <div className="counthandler">
              <button onClick={() => () => addToCart(id)}>+</button>
              <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
              <button onClick={() => removeFromCart(id)}>-</button>
            </div>
        </div>
    </div>
  )
}
