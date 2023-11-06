import React, { useState } from "react";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";

function Product({ data, onClickBuy }) {
  const [numberProduct, setnumberProduct] = useState(0);
  const [details, setDetails] = useState(true);

  const increaseProduct = () => {
    setnumberProduct(numberProduct + 1);
  };

  const decreaseProduct = () => {
    setnumberProduct(numberProduct - 1);
  };

  const addToCart = () => {
    const nextCart = Array.apply(null, Array(numberProduct)).map(() => ({
      ...data,
    }));
    onClickBuy(nextCart);
  };

  const showDetails = () => {
    setDetails(!details);
  };

  return (
    <div className="product">
      <div>{data.name}</div>
      <img src={data.image} alt="image-product" />
      <span>{data.price} $</span>

      {details ? (
        <button onClick={showDetails} className="details-btn">
          Thông tin
        </button>
      ) : (
        <div className="productDescription">
          <button onClick={showDetails} className="details-btn">
            <AiOutlineClose />
          </button>
          {data.description}
          <button onClick={addToCart} className="details-btn">
            Mua hàng
          </button>
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
        </div>
      )}
    </div>
  );
}

export default Product;
