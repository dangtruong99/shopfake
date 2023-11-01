import React, { useState } from "react";
import "./style.css";
import { useEffect } from "react";
function Product({ data }) {
  const [priceProduct, setpriceProduct] = useState(0);
  const [cart, setCart] = useState(0);

  const increaseProduct = () => {
    setpriceProduct(priceProduct + 1);
  };

  const decreaseProduct = () => {
    setpriceProduct(priceProduct - 1);
  };

  useEffect(() => {}, [cart]);

  const buyProductInCart = () => {
    const nextCart = priceProduct * data.price;
    setCart(nextCart);
    console.log(cart);
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
      <button onClick={buyProductInCart}>Mua hàng</button>
    </div>
  );
}

export default Product;
