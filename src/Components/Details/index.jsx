import React, { useState } from "react";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";

function Details(props) {
  const [numberProduct, setnumberProduct] = useState(0);

  const increaseProduct = () => {
    setnumberProduct(numberProduct + 1);
  };

  const decreaseProduct = () => {
    setnumberProduct(numberProduct - 1);
  };

  const addToCart = () => {
    const nextCart = Array.apply(null, Array(numberProduct)).map(() => ({
      ...props.details,
    }));
    props.onClickBuy(nextCart);
  };
  return (
    <div className="container-description">
      <div className="productDescription">
        <button className="details-btn" onClick={props.showDetails}>
          <AiOutlineClose />
        </button>
        <div>{props.details.name}</div>
        <img src={props.details.image} alt="image-product" />
        <div>{props.details.description}</div>
        <span>{props.details.price} $</span>
        <div className="numberProduct">
          <button
            onClick={decreaseProduct}
            style={{
              margin: "5px",
              borderRadius: "50%",
            }}
          >
            -
          </button>
          <div>{numberProduct}</div>
          <button
            onClick={increaseProduct}
            style={{
              margin: "5px",
              borderRadius: "50%",
            }}
          >
            +
          </button>
        </div>
        <button onClick={addToCart} className="details-btn">
          Mua hàng
        </button>
      </div>
    </div>
  );
}

export default Details;
