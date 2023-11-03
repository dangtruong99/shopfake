import React, { useState } from "react";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";

function Cart(props) {
  const [listItems, setListItems] = useState(props.cart);

  const deleteProductInCart = () => {
    const index = listItems.findIndex((product) => product === props.cart.name);
    const nextProduct = [...listItems];
    nextProduct.splice(index, 1);
    setListItems(nextProduct);
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
        listItems.map((item, index) => {
          return (
            <div className="cart-item" key={index}>
              <div>Tên mặt hàng: {item.name}</div>
              <div>Giá tiền: {item.price}</div>
              <div>Số lượng: </div>
              <div>Tổng cộng:</div>
              <button
                style={{ borderRadius: 20 }}
                onClick={deleteProductInCart}
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
