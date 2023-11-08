import React from "react";
import "./style.css";
import { useState } from "react";

function Register(props) {
  const [formRegister, setFormRegister] = useState([]);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [rewritePasswords, setRewritePasswords] = useState("");

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

  const rewrite_passwords = (event) => {
    setRewritePasswords(event.target.value);
  };

  const registeredForm = () => {
    if (
      account === "user01" &&
      password === "whoisyourdaddy" &&
      email === "user01@gmail.com"
    ) {
      alert("Account, password and email is available");
    } else if (email.includes("@", 1)) {
      alert("Check your email");
    } else if (password !== rewritePasswords.includes(password)) {
      alert("Check your password");
    } else {
      props.login("login");
      alert("Register success");
    }
    const nextRegisterForm = [...formRegister];
    nextRegisterForm.push({
      account: account,
      password: password,
      passwordAgain: rewritePasswords,
      email: email,
      birthday: birthday,
    });
    setFormRegister(nextRegisterForm);
    setAccount("");
    setPassword("");
    setEmail("");
    setBirthday("");
    setRewritePasswords("");
  };

  return (
    <div className="register-background">
      <div className="register-container">
        <h1>ĐĂNG KÝ</h1>
        <div className="mini-container">
          <span>Tên tài khoản:</span>{" "}
          <input type="text" onChange={writeAccount} value={account} />
        </div>
        <div className="mini-container">
          <span>Email:</span>{" "}
          <input type="email" onChange={writeEmail} value={email} />
        </div>
        <div className="mini-container">
          <span>Mật khẩu:</span>{" "}
          <input type="password" onChange={writePassword} value={password} />
        </div>
        <div className="mini-container">
          <span>Nhập lại mật khẩu:</span>{" "}
          <input
            type="password"
            value={rewritePasswords}
            onChange={rewrite_passwords}
          />
        </div>
        <div className="mini-container">
          <span>Số điện thoại: </span>
          <input type="tel" />
        </div>
        <div>
          <span>Giới tính: Nam </span>
          <input type="radio" /> <span>Nữ</span> <input type="radio" />
          <span>Ngày sinh:</span> <input type="date" onChange={writeBirthday} />
        </div>
        <button onClick={registeredForm}>Đăng ký</button>
      </div>
    </div>
  );
}

export default Register;
