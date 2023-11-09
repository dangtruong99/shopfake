import React from "react";
import "./style.css";
import { useState } from "react";
// import { BsEyeFill } from "react-icons/bs";
// import { BsEyeSlash } from "react-icons/bs";
import Password from "./Password";

/**
 * ** Lúc nào cần tách Component_Con:
 * 1. [Để dễ đọc & Để tối ưu hiệu suất] Xử lý những khối Logic riêng và cần useState riêng
 * -> Mỗi Component sẽ giải quyết 1 vấn đề nhất định
 * -> React giúp vẽ lại bắt đầu từ component đang setState xuống tất cả những Component_Con, Component_Cháu
 * VD: 
 * Trước khi Update:
 *        Component_Ông
 *      /               \
 *  Component_Cha_1   Component_Cha_2
 *    (setState)    \
 *    |              \
 *  Component_Con_1 Component_Con_2
 *  (setState)              \
 *    |                      \
 *  Component_Cháu_1_1  Component_Cháu_2_1
 * 
 * Sau khi Update:
 *        Component_Ông
 *      /               \
 *  Component_Cha_1   Component_Cha_2
 *    (vẽ lại)     \
 *    |             \
 *  Component_Con_1 Component_Con_2
 *  (vẽ lại)              \
 *    |                      \
 *  Component_Cháu_1_1  Component_Cháu_2_1
 *  (vẽ lại)
 * 
 * 
 * 2. [Để kiểm soát lỗi] Đoạn component lặp đi lặp lại 
 * -> Code ngắn dễ kiểm soát lỗi
 * 
 * 
 * Cách tách Component_Con (xem theo số thứ tự đánh theo dạng <<STT>> ở bên dưới)
 * << 1 >> Cắt những thẻ giống nhau dùng đi dùng lại để tách Component_Con 
 * -> Dán vào file Component_Con (file này tự tạo mới)
 * -> Component_Con lúc này sẽ lấy props từ Component_Cha 
 *  - props truyền vô có thể là state/func từ Component_Cha
 *  - Component_Cha là component đang bị cắt mất những thẻ để tạo Component_Con
 * 
 * << 2 >> Xác định xem:
 * - Chỗ nào là props <- có thể thành biến truyền từ state của Component_Cha vô (hoặc là có thể tự truyền constants vô) & vẽ ra được
 * - Chỗ nào là state <- logic riêng bên trong của từng Component_Con
 * 
 * << 4 >> (Nếu cần) Thêm logic để bọc những props truyền từ cha vô 
 * -> truyền vào các thẻ bên trong Component_Con
 * 
 * << 3 >> (Nếu cần) Cắt những state tương ứng qua bên Component_Con 
 * -> Dán vào file Component_Con
 ** 
 * Bài tập:
 * 1. Tạo Component Input cho [Số điện thoại:], [username:] trong màn hình Register/LogIn
 * 2. Dùng Password cho [password:] trong màn hình LogIn
 */

function Register(props) {
  const [formRegister, setFormRegister] = useState([]);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [rewritePassword, setRewritePassword] = useState("");
  const [telephone, setTelephone] = useState("");
  /**  */
  // const [seePassword, setSeePassword] = useState(true);

  const writeAccount = (event) => {
    setAccount(event.target.value);
  };

  const writePassword = (event) => {
    setPassword(event.target.value);
  };

  /**  */
  // const readPassword = () => {
  //   setSeePassword(!seePassword);
  // };

  const writeEmail = (event) => {
    setEmail(event.target.value);
  };

  const writeBirthday = (event) => {
    setBirthday(event.target.value);
  };

  const rewrite_password = (event) => {
    setRewritePassword(event.target.value);
  };

  const writeTelephone = (event) => {
    setTelephone(event.target.value);
  };

  const registeredForm = () => {
    if (
      account === "user01" &&
      password === "whoisyourdaddy" &&
      email === "user01@gmail.com"
    ) {
      alert("Account, password and email is available");
    } else if (!email.includes("@", 1)) {
      alert("Check your email");
    } else if (password != rewritePassword) {
      alert("Check your password");
    } else if (!telephone && telephone.length < 10) {
      alert("Fill in your phone number and 10 characters");
    } else if (password.length < 10 && account.length < 10) {
      alert("You need fill in password and account 10 characters");
    } else {
      props.login("login");
      alert("Register success");
    }
    const nextRegisterForm = [...formRegister];
    nextRegisterForm.push({
      account: account,
      password: password,
      passwordAgain: rewritePassword,
      email: email,
      birthday: birthday,
    });
    setFormRegister(nextRegisterForm);
    setAccount("");
    setPassword("");
    setEmail("");
    setBirthday("");
    setRewritePassword("");
    setTelephone("");
  };

  return (
    <div className="register-background">
      <div className="register-container">
        <h1>ĐĂNG KÝ</h1>
        <div className="mini-container">
          <span>Tên tài khoản:</span>{" "}
          <input
            type="text"
            onChange={writeAccount}
            value={account}
            className="btn-register"
          />
        </div>
        <div className="mini-container">
          <span>Email:</span>{" "}
          <input
            type="email"
            onChange={writeEmail}
            value={email}
            className="btn-register"
          />
        </div>
        
        {/* 
          * << 1 >> Xem chỗ return tách từ thẻ chứa Component_Con
          --------------
          <div className="mini-container">
            <span>Mật khẩu:</span>{" "}
            {seePassword ? (
              <div>
                <input
                  type="password"
                  onChange={writePassword}
                  value={password}
                  className="btn-register"
                />
                <button onClick={readPassword} className="eyes-read-password">
                  <BsEyeFill />
                </button>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  onChange={writePassword}
                  value={password}
                  className="btn-register"
                />
                <button onClick={readPassword} className="eyes-read-password">
                  <BsEyeSlash />
                </button>
              </div>
            )}
          </div>
          --------------
        */}
        <Password label="Mật khẩu:" value={password} onChange={writePassword}/>
        {/*
          * << 1 >> Xem chỗ return tách từ thẻ chứa Component_Con
          --------------
            <div className="mini-container">
              <span>Nhập lại mật khẩu:</span>{" "}
              {seePassword ? (
                <div>
                  <input
                    type="password"
                    value={rewritePassword}
                    onChange={rewrite_password}
                    className="btn-register"
                  />
                  <button onClick={readPassword} className="eyes-read-password">
                    <BsEyeFill />
                  </button>
                </div>
              ) : (
                <div>
                  <input
                    type="text"
                    onChange={rewrite_password}
                    value={rewritePassword}
                    className="btn-register"
                  />
                  <button onClick={readPassword} className="eyes-read-password">
                    <BsEyeSlash />
                  </button>
                </div>
              )}
            </div> 
          --------------
          */}
        <Password label="Nhập lại mật khẩu:" value={rewritePassword} onChange={rewrite_password}/>
        <div className="mini-container">
          <span>Số điện thoại: </span>
          <input
            type="tel"
            value={telephone}
            onChange={writeTelephone}
            className="btn-register"
          />
        </div>
        <div>
          <span>Giới tính: Nam </span>
          <input type="radio" className="btn-register" />
          <span>Nữ</span>
          <input type="radio" className="btn-register" />
          <span>Ngày sinh:</span>{" "}
          <input
            type="date"
            onChange={writeBirthday}
            value={birthday}
            className="btn-register"
          />
        </div>
        <button onClick={registeredForm} className="registerBtn">
          Đăng ký
        </button>
      </div>
    </div>
  );
}

export default Register;
