import React, { useState } from "react";
import "./style.css";
import phone from "../Picture/picturephone.jpg";
import tv from "../Picture/picturetv.jpg";
import pc from "../Picture/picturepc.jpg";
import laptop from "../Picture/picturelaptop.jpg";
import macbook from "../Picture/picturemacbook.jpg";
import keyboardandmouse from "../Picture/picturekeyboardandmouse.jpg";
import ipad from "../Picture/pictureipad.jpg";
import fridge from "../Picture/picturefrigde.jpg";
import freezer from "../Picture/picturefreezer.jpg";
// import Product from "./components/Product";
import Product from "./Product/index";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import Footer from "../Footer";

function Products(props) {
  const [products, setProducts] = useState([
    {
      name: "Phone",
      image: phone,
      price: "15000",
      description: "Đây là điện thoại và chỗ để thông tin điện thoại",
    },
    {
      name: "TV",
      image: tv,
      price: "32000",
      description: "Đây là Ti vi và chỗ để thông tin ti vi",
    },
    {
      name: "PC",
      image: pc,
      price: "28000",
      description: "Đây là máy vi tính và chỗ để thông tin máy vi tính",
    },
    {
      name: "Laptop",
      image: laptop,
      price: "29000",
      description:
        "Đây là máy tính xách tay và chỗ để thông tin máy tính xách tay",
    },
    {
      name: "Macbook",
      image: macbook,
      price: "25000",
      description: "Đây là Macbook và chỗ để thông tin Macbook",
    },
    {
      name: "Bàn phím và chuột",
      image: keyboardandmouse,
      price: "10000",
      description:
        "Đây là bàn phím và chuột và chỗ để thông tin bàn phím và chuột",
    },
    {
      name: "Ipad",
      image: ipad,
      price: "20000",
      description: "Đây là Ipad và chỗ để thông tin Ipad",
    },
    {
      name: "Frigde",
      image: fridge,
      price: "42000",
      description: "Đây là tủ lạnh và chỗ để thông tin tủ lạnh",
    },
    {
      name: "Freezer",
      image: freezer,
      price: "40000",
      description: "Đây là máy lạnh và chỗ để thông tin máy lạnh",
    },
  ]);

  const [search, setSearch] = useState("");

  const searchProductName = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <AiOutlineSearch />
      <input
        type="text"
        placeholder="Tìm kiếm tên sản phẩm"
        value={search}
        onChange={searchProductName}
        style={{
          border: "none",
        }}
      />
      <BsCart4
        onClick={props.onClickCart}
        className="page-btn"
        style={{
          fontSize: "25px",
        }}
      />
      <div className="products">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <Product
              data={product}
              onClickBuy={props.onClickBuy}
            />
          ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Products;
