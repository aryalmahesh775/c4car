import React, { useState, useEffect } from "react";
import Vector from "./Vector.png";
import sportCar from "./sportCar.png";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "./Login.css";
import profile from "./profile.png";
import eclipse from "./eclipse.jpg";
import lock from "./lock.png";
import text from "./text.png";
import logo2 from "./logo2.png";

export default function Login() {
  const [passOpen, setPassOpen] = React.useState(false);
  const handlePassOpen = () => setPassOpen(true);
  const closePassOpen = () => setPassOpen(false);
  const [passwordType, setPasswordType] = React.useState("password");
  const [imagePath, setImagePath] = React.useState("");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${window.env_url}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (response.ok) {
        console.log("User successfully added.");
        const data = await response.json();
        console.log(data.data);
        const accessToken = data.accessToken;
        console.log("Access Token:", accessToken);
        // localStorage.setItem('accessToken', accessToken);
        // localStorage.setItem('userEmail', data.data.email)
        // localStorage.setItem('userId', data.data.user_id)
        // localStorage.setItem('userName', data.data.firstname)
        // localStorage.setItem("contactno", data.data.contactno)
        const imagePath = data.data.profile_pic;
        setImagePath(imagePath);
        console.log(imagePath);
        // const imageDataBase64 = btoa(data.data.profile_pic);
        // localStorage.setItem('profilePicture', imageDataBase64)
        if (accessToken) {
          window.location.href = "/";
        } else {
          alert("Invalid Credentials");
        }
      } else {
        console.error("Error adding user.");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const saveImagePath = async () => {
    localStorage.setItem("profilePicture", imagePath);
  };

  //   useEffect(() => {
  //     saveImagePath();
  //   }, [imagePath]);

  return (
    <div class="login-page">
      <img className="sportsCar" src={sportCar} alt="sportsCar" />
      <img class="banner_image" src={Vector} alt="Banner" />
      <form className="login-form">
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
              <img src={profile} alt="" fontSize="small" color="#B7B1B1" />
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
              <img src={lock} alt="" fontSize="small" color="#B7B1B1" />
            </span>
            <input
              className="form-input"
              type={passwordType}
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
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
