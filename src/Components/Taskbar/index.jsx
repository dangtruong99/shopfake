import React from "react";
import "./style.css";
import logo from "../Picture/Logo.png";

function Taskbar(props) {
  const logoutHome = () => {
    props.returnLogin("login");
  };

  return (
    <div className="taskbar">
      <img src={logo} alt="logo" className="logo" />
      <span>SHOP HÀNG GIẢ</span>
      <button className="logout" onClick={logoutHome}>
        Đăng xuất
      </button>
    </div>
  );
}

export default Taskbar;
