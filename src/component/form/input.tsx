import React from "react";

const InputField = ({ onChange, title, value, placeholder, type }: any) => {
  return (
    <div>
      <input
        className=" border-[1px] w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2 lg:pl-3 placeholder:text-base  rounded-md  focus:outline-none focus:border-blue-300"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
