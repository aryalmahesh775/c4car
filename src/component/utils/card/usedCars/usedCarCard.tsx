import { useState } from "react";
import SecondaryButton from "../../buttons/secondaryButton";
import { deleteIcon, editIcon } from "../../../../assets";
import { Dialog } from "@headlessui/react";

const UsedCarCard = ({ item }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="flex flex-col  rounded-[15px] shadow-md">
      <div className="h-[310px]">
        <img
          src={item.image}
          className="h-full bg-cover rounded-[15px]"
          alt=""
        />
      </div>
      <div className="">
        <p className="flex justify-center my-4 text-base font-semibold">
          {item.name}
        </p>
      </div>
      <div className="my-3 px-4 grid grid-cols-2 gap-10">
        <SecondaryButton
          title={"Edit"}
          onClick={() => {
            console.log("edit button clicked");
            setOpenModal(true);
          }}
          textColor={"white"}
          bgColor={"redBackground"}
          beforeIcon={editIcon}
        />
        <SecondaryButton
          title={"Delete"}
          onClick={() => {
            console.log("delete button clicked");
          }}
          textColor={"black"}
          bgColor={" gray-300"}
          beforeIcon={deleteIcon}
        />
      </div>

      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        className="relative z-50"
      >
        <div className=" fixed inset-0 bg-black/30 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded">
            <div className="h-[500px] w-[500px] relative bg-white">
              <div className="border-borderColor border-b-[1px] pb-5">
                <div
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  className="absolute h-[20px] w-[20px] bg-redBackground text-white flex justify-center items-center right-1 top-1 rounded-full cursor-pointer"
                >
                  x
                </div>
                <div className="text-lg pt-2 px-3">Edit Car</div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default UsedCarCard;
