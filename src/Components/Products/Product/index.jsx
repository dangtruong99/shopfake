import React, { useState } from "react";
import "./style.css";

function Product({ data, onClickBuy }) {
  const [priceProduct, setpriceProduct] = useState(0);

  const increaseProduct = () => {
    setpriceProduct(priceProduct + 1);
  };

  const decreaseProduct = () => {
    setpriceProduct(priceProduct - 1);
  };

  const addToCart = () => {
    onClickBuy(data);
  };

  return (
    <div className="product">
      <img src={data.image} alt="image-product" />
      <span>{data.price} $</span>
      <div className="productDescription">
        <div>{data.name}</div>
        {data.description}
      </div>
      <div className="priceProduct">
        <button
          onClick={decreaseProduct}
          style={{
            margin: "5px",
            borderRadius: "50%",
          }}
        >
          -
        </button>
        <div>{priceProduct}</div>
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
      <button onClick={addToCart}>Mua hàng</button>
      {/* <div>{cart}</div> */}
    </div>
  );
}

export default Product;
