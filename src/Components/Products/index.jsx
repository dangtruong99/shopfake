import React, { useState } from "react";
import "./style.css";
import phone from "../Picture/picturephone.jpg";
import tv from "../Picture/picturetv.jpg";
import pc from "../Picture/picturepc.jpg";
import laptop from "../Picture/picturelaptop.jpg";
import macbook from "../Picture/picturemacbook.jpg";
import keyboardandmouse from "../Picture/picturekeyboardandmouse.jpg";
import ipad from "../Picture/pictureipad.jpg";
import Product from "./components/Product";

function Products() {
  const [products, setProducts] = useState([
    {
      name: "Phone",
      image: phone,
      price: "15000",
      description: "Đây là điện thoại",
    },
    {
      name: "TV",
      image: tv,
      price: "32000",
      description: "Đây là Ti vi",
    },
    {
      name: "PC",
      image: pc,
      price: "28000",
      description: "Đây là máy vi tính",
    },
    {
      name: "Laptop",
      image: laptop,
      price: "29000",
      description: "Đây là vi tính xách tay",
    },
    {
      name: "Macbook",
      image: macbook,
      price: "25000",
      description: "Đây là Macbook",
    },
    {
      name: "Bàn phím và chuột",
      image: keyboardandmouse,
      price: "10000",
      description: "Đây là bàn phím và chuột",
    },
    {
      name: "Ipad",
      image: ipad,
      price: "20000",
      description: "Đây là Ipad",
    },
  ]);
  const [priceProducts, setPriceProducts] = useState(0);

  const [search, setSearch] = useState("");

  const searchProductName = (event) => {
    setSearch(event.target.value);
  };

  const increaseProduct = () => {
    setPriceProducts(priceProducts + 1);
  };

  const decreaseProduct = () => {
    setPriceProducts(priceProducts - 1);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm tên sản phẩm"
        value={search}
        onChange={searchProductName}
      />
      <div className="products">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => <Product data={product} /** props.onChange cần thì thêm ở đây *//>)}
      </div>
    </div>
  );
}

export default Products;
