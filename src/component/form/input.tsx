import React from "react";

interface InputFieldInterface {
  onChange?: any;
  title?: any;
  value?: string | number;
  placeholder?: string;
  type?: string;
  label?: string;
  width?: string;
  height?: string;
  icon?: boolean;
}

const InputField = ({
  onChange,
  title,
  value,
  placeholder,
  type,
  label,
  width,
  height,
  icon = false,
}: InputFieldInterface) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="">{label}</div>
      <input
        className={` ${width ? `min-w-[${width}] ` : ""} ${
          height ? `min-h-[${height}] ` : ""
        } ${
          icon ? `pl-12` : "lg:pl-3"
        } border-[1px] w-full h-[50px] mt-1 transition  bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2  placeholder:text-base  rounded-md  focus:outline-none focus:border-gray-700`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
