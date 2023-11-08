import React from "react";
import "./style.css";
import { useState } from "react";

function Register(props) {
  const [formRegister, setFormRegister] = useState([]);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [rewritePassword, setRewritePassword] = useState("");
  const [telephone, setTelephone] = useState("");

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
        <div className="mini-container">
          <span>Mật khẩu:</span>{" "}
          <input
            type="password"
            onChange={writePassword}
            value={password}
            className="btn-register"
          />
        </div>
        <div className="mini-container">
          <span>Nhập lại mật khẩu:</span>{" "}
          <input
            type="password"
            value={rewritePassword}
            onChange={rewrite_password}
            className="btn-register"
          />
        </div>
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
