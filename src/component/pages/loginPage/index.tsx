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
import { cyberSecurity, phoneIcon } from "../../../assets";
import InputField from "../../form/input";

const LoginPage = ({ setAuthUser }: any) => {
  const navigate = useNavigate();
  const [forgetPassword, setForgetPassword] = useState<boolean>(false);
  const [showOtpPage, setShowOtpPage] = useState<boolean>(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleOtpChange = (e, index) => {
    if (isNaN(e.target.value)) return false;

    setOtp([
      ...otp.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
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

  return (
    <div>
      {showOtpPage ? (
        <>
          <div className="">
            <div className="flex justify-center items-center">
              <img src={cyberSecurity} alt="" />
            </div>
            <div className="flex justify-center items-center flex-col  py-4 mt-3">
              <div className="flex gap-5 my-10">
                {otp.map((data, i) => {
                  return (
                    <input
                      maxLength={1}
                      value={data}
                      className="w-[70px] h-[70px] rounded-lg bg-gray-400 text-xl pl-4 text-black"
                      onChange={(e) => handleOtpChange(e, i)}
                    />
                  );
                })}
              </div>
              <PrimaryButton
                width={"214px"}
                height={"52px"}
                title={"Verify"}
                onClick={() => {
                  setShowOtpPage(false);
                }}
              />
            </div>
            <p className=" text-sm flex justify-center capitalize text-textPrimaryDark">
              didn’t received OTP?{" "}
              <span className="text-redBackground ml-2 cursor-pointer">
                Resend
              </span>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="login-page">
            <img className="sportsCar" src={sportCar} alt="sportsCar" />
            <img className="banner_image" src={Vector} alt="Banner" />
            <div className="login-form">
              <div className="div_logo">
                <img
                  className="logo2"
                  src={logo2}
                  alt="Logo2"
                  style={{ height: "200px" }}
                />
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
                    localStorage.setItem(
                      "c4CarLoginStatus",
                      JSON.stringify(true)
                    );
                    navigate("/home");
                  }}
                >
                  Login
                </button>
              </div>
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
                          <div className="flex ml-[-35px] relative">
                            <span className="absolute top-4 left-2">
                              <img src={phoneIcon} alt="" color="#B7B1B1" />
                            </span>
                            <InputField
                              icon={true}
                              onChange={() => {}}
                              label=""
                              placeholder="Enter your number"
                              height="500px"
                              width="500px"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center py-5 mt-3">
                        <PrimaryButton
                          width={"214px"}
                          height={"52px"}
                          title={"Reset"}
                          onClick={() => {
                            setForgetPassword(false);
                            setShowOtpPage(true);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default LoginPage;
