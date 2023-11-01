import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { useState } from "react";
import User from "./Components/User";
import Products from "./Components/Products";

function App() {
  const [changeScreen, setChangeScreen] = useState("login");

  const toProductsPage = () => {
    setChangeScreen("products");
  };
  const toUserPage = () => {
    setChangeScreen("user");
  };

  const toLoginPage = () => {
    setChangeScreen("login");
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="page">
        <button onClick={toLoginPage} className="page-btn">
          Login
        </button>
        <button onClick={toProductsPage} className="page-btn">
          Products
        </button>
        <button onClick={toUserPage} className="page-btn">
          User
        </button>
      </div>

      {changeScreen === "login" ? (
        <Home login={setChangeScreen} />
      ) : changeScreen === "products" ? (
        <Products />
      ) : (
        <User logout={setChangeScreen} products={toProductsPage} />
      )}
    </div>
  );
}

export default App;
