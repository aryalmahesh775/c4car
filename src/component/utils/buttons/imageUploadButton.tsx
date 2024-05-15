import React from "react";

const ImageUploadButton = ({ stateData, setStateData, refData }: any) => {
  return (
    <div>
      <div className={`h-[150px] w-[200px] bg-gray-200 rounded-3xl relative`}>
        <img
          src={stateData}
          className={` ${
            stateData ? "" : "hidden"
          } rounded-3xl h-[150px] w-[250px] `}
          alt=""
        />
        <input
          className="hidden"
          type="file"
          ref={refData}
          onChange={(e) => setStateData(URL.createObjectURL(e.target.files[0]))}
        />
        <div
          className="absolute bottom-1 px-3 bg-opacity-100 py-1 left-[60px] border-gray-600 rounded-2xl border-[1px] text-green-400 "
          onClick={() => {
            refData.current.click();
          }}
        >
          <span className="z-50"> Upload</span>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadButton;
