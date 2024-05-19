import React from "react";
import PrimaryButton from "../../utils/buttons/primaryButton";
import OrderHistoryTable from "./table/orderHistoryTable";

const OrderHistoryPage = () => {
  return (
    <div className="h-[calc(100vh-120px)] overflow-y-auto">
      <div className="flex px-5 py-2 h-[80px] justify-between items-center border-b-[2px] border-lightBorderColor">
        <p className="text-black text-2xl">Offers</p>
      </div>
      <div className="p-5">
        <OrderHistoryTable />
      </div>
    </div>
  );
};

export default OrderHistoryPage;
