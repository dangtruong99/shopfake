import React, { useState } from "react";
import "./style.css";
import footerpicture from "../Picture/Iconfooterpicture.jpg";
function Footer() {
  const [footer, setFooter] = useState([
    "Liên hệ với chúng tôi",
    "Hỗ trợ khách hàng",
    "Thông tin về chúng tôi",
  ]);
  return (
    <div className="footer">
      <img src={footerpicture} alt="" />
      {footer.map((f) => {
        return <div>{f}</div>;
      })}
    </div>
  );
}

export default Footer;
