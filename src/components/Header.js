import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [isLogin, setIsLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img className="img-logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Contact Us</li>
          <button
            className="btn-login"
            onClick={() => {
               isLogin === "Login" ? setIsLogin("Logout") : setIsLogin("Login");
            }}
          >
            {isLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
