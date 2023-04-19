import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
      <div className = "cart">
        <div className="a">
          <h1>Your Cart Items</h1>
          </div>
        <div className="cart">
          {/*eslint-disable-next-line*/}
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Total Amount: ${totalAmount} </p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button
              onClick={() => {
                checkout();
                navigate("/");
              }}
            >
              {" "}
              Checkout{" "}
            </button>
          </div>
        ) : (
          <h1 className="a"> Your Shopping Cart is Empty</h1>
        )}
      </div>
  );
};
