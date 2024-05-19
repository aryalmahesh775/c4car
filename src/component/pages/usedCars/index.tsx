import React, { useState } from "react";
import PrimaryButton from "../../utils/buttons/primaryButton";
import UsedCarCard from "../../utils/card/usedCars/usedCarCard";
import { Dialog } from "@headlessui/react";
import { cardData } from "../../data";

const UsedCarsPage = () => {
  const [addCar, setAddCar] = useState<boolean>(false);

  return (
    <div className="h-[calc(100vh-120px)] overflow-y-auto">
      <div className="flex px-5 py-2 h-[80px] justify-between items-center border-b-[2px] border-lightBorderColor">
        <p className="text-black text-2xl">All Cars</p>
        <PrimaryButton onClick={() => setAddCar(true)} title={"Add car"} />
      </div>
      <div className="flex p-5 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-10">
          {cardData.map((item, index) => {
            return (
              <div className="">
                <UsedCarCard item={item} />
              </div>
            );
          })}
        </div>
      </div>

      <Dialog
        open={addCar}
        onClose={() => setAddCar(false)}
        className="relative z-50"
      >
        <div className=" fixed inset-0 bg-black/30 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full flex justify-center items-center rounded">
            <div className="h-[700px] w-[700px] relative bg-white">
              <div className="border-borderColor border-b-[1px] pb-5">
                <div
                  onClick={() => {
                    setAddCar(false);
                  }}
                  className="absolute h-[20px] w-[20px] bg-redBackground text-white flex justify-center items-center right-1 top-1 rounded-full cursor-pointer"
                >
                  x
                </div>
                <div className="text-lg pt-2 px-3">Add Car</div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default UsedCarsPage;
