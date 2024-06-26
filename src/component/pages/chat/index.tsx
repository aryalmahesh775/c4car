import React from "react";
import { orderOptionImage } from "../../../assets";
import { IoSendSharp } from "react-icons/io5";

const ChatDetails = () => {
  return (
    <div className="flex justify-between items-center py-5 pl-2 border-b-[1px] border-gray-300">
      <div className="">
        <div className="text-black text-xl flex gap-6 items-center">
          <img
            className="h-[60px] w-[60px] rounded-full bg-cover"
            src={
              "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
            }
            alt=""
          />
          <div className="">
            <p className="text-xl font-semibold">User Aryal</p>
            <p className="text-lg font-medium">Chat details</p>
          </div>
        </div>
      </div>
      <div className="">4:30 pm</div>
    </div>
  );
};

const ChatPage = () => {
  return (
    <div className=" h-[calc(100vh-120px)] overflow-y-auto">
      <div className="grid grid-cols-5 ">
        <div className="col-span-2 pr-1">
          <div className="flex px-5 py-2 h-[80px] justify-between items-center border-b-[2px] border-borderColor">
            <p className="text-black text-2xl">icon</p>
            <img src={orderOptionImage} alt="" />
          </div>
          <div className="flex justify-between text-base">
            <p className="">Today</p>
            <p className="">date</p>
          </div>
          <div className="">
            <ChatDetails />
            <ChatDetails />
            <ChatDetails />
            <ChatDetails />
            <ChatDetails />
            <ChatDetails />
            <ChatDetails />
          </div>
        </div>
        <div className="col-span-3 bg-gray-100 pl-1">
          <div className="flex px-5 py-2 h-[80px] justify-between items-center border-b-[2px] border-borderColor">
            <div className="text-black text-xl flex gap-6 items-center">
              <img
                className="h-[40px] w-[40px] rounded-full bg-cover"
                src={
                  "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
                }
                alt=""
              />
              <p className="">Chat details</p>
            </div>
            <img src={orderOptionImage} alt="" />
          </div>
          <div className="relative h-full">
            <div className="absolute bottom-5 w-full">
              <div className="relative">
                <input
                  type="text"
                  className="w-full py-5 px-3 text-xl border-lightBorderColor"
                />
                <p className="absolute right-2 top-4 text-blue-700">
                  <IoSendSharp size={20} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
