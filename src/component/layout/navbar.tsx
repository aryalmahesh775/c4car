import React, { useRef, useState } from "react";
import SecondaryButton from "../utils/buttons/secondaryButton";
import { alertIcon, passwordIcon, profileIcon, searchIcon } from "../../assets";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import InputField from "../form/input";
import PrimaryButton from "../utils/buttons/primaryButton";

const ImageUser = () => {
  return (
    <div className="h-[40px] w-[40px]  overflow-hidden rounded-full">
      <img
        className="h-full w-full bg-cover cursor-pointer"
        src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        alt=""
      />
    </div>
  );
};

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showUserModal, setShowUserModal] = useState<boolean>(false);
  const [showUserModalTab, setShowUserModalTab] = useState<number>(1);

  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("handle search", searchInput);
  };

  const ref = useRef(null);

  const handleClickOutside = (event: Event) => {
    // @ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      setShowProfileMenu(false);
    }
  };

  document.addEventListener("click", handleClickOutside, true);

  return (
    <div className="bg-primary py-5 ">
      <div className="flex justify-end gap-10 items-center">
        <NavLink
          className={"rounded-lg relative"}
          to={"/orderHistory"}
          style={({ isActive }) => ({
            color: isActive ? "#990000" : "white",
            backgroundColor: isActive ? "white" : "#252525",
          })}
        >
          {({ isActive }) => (
            <>
              <SecondaryButton
                title={"Order Details"}
                onClick={() => {
                  console.log("Order Details button clicked");
                }}
                fontSize="18px"
                width={"200px"}
                textColor={"black"}
                bgColor={"white"}
                height="50px"
              />
              {isActive ? (
                <div className="h-[20px] absolute w-[200px] bg-white"></div>
              ) : (
                <></>
              )}
            </>
          )}
        </NavLink>
        <div className="relative flex items-center">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search"
            type="text"
            className="py-3 pl-2 focus:outline-none text-white text-lg placeholder:text-lg placeholder:text-white pr-[50px] bg-gray-700 border-white border-[1px] w-[250px] rounded-2xl"
          />
          <div onClick={handleSearch} className="absolute right-[10px]">
            <img className="" src={searchIcon} alt="" />
          </div>
        </div>
        <div className="h-[50px] relative rounded-lg flex justify-center items-center w-[50px] bg-gray-700">
          <img
            className="w-[20px] h-[20px] xl:w-[30px] xl:h-[30px] cursor-pointer"
            src={alertIcon}
            alt=""
            onClick={() => {
              setShowNotification(true);
            }}
          />
          {showNotification && (
            <div className="absolute top-[50px] z-50 w-[350px] shadow-2xl">
              <div
                onClick={() => {
                  setShowNotification(false);
                }}
                className="bg-borderColor uppercase relative border-lightBorderColor rounded-t-md border-[1px] font-medium border-b-[0px] text-white py-3 flex justify-center"
              >
                notifications
                <div className="h-[20px] absolute right-1 top-1 cursor-pointer w-[20px] bg-red-600 text-white flex justify-center items-center rounded-full">
                  X
                </div>
              </div>
              <div className="bg-white ">
                <div className="flex justify-between items-center px-1 py-2 border-t-[0.5px] border-borderColor">
                  <div className="flex justify-between gap-2">
                    <ImageUser />
                    <div className="">
                      <p className="font-medium text-lg">User</p>
                      <p className="text-sm">Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="font-bold text-xl flex items-center">...</div>
                </div>
                <div className="flex justify-between items-center px-1 py-2 border-t-[0.5px] border-borderColor">
                  <div className="flex justify-between gap-2">
                    <ImageUser />
                    <div className="">
                      <p className="font-medium text-lg">User</p>
                      <p className="text-sm">Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="font-bold text-xl flex items-center">...</div>
                </div>
                <div className="flex justify-between items-center px-1 py-2 border-t-[0.5px] border-borderColor">
                  <div className="flex justify-between gap-2">
                    <ImageUser />
                    <div className="">
                      <p className="font-medium text-lg">User</p>
                      <p className="text-sm">Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="font-bold text-xl flex items-center">...</div>
                </div>
                <div className="flex justify-between items-center px-1 py-2 border-t-[0.5px] border-borderColor">
                  <div className="flex justify-between gap-2">
                    <ImageUser />
                    <div className="">
                      <p className="font-medium text-lg">User</p>
                      <p className="text-sm">Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="font-bold text-xl flex items-center">...</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <p className="text-white font-medium text-base xl:text-xl">
            User Name
          </p>
          <div className="h-[30px] w-[30px] xl:h-[50px] xl:w-[50px] overflow-hidden rounded-full">
            <img
              className="h-full w-full bg-cover cursor-pointer"
              src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
              alt=""
              onClick={() => {
                setShowProfileMenu(true);
              }}
            />
          </div>
        </div>

        {showProfileMenu && (
          <>
            <div
              ref={ref}
              className="w-[250px] z-[50] bg-gray-100 cursor-pointer shadow-2xl absolute py-2 rounded-xl top-[90px]"
            >
              <div
                onClick={() => {
                  setShowProfileMenu(false);
                  setShowUserModal(true);
                  setShowUserModalTab(1);
                }}
                className="border-b-[1px] border-[#ccc] text-xl py-1 px-2 font-medium cursor-pointer"
              >
                View Profile
              </div>
              <div
                onClick={() => {
                  localStorage.removeItem("c4CarLoginStatus");
                  window.location.reload();
                }}
                className="cursor-pointer py-1 px-2 text-xl font-medium"
              >
                Logout
              </div>
            </div>
          </>
        )}

        {showUserModal && (
          <Dialog
            open={showUserModal}
            onClose={() => setShowUserModal(false)}
            className="relative z-50"
          >
            <div className=" fixed inset-0 bg-black/30 flex w-screen items-center justify-center p-4">
              <Dialog.Panel className="w-full flex justify-center items-center rounded">
                <div className="h-[700px] w-[90%] relative ">
                  <div className="text-lg pt-2 px-3 w-[400px] rounded-b-lg py-5 absolute right-[30%] xl:right-[40%] h-[83px] bg-[#252525]">
                    <div className=" flex justify-center gap-20 rounded-xl pt-3 text-white">
                      {/* <div className="bg-redBackground rounded-xl px-3 py-2">
                        Profile
                      </div>
                      <div className="bg-redBackground px-3 py-2">Profile</div> */}

                      <SecondaryButton
                        bgColor={`${showUserModalTab === 1 ? "#990000" : ""}`}
                        onClick={() => {
                          setShowUserModalTab(1);
                        }}
                        beforeIcon={profileIcon}
                        title={"Profile"}
                        textColor="white"
                        width="150px"
                        height="45px"
                        border={false}
                      />
                      <SecondaryButton
                        bgColor={`${showUserModalTab === 2 ? "#990000" : ""}`}
                        onClick={() => {
                          setShowUserModalTab(2);
                        }}
                        beforeIcon={passwordIcon}
                        title={"Credentials"}
                        textColor="white"
                        width="150px"
                        height="45px"
                        border={false}
                      />
                    </div>
                  </div>
                  <div className=" pb-5 bg-white">
                    <div
                      onClick={() => {
                        setShowUserModal(false);
                      }}
                      className="absolute h-[20px] w-[20px] bg-redBackground text-white flex justify-center items-center right-1 top-1 rounded-full cursor-pointer"
                    >
                      x
                    </div>
                    <div className="pt-[80px]">
                      {showUserModalTab === 1 ? (
                        <>
                          <div className="">
                            <div className="flex justify-center items-center pt-5">
                              <img
                                className="h-[150px]  w-[150px] rounded-full bg-cover cursor-pointer"
                                src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
                                alt=""
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-10 p-20">
                              <InputField
                                title={"First Name"}
                                placeholder={"First Name"}
                                label={"First Name"}
                              />
                              <InputField
                                title={"Last Name"}
                                placeholder={"Last Name"}
                                label={"Last Name"}
                              />
                              <InputField
                                title={"Email"}
                                placeholder={"Email"}
                                label={"Email"}
                              />
                              <InputField
                                title={"Phone"}
                                placeholder={"Phone"}
                                label={"phone"}
                              />
                              <div className="col-span-2">
                                <InputField
                                  title={"Location"}
                                  placeholder={"Location"}
                                  label={"Location"}
                                />
                              </div>
                            </div>
                            <div className="flex justify-center gap-20">
                              <SecondaryButton
                                bgColor="#990000"
                                onClick={() => {}}
                                title={"Save"}
                                textColor="white"
                                width="150px"
                                height="45px"
                              />
                              <SecondaryButton
                                textColor="black"
                                bgColor="white"
                                onClick={() => {
                                  setShowUserModal(false);
                                }}
                                title={"Cancel"}
                                width="150px"
                                height="45px"
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="">
                            <div className="grid gap-10 p-20">
                              <InputField
                                title={"First Name"}
                                placeholder={"Email"}
                                label={"Email"}
                              />
                              <InputField
                                title={"Last Name"}
                                placeholder={"Current Password"}
                                label={"Current Password"}
                              />
                              <InputField
                                title={"Email"}
                                placeholder={"New Password"}
                                label={"New Password"}
                              />
                              <InputField
                                title={"Phone"}
                                placeholder={"Conform New Password"}
                                label={"Conform New Password"}
                              />
                            </div>
                            <div className="flex justify-center gap-20">
                              <SecondaryButton
                                bgColor="#990000"
                                onClick={() => {}}
                                title={"Save"}
                                textColor="white"
                                width="150px"
                                height="45px"
                              />
                              <SecondaryButton
                                textColor="black"
                                bgColor="white"
                                onClick={() => {
                                  setShowUserModal(false);
                                }}
                                title={"Cancel"}
                                width="150px"
                                height="45px"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default Navbar;
