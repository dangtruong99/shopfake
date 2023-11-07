import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { useState } from "react";
import User from "./Components/User";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Details from "./Components/Details";
import Register from "./Components/Register";
function App() {
  const [changeScreen, setChangeScreen] = useState("login");
  const [cart, setCart] = useState(
    [] /** thằng này sẽ gồm danh sách các product mà người dùng đã mua */
  );
  const [details, setDetails] = useState(null);

  /** thằng này sẽ thực hiện hành động thêm product vào cart */
  const onClickBuy = (productList) => {
    const nextCart = cart.concat(productList);
    setCart(nextCart);
  };

  const onClickDetails = (product) => {
    setDetails(product);
    setChangeScreen("details");
  };

  const onClickRemove = (item) => {
    const index = cart.findIndex((product) => product === item);
    if (index < 0) {
      console.log("Unable to find product", item);
      return;
    }
    const nextProduct = cart.slice();
    nextProduct.splice(index, 1);
    setCart(nextProduct);
  };

  const onChangeScreen = (screenName) => () => {
    setChangeScreen(screenName);
  };
  const toProductsPage = () => {
    setChangeScreen("products");
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
        <button onClick={onChangeScreen("login")} className="page-btn">
          Login
        </button>
        <button onClick={onChangeScreen("register")} className="page-btn">
          Register
        </button>
        <button onClick={onChangeScreen("products")} className="page-btn">
          Products
        </button>
        <button onClick={onChangeScreen("user")} className="page-btn">
          User
        </button>
      </div>

      {changeScreen === "login" ? (
        <Home login={setChangeScreen} />
      ) : changeScreen === "products" ? (
        <Products
          onClickCart={onChangeScreen("cart")}
          showDetails={onClickDetails}
        />
      ) : changeScreen === "details" ? (
        <Details
          details={details}
          onClickBuy={onClickBuy}
          showDetails={onChangeScreen("products")}
        />
      ) : changeScreen === "register" ? (
        <Register login={setChangeScreen} />
      ) : changeScreen === "cart" ? (
        <Cart
          cart={cart}
          returnProductScreen={onChangeScreen("products")}
          onClickRemove={onClickRemove}
        />
      ) : (
        <User logout={setChangeScreen} products={toProductsPage} />
      )}
    </div>
  );
}

export default App;
