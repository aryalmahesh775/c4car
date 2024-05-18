import { Dialog } from "@headlessui/react";
import { useRef, useState } from "react";
import PrimaryButton from "../../utils/buttons/primaryButton";
import UsedCarCard from "../../utils/card/usedCars/usedCarCard";
import { sparePartData } from "../../data";
import ImageUploadButton from "../../utils/buttons/imageUploadButton";
import InputField from "../../form/input";

const SparePartPage = () => {
  const [addSparePart, setAddSparePart] = useState<boolean>(false);
  const [firstImage, setFirstImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [thirdImage, setThirdImage] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [soldBy, setSoldBy] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [type, setType] = useState("");
  const [modal, setModal] = useState("");
  const [sectionWidth, setSectionWidth] = useState("");

  const firstImageRef = useRef<any>(null);
  const secondImageRef = useRef<any>(null);
  const thirdImageRef = useRef<any>(null);

  return (
    <div>
      <div className="h-[calc(100vh-120px)] overflow-y-auto">
        <div className="flex px-5 py-2 h-[80px] justify-between items-center border-b-[2px] border-borderColor">
          <p className="text-black text-2xl">All Cars</p>
          <PrimaryButton
            onClick={() => setAddSparePart(true)}
            title={"Add car"}
          />
        </div>
        <div className="flex p-5 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-10">
            {sparePartData.map((item, index) => {
              return (
                <div className="">
                  <UsedCarCard item={item} />
                </div>
              );
            })}
          </div>
        </div>

        <Dialog
          open={addSparePart}
          onClose={() => setAddSparePart(false)}
          className="relative z-50"
        >
          <div className=" fixed inset-0 bg-black/30 flex w-screen items-center justify-center p-4">
            <Dialog.Panel className="w-full flex justify-center rounded">
              <div className="h-auto w-[700px] rounded-md relative bg-white">
                <div className=" pb-5">
                  <div
                    onClick={() => {
                      setAddSparePart(false);
                    }}
                    className="absolute h-[20px] w-[20px] bg-[#FF0000] text-white flex justify-center items-center right-1 top-1 rounded-full cursor-pointer"
                  >
                    x
                  </div>
                  <div className="text-lg pt-2 px-3 ">
                    <div className="grid grid-cols-3  items-center py-1">
                      <div className="h-1 bg-[#ccc] w-full"></div>
                      <div className="flex justify-center items-center">
                        Upload image
                      </div>
                      <div className="h-1 w-full bg-[#ccc]"></div>
                    </div>
                    <div className="grid grid-cols-3">
                      <ImageUploadButton
                        stateData={firstImage}
                        setStateData={setFirstImage}
                        refData={firstImageRef}
                      />
                      <ImageUploadButton
                        stateData={secondImage}
                        setStateData={setSecondImage}
                        refData={secondImageRef}
                      />
                      <ImageUploadButton
                        stateData={thirdImage}
                        setStateData={setThirdImage}
                        refData={thirdImageRef}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-5 mt-5">
                      <InputField
                        type={"text"}
                        title={"product Name"}
                        placeholder={"Product Name"}
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                      />
                      <input
                        className=" border-[1px] w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2 lg:pl-3  rounded-md  focus:outline-none focus:border-blue-300"
                        type="number"
                        value={price}
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <input
                        className=" border-[1px] w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2 lg:pl-3  rounded-md  focus:outline-none focus:border-blue-300"
                        type="text"
                        value={soldBy}
                        placeholder="Sold By"
                        onChange={(e) => setSoldBy(e.target.value)}
                      />
                      <input
                        className=" border-[1px] w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2 lg:pl-3  rounded-md  focus:outline-none focus:border-blue-300"
                        type="text"
                        value={brand}
                        placeholder="Brand"
                        onChange={(e) => setBrand(e.target.value)}
                      />
                      <input
                        className=" border-[1px] w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2 lg:pl-3  rounded-md  focus:outline-none focus:border-blue-300"
                        type="text"
                        value={size}
                        placeholder="Size"
                        onChange={(e) => setSize(e.target.value)}
                      />
                      <input
                        className=" border-[1px] w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2 lg:pl-3  rounded-md  focus:outline-none focus:border-blue-300"
                        type="text"
                        value={type}
                        placeholder="Type"
                        onChange={(e) => setType(e.target.value)}
                      />
                      <input
                        className=" border-[1px] w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2 lg:pl-3  rounded-md  focus:outline-none focus:border-blue-300"
                        type="text"
                        value={modal}
                        placeholder="Modal"
                        onChange={(e) => setModal(e.target.value)}
                      />
                      <input
                        className=" border-[1px] w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2 lg:pl-3  rounded-md  focus:outline-none focus:border-blue-300"
                        type="text"
                        value={sectionWidth}
                        placeholder="Section Width"
                        onChange={(e) => setSectionWidth(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-center py-5">
                      <PrimaryButton
                        title={"Add Data"}
                        onClick={() => {
                          console.log({
                            productName,
                            price,
                            type,
                            modal,
                            brand,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default SparePartPage;
