import React, { useState } from "react";
import InputField from "../../form/input";
import ToggleButton from "../../utils/buttons/toggleButton";
import PrimaryButton from "../../utils/buttons/primaryButton";

const ReminderPage = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="h-[calc(100vh-120px)] overflow-y-auto">
        <div className="flex px-5 py-2 h-[80px] justify-between items-center border-b-[2px] border-borderColor">
          <p className="text-black text-2xl">Reminders</p>
        </div>

        <div className="p-5">
          <div className="">
            <p className="text-xl">Reminder Details</p>
            <p className="text-xs text-gray-400">
              reminders will send notifications to users or customers based on
              service dates.
            </p>
          </div>
          <div className="py-2 grid grid-cols-2 gap-10">
            <div>
              <p className={`text-[#F7A93D] text-xl`}>Reminder Name</p>
              <InputField placeholder={"Service Reminder"} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="py-2">
              <p className={` capitalize text-borderColor text-xl`}>
                when to trigger this reminder
              </p>
              <InputField placeholder={"after a service/product booking"} />
            </div>
            <div className="py-2">
              <p className={` text-borderColor text-xl`}>
                how to deliver this reminder
              </p>
              <InputField placeholder={"send a reminder from top gear"} />
            </div>
          </div>

          <div className="py-3">
            <p className="text-textPrimaryDark text-xl capitalize">
              trigger customers
            </p>
            <p className="text-sm text-gray-400">
              select which type of customers should trigger this reminder.
            </p>

            <div className="">
              <div>
                <div className="flex flex-col gap-5 mt-4">
                  <div>
                    <input
                      type="radio"
                      className="specifyColorRadioButton"
                      id="option1"
                      value="option1"
                      checked={selectedValue === "option1"}
                      onChange={() => setSelectedValue("option1")}
                    />
                    <label className="ml-5 capitalize" htmlFor="option1">
                      disable reminder
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      className="specifyColorRadioButton"
                      id="option2"
                      value="option2"
                      checked={selectedValue === "option2"}
                      onChange={() => setSelectedValue("option2")}
                    />
                    <label className="ml-5 capitalize" htmlFor="option2">
                      for all members (customers with an active contract)
                    </label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      className="specifyColorRadioButton"
                      id="option3"
                      value="option3"
                      checked={selectedValue === "option3"}
                      onChange={() => setSelectedValue("option3")}
                    />
                    <label className="ml-5 capitalize" htmlFor="option3">
                      for all contacts (customers with no active contracts)
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="specifyColorRadioButton"
                      id="option4"
                      value="option4"
                      checked={selectedValue === "option4"}
                      onChange={() => setSelectedValue("option4")}
                    />
                    <label className="ml-5 capitalize" htmlFor="option4">
                      for all customers
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="specifyColorRadioButton"
                      id="option5"
                      value="option5"
                      checked={selectedValue === "option5"}
                      onChange={() => setSelectedValue("option5")}
                    />
                    <label className="ml-5 capitalize" htmlFor="option5">
                      for all customers in specific plans
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="specifyColorRadioButton"
                      id="option6"
                      value="option6"
                      checked={selectedValue === "option6"}
                      onChange={() => setSelectedValue("option6")}
                    />
                    <label className="ml-5 capitalize" htmlFor="option6">
                      for a single customer
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="specifyColorRadioButton"
                      id="option7"
                      value="option7"
                      checked={selectedValue === "option7"}
                      onChange={() => setSelectedValue("option7")}
                    />
                    <label className="ml-5 capitalize" htmlFor="option7">
                      only for team paying customers
                    </label>
                  </div>
                  <div className="flex justify-start gap-7">
                    <ToggleButton
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                      checked={toggle}
                    />
                    <p className="text-gray-400">
                      only send to active customers
                    </p>
                  </div>
                  <div className="flex justify-center gap-10">
                    <PrimaryButton
                      title={"Send"}
                      onClick={() => {
                        console.log({});
                      }}
                    />
                    <PrimaryButton
                      title={"Delete"}
                      onClick={() => {
                        console.log({});
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderPage;
