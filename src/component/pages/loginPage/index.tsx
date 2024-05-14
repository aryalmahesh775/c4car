import React from "react";
import Vector from "./Vector.png";
import sportCar from "./sportCar.png";
import "./Login.css";
import profile from "./profile.png";
import logo2 from "./logo2.png";
import lock from "./lock.png";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setAuthUser }: any) => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      {/* <p className="">Login page</p>

      <button onClick={() => setAuthUser(true)}>Login</button> */}

      <div className="login-page">
        <img className="sportsCar" src={sportCar} alt="sportsCar" />
        <img className="banner_image" src={Vector} alt="Banner" />
        {/* <form className="login-form"> */}
        <div className="login-form">
          <div className="div_logo">
            <img
              className="logo2"
              src={logo2}
              alt="Logo2"
              style={{ height: "200px" }}
            />
            {/* <img className="logo-text" src={text} alt='' />  */}
          </div>
          <div className="formInputs">
            <div
              className="form-group-infoField"
              style={{ marginBottom: "32px" }}
            >
              <span className="mailIconClass">
                <img src={profile} alt="" color="#B7B1B1" />
              </span>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Username/Email*"
              />
            </div>
            <div className="form-group-infoField">
              <span className="lockIconClass">
                <img src={lock} alt="" color="#B7B1B1" />
              </span>
              <input
                className="form-input"
                type={"password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Password*"
              />
            </div>
          </div>
          <div className="forgotPassword">
            <span>Forget Password?</span>
          </div>
          <div>
            <button
              id="login-button"
              className="login btn btn-primary"
              //   type="submit"
              onClick={() => {
                setAuthUser(true);
                localStorage.setItem("c4CarLoginStatus", JSON.stringify(true));
                navigate("/home");
              }}
            >
              Login
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
