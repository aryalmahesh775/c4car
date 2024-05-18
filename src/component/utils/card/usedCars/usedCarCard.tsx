import { useRef, useState } from "react";
import SecondaryButton from "../../buttons/secondaryButton";
import { deleteIcon, editIcon } from "../../../../assets";
import { Dialog } from "@headlessui/react";
import ImageUploadButton from "../../buttons/imageUploadButton";
import InputField from "../../../form/input";
import PrimaryButton from "../../buttons/primaryButton";

const UsedCarCard = ({ item }) => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const [addSparePart, setAddSparePart] = useState<boolean>(false);
  const [firstImage, setFirstImage] = useState("");
  const [secondImage, setSecondImage] = useState("");
  const [thirdImage, setThirdImage] = useState("");
  const [productName, setProductName] = useState(item.name);
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
    <div className="flex flex-col  rounded-[15px] shadow-md">
      <div className="">
        <img
          src={item.image}
          className="h-full w-full bg-cover rounded-[15px]"
          alt=""
        />
      </div>
      <div className="">
        <p className="flex justify-center my-4 text-base font-semibold">
          {item.name}
        </p>
      </div>
      <div className="flex justify-between my-2 pb-5 px-2 gap-2 xl:px-5">
        <SecondaryButton
          title={"Edit"}
          onClick={() => {
            console.log("edit button clicked");
            setOpenEditModal(true);
          }}
          textColor={"white"}
          bgColor={"#990000"}
          beforeIcon={editIcon}
        />
        <SecondaryButton
          title={"Delete"}
          onClick={() => {
            console.log("delete button clicked");
            setOpenDeleteModal(true);
          }}
          textColor={"black"}
          bgColor={" gray-300"}
          beforeIcon={deleteIcon}
        />
      </div>

      <Dialog
        open={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        className="relative z-50"
      >
        <div className=" fixed inset-0 bg-black/30 flex w-screen items-center justify-center p-4">
          <div className="h-auto w-[700px] rounded-md relative bg-white">
            <div className=" pb-5">
              <p className="text-xl py-8 flex justify-center">
                Do you really want to delete Data
              </p>
              <div className="flex justify-center py-5 gap-5">
                <PrimaryButton
                  title={"Conform"}
                  onClick={() => {
                    console.log("deleted");
                  }}
                />
                <PrimaryButton
                  title={"Cancel"}
                  onClick={() => {
                    setOpenDeleteModal(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Dialog>

      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        className="relative z-50"
      >
        <div className=" fixed inset-0 bg-black/30 flex w-screen items-center justify-center p-4">
          <div className="h-auto w-[700px] rounded-md relative bg-white">
            <div className=" pb-5">
              <div
                onClick={() => {
                  setOpenEditModal(false);
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
                  <InputField
                    type={"number"}
                    title={"Price"}
                    placeholder={"Price"}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <InputField
                    type={"text"}
                    title={"Sold By"}
                    placeholder={"Sold By"}
                    value={soldBy}
                    onChange={(e) => setSoldBy(e.target.value)}
                  />
                  <input
                    className=" border-[1px] placeholder:text-base w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2 lg:pl-3  rounded-md  focus:outline-none focus:border-blue-300"
                    type="text"
                    value={brand}
                    placeholder="Brand"
                    onChange={(e) => setBrand(e.target.value)}
                  />
                  <input
                    className=" border-[1px] placeholder:text-base w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2 lg:pl-3  rounded-md  focus:outline-none focus:border-blue-300"
                    type="text"
                    value={size}
                    placeholder="Size"
                    onChange={(e) => setSize(e.target.value)}
                  />
                  <input
                    className=" border-[1px] placeholder:text-base w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2 lg:pl-3  rounded-md  focus:outline-none focus:border-blue-300"
                    type="text"
                    value={type}
                    placeholder="Type"
                    onChange={(e) => setType(e.target.value)}
                  />
                  <input
                    className=" border-[1px] placeholder:text-base w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2 lg:pl-3  rounded-md  focus:outline-none focus:border-blue-300"
                    type="text"
                    value={modal}
                    placeholder="Modal"
                    onChange={(e) => setModal(e.target.value)}
                  />
                  <input
                    className=" border-[1px] placeholder:text-base w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2 lg:pl-3  rounded-md  focus:outline-none focus:border-blue-300"
                    type="text"
                    value={sectionWidth}
                    placeholder="Section Width"
                    onChange={(e) => setSectionWidth(e.target.value)}
                  />
                </div>
                <div className="flex justify-center py-5">
                  <PrimaryButton
                    title={"Update Data"}
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
        </div>
      </Dialog>
    </div>
  );
};

export default UsedCarCard;
