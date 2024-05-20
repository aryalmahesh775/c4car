import React, { useRef, useState } from "react";
import PrimaryButton from "../../utils/buttons/primaryButton";
import UsedCarCard from "../../utils/card/usedCars/usedCarCard";
import { Dialog } from "@headlessui/react";
import { offerData } from "../../data";
import ImageUploadButton from "../../utils/buttons/imageUploadButton";
import InputField from "../../form/input";

const OfferPage = () => {
  const [addOffer, setAddOffer] = useState<boolean>(false);
  const [firstImage, setFirstImage] = useState("");
  const firstImageRef = useRef<any>(null);

  return (
    <div>
      <div className="h-[calc(100vh-120px)] overflow-y-auto rounded-t-lg">
        <div className="flex px-5 py-2 h-[80px] justify-between items-center border-b-[2px] border-lightBorderColor">
          <p className="text-black text-2xl">Offers</p>
          <PrimaryButton
            onClick={() => setAddOffer(true)}
            title={"Add Offer"}
          />
        </div>
        <div className="flex p-5 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-10">
            {offerData.map((item, index) => {
              return (
                <div className="">
                  <UsedCarCard item={item} />
                </div>
              );
            })}
          </div>
        </div>

        <Dialog
          open={addOffer}
          onClose={() => setAddOffer(false)}
          className="relative z-50"
        >
          <div className=" fixed inset-0 bg-black/30 flex w-screen items-center justify-center p-4">
            <div className=" relative bg-white">
              <div className="h-auto w-[850px] rounded-md relative bg-white">
                <div className=" pb-5">
                  <div
                    onClick={() => {
                      setAddOffer(false);
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
                    <div className="flex justify-center">
                      <ImageUploadButton
                        stateData={firstImage}
                        setStateData={setFirstImage}
                        refData={firstImageRef}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-5 mt-5">
                      <InputField
                        type={"text"}
                        title={"enter car name"}
                        placeholder={"Enter Car Name"}
                        // value={productName}
                        // onChange={(e) => setProductName(e.target.value)}
                      />
                      <InputField
                        type={"text"}
                        title={"Enter car Modal"}
                        placeholder={"Enter Car Modal"}
                        // value={productName}
                        // onChange={(e) => setProductName(e.target.value)}
                      />
                      <div className="col-span-2">
                        <InputField
                          type={"text"}
                          title={"Enter Engine Type"}
                          placeholder={"Enter Engine Type"}
                          // value={productName}
                          // onChange={(e) => setProductName(e.target.value)}
                        />
                      </div>
                      <div className="col-span-2">
                        <InputField
                          type={"text"}
                          title={"Driven Km"}
                          placeholder={"Driven Km"}
                          // value={productName}
                          // onChange={(e) => setProductName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex justify-center py-5">
                      <PrimaryButton
                        title={"Add Data"}
                        onClick={() => {
                          console.log("data list");
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default OfferPage;
