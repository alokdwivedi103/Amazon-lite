import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";


export const Product = (props) => {
  const { id, productName, price, productImage,productLink} = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  
  const cartItemCount = cartItems[id];
  return (
    <div className="product">
      <a href={productLink}><img className="a" src={productImage} alt=""/></a>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
