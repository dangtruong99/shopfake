import React, { useState } from "react";
import "./style.css";

function Product({ data, showDetails }) {
  const onClickDetails = () => {
    showDetails(data);
  };

  return (
    <div className="product">
      <div>{data.name}</div>
      <img src={data.image} alt="image-product" />
      <span>{data.price} $</span>
      <button onClick={onClickDetails} className="details-btn">
        Thông tin
      </button>
    </div>
  );
}

export default Product;
