import React, { useState } from "react";
import Vector from "./Vector.png";
import sportCar from "./sportCar.png";
import "./Login.css";
import profile from "./profile.png";
import logo2 from "./logo2.png";
import lock from "./lock.png";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import PrimaryButton from "../../utils/buttons/primaryButton";
import { phoneIcon } from "../../../assets";

const LoginPage = ({ setAuthUser }: any) => {
  const navigate = useNavigate();
  const [forgetPassword, setForgetPassword] = useState<boolean>(false);

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
            <span
              className="cursor-pointer "
              onClick={() => setForgetPassword(true)}
            >
              Forget Password?
            </span>
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

      <Dialog
        open={forgetPassword}
        onClose={() => setForgetPassword(false)}
        className="relative z-50"
      >
        <div className=" fixed inset-0 bg-black/30 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full flex justify-center items-center rounded">
            <div className="w-[700px] rounded-xl relative bg-white">
              <div className="">
                <div
                  onClick={() => {
                    setForgetPassword(false);
                  }}
                  className="absolute h-[20px] w-[20px] bg-redBackground text-white flex justify-center items-center right-1 top-1 rounded-full cursor-pointer"
                >
                  x
                </div>
                <div className="text-lg pt-2 px-3 ">
                  <p className="text-[32px] font-medium flex justify-center py-5">
                    Forget Password ?
                  </p>
                  <p className="font-normal text-xl flex justify-center text-center py-5">
                    In publishing and graphic design, Lorem <br />
                    is a placeholder text common
                  </p>

                  <div>
                    <p className="ml-20 text-[21px] font-medium text-primaryDark py-1">
                      Mobile Number
                    </p>
                    <div className="flex justify-center ">
                      <div className="form-group-infoField -ml-20 items-center">
                        <span className="lockIconClass">
                          <img src={phoneIcon} alt="" color="#B7B1B1" />
                        </span>
                        <input
                          className="form-input "
                          type={"number"}
                          id="phone"
                          name="phone"
                          // value={formData.password}
                          // onChange={handleInputChange}
                          // required
                          placeholder="Enter your Number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center py-5">
                    <PrimaryButton
                      width={"214px"}
                      height={"52px"}
                      title={"Reset"}
                      onClick={() => setForgetPassword(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default LoginPage;
