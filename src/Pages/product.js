import React, { useContext } from 'react'
import {ShopContext} from '../shop-context'; 

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemamount = cartItems[id]
  return (
    <div className="product">
        <img src={productImage} alt="image" />    
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p> ${price} </p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add to Cart {cartItemamount > 0 && <> ({cartItemamount})</>}</button>
    </div>
  )
}
