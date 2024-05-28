import { Dialog } from "@headlessui/react";
import { useState } from "react";
import CustomerTable from "./table";

const CustomersPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="h-[calc(100vh-120px)] overflow-y-auto sidebarScroll">
      <div className="flex px-5">
        <div className="w-full my-2 overflow-y-auto relative">
          <CustomerTable />
        </div>
      </div>

      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        className="relative z-50"
      >
        <div className=" fixed inset-0 bg-black/30 flex w-screen items-center justify-center p-4">
          <div className="h-[700px] w-[700px] relative bg-white">
            <div className="border-borderColor border-b-[1px] pb-5">
              <div
                onClick={() => {
                  setOpenModal(false);
                }}
                className="absolute h-[20px] w-[20px] bg-redBackground text-white flex justify-center items-center right-1 top-1 rounded-full cursor-pointer"
              >
                x
              </div>
              <div className="text-lg pt-2 px-3">Add Car</div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CustomersPage;
