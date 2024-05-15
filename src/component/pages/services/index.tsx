import React, { useState } from "react";
import PrimaryButton from "../../utils/buttons/primaryButton";
import { Dialog } from "@headlessui/react";
import ServiceTable from "./table";
import { priceIcon, serviceIcon } from "../../../assets";

const ServicePage = () => {
  const [addServices, setAddServices] = useState<boolean>(false);
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");

  return (
    <div className="h-[calc(100vh-120px)] overflow-y-auto">
      <div className="flex px-5 h-[80px] w-full py-2 justify-between items-center border-b-[2px] border-borderColor">
        <p className="text-black text-2xl">All Services</p>
        <PrimaryButton
          onClick={() => setAddServices(true)}
          title={"Add Services"}
        />
      </div>
      <div className="flex px-5">
        <div className="w-full my-2 overflow-y-auto">
          <ServiceTable />
        </div>
      </div>

      <Dialog
        open={addServices}
        onClose={() => setAddServices(false)}
        className="relative z-50"
      >
        <div className=" fixed inset-0 bg-black/30 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded">
            <div className="h-auto w-[500px] xl:w-[700px] relative rounded-3xl bg-white px-5 py-6">
              <div className="">
                <div
                  onClick={() => {
                    setAddServices(false);
                  }}
                  className="absolute h-[20px] w-[20px] bg-[#FF0000] text-white flex justify-center items-center right-2 top-1 rounded-full cursor-pointer"
                >
                  x
                </div>
                <div className=" pt-2 px-3">
                  <div className="p-5 flex flex-col gap-5">
                    <div className="relative">
                      <input
                        className=" border-[1px] w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 pr-[50px] text-lg py-[8px] px-2 lg:pl-3  rounded-md  focus:outline-none focus:border-blue-300"
                        type="text"
                        value={serviceName}
                        placeholder="Service Name"
                        onChange={(e) => setServiceName(e.target.value)}
                      />
                      <div className="absolute right-5 top-5">
                        <img src={serviceIcon} className="h-5 w-5" alt="" />
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        className=" border-[1px] w-full h-[50px] mt-1 transition bg-white ease-in-out delay-150 border-[#ccc] truncate leading-[19.07px] text-gray-600 text-lg py-[8px] px-2 lg:pl-3  rounded-md  focus:outline-none focus:border-blue-300"
                        type="number"
                        value={servicePrice}
                        placeholder="Service Price"
                        onChange={(e) => setServicePrice(e.target.value)}
                      />
                      <div className="absolute right-5 top-5">
                        <img src={priceIcon} className="h-5 w-5" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center py-5">
                    <PrimaryButton
                      title={"Add Service"}
                      onClick={() => {
                        console.log({
                          serviceName,
                          servicePrice,
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
  );
};

export default ServicePage;
