import React, { useEffect, useState } from "react";
import "./style.css";
import Taskbar from "../Taskbar";

function User(props) {
  const [newItem, setNewItem] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [date, setDate] = useState("");
  const [buttonBackToTop, setButtonBackToTop] = useState(false);

  const nameItem = (event) => {
    setName(event.target.value);
  };

  const priceItem = (event) => {
    setPrice(event.target.value);
  };

  const descriptionItem = (event) => {
    setDescription(event.target.value);
  };

  const dateItem = (event) => {
    setDate(event.target.value);
  };

  const addItemInCart = () => {
    const nextItem = [...newItem];
    nextItem.push({
      id: Date.now(),
      name: name,
      price: price,
      description: description,
      image: image,
      date: date,
    });
    setNewItem(nextItem);
    setName("");
    setPrice("");
    setDescription("");
    setImage();
  };

  const deleteItemInCart = (id) => {
    return () => {
      const nextItem = [...newItem];
      const index = nextItem.findIndex((item) => item.id === id);
      nextItem.splice(index, 1);
      setNewItem(nextItem);
    };
  };

  const previewItem = (event) => {
    const file = event.target.files[0];

    file.previewItem = URL.createObjectURL(file);

    setImage(file);
    // event.target.files = [];
  };

  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.previewItem);
    };
  }, []);

  useEffect(() => {
    const scrollToTop = () => {
      if (window.scrollY >= 100) {
        setButtonBackToTop(true);
      } else {
        setButtonBackToTop(false);
      }
    };

    window.addEventListener("scroll", scrollToTop);
    return () => {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Taskbar returnLogin={props.logout} />
      <div className="container-user">
        Tên mặt hàng: <input type="text" onChange={nameItem} value={name} />
        <input type="file" onChange={previewItem} />
        Giá tiền: <input type="number" onChange={priceItem} value={price} />
        Thông tin:
        <input type="text" onChange={descriptionItem} value={description} />
        Ngày đăng: <input type="date" onChange={dateItem} value={date} />
        <button onClick={addItemInCart}>Thêm mặt hàng</button>
      </div>
      <div className="item-shop">
        <span> Tên mặt hàng</span>
        <span> Hình ảnh</span>
        <span> Giá tiền</span>
        <span> Thông tin</span>
        <span> Ngày đăng</span>
        <span> Trạng thái</span>
      </div>

      {newItem.map((item) => (
        <div className="item-shop">
          <span> {item.name}</span>
          {item.image && <img src={item.image.previewItem} alt="avatar" />}
          <span> {item.price}</span>
          <span> {item.description}</span>
          <span>{item.date}</span>
          <span>
            <button onClick={deleteItemInCart(item.id)}>Xoá</button>
          </span>
        </div>
      ))}
      {buttonBackToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
            padding: 15,
          }}
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
}

export default User;
