import React from "react";
import "./style.css";
import { useState } from "react";

function Register(props) {
  const [formRegister, setFormRegister] = useState([]);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const writeAccount = (event) => {
    setAccount(event.target.value);
  };

  const writePassword = (event) => {
    setPassword(event.target.value);
  };

  const writeEmail = (event) => {
    setEmail(event.target.value);
  };

  const writeBirthday = (event) => {
    setBirthday(event.target.value);
  };

  const registeredForm = () => {
    if (
      account === "user01" &&
      password === "whoisyourdaddy" &&
      email === "user01@gmail.com"
    ) {
      alert("Account, password and email is available");
    } else {
      props.login("login");
      alert("Register success");
    }
    const nextRegisterForm = [...formRegister];
    nextRegisterForm.push({
      account: account,
      password: password,
      passwordAgain: password,
      email: email,
      birthday: birthday,
    });
    setFormRegister(nextRegisterForm);
    setAccount("");
    setPassword("");
    setEmail("");
    setBirthday("");
  };

  return (
    <div className="register-background">
      <div className="register-container">
        <h1>ĐĂNG KÝ</h1>
        <div>
          Tên tài khoản: <input type="text" onChange={writeAccount} />
        </div>
        <div>
          Email: <input type="email" onChange={writeEmail} />
        </div>
        <div>
          Mật khẩu: <input type="password" onChange={writePassword} />
        </div>
        <div>
          Nhập lại mật khẩu: <input type="password" />
        </div>
        <div>
          Số điện thoại <input type="tel" />
        </div>
        <div>
          Giới tính: Nam <input type="radio" /> Nữ <input type="radio" />
          Ngày sinh: <input type="date" onChange={writeBirthday} />
        </div>

        <button onClick={registeredForm}>Đăng ký</button>
      </div>
    </div>
  );
}

export default Register;
