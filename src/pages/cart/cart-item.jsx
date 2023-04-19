import React, { useContext,useRef } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  const inputref = useRef(null);

  return (
    <div className="cartItem">
      <img src={productImage} alt="image1"/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button className="bt" onClick={() => removeFromCart(id)}> - </button>
          <input
            ref = {inputref}
            value={cartItems[id]}
            onChange={(e) => {
              updateCartItemCount(Number(e.target.value), id)}}
          />
          <button className="bt" onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};