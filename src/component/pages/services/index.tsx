import React, { useState } from "react";
import PrimaryButton from "../../utils/buttons/primaryButton";
import { Dialog } from "@headlessui/react";
import ServiceTable from "./table";

const ServicePage = () => {
  const [addServices, setAddServices] = useState<boolean>(false);
  return (
    <div className="h-[calc(100vh-120px)] overflow-y-auto">
      <div className="flex px-5 h-[80px] w-full py-2 justify-between items-center border-b-[2px] border-borderColor">
        <p className="text-black text-2xl">All Cars</p>
        <PrimaryButton onClick={() => setAddServices(true)} title={"Add car"} />
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
            <div className="h-[700px] w-[700px] relative bg-white">
              <div className="border-borderColor border-b-[1px] pb-5">
                <div
                  onClick={() => {
                    setAddServices(false);
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

export default ServicePage;
