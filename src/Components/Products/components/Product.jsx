import React from 'react'
import "./style.css";

const Product = ({ data, /** truyền thêm props.onChange(price) */ }) => {
    // Tạo state để tăng giảm trong này

    return (
      <div className="product">
        <span>{data.name}</span>
        <img src={data.image} alt="image-product" />
        <span>{data.price} $</span>
        <span>{data.description}</span>
        <div className="priceProducts">
          <button
            onClick={decreaseProduct}
            style={{
              margin: "5px",
              borderRadius: "50%",
            }}
          >
            -
          </button>
          <div>{priceProducts}</div>
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
    );
}

export default Product