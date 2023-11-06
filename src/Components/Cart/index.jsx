import React, { useState } from "react";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";

function Cart(props) {
  const deleteProductInCart = (item) => () => {
    props.onClickRemove(item);
  };
  return (
    <div className="cart-container">
      <div>
        <button onClick={props.returnProductScreen}>
          <AiOutlineClose />
        </button>
      </div>

      {
        /** map ra danh sách product trong giỏ hàng tại đây ... */
        props.cart.map((item, index) => {
          return (
            <div className="cart-item" key={index}>
              <div>Tên mặt hàng: {item.name}</div>
              <div>Giá tiền: {item.price}</div>
              <button
                style={{ borderRadius: 20 }}
                onClick={deleteProductInCart(item)}
              >
                -
              </button>
            </div>
          );
        })
      }
    </div>
  );
}

export default Cart;
