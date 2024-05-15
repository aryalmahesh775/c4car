import React from "react";

const PrimaryButton = ({ title, onClick }) => {
  return (
    <div>
      <button
        className={` bg-redBackground text-white py-3 px-5 rounded-md`}
        onClick={onClick}
      >
        <p className="text-base">{title}</p>
      </button>
    </div>
  );
};

export default PrimaryButton;
