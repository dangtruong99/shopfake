import React, { useState } from "react";
import Container1 from "../Container1";
import "./style.css";

function Home(props) {
  const [account, setAccount] = useState("user01");
  const [password, setPassword] = useState("whoisyourdaddy");

  const loginHome = () => {
    if (account === "user01" && password === "whoisyourdaddy") {
      props.login("loginHome");
      alert("Completed to login");
    } else {
      alert("Failed to login and check your account or password");
    }
  };

  const fillInAccount = (event) => {
    setAccount(event.target.value);
  };

  const fillInPassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <Container1 />
      <div className="loginForm">
        <div className="login-container">
          Tên đăng nhập:
          <input
            type="text"
            name="account"
            value={account}
            onChange={fillInAccount}
          />
        </div>
        <div className="login-container">
          Mật khẩu:
          <input
            type="password"
            name="password"
            value={password}
            onChange={fillInPassword}
          />
        </div>
        <button onClick={loginHome}>Đăng nhập</button>
      </div>
    </div>
  );
}

export default Home;
