import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import {
  OrderDataType,
  defaultData,
} from "../../../data/test/orderHistoryData";
import { orderOptionImage } from "../../../../assets";

const OrderHistoryTable = () => {
  const [data, setData] = React.useState<OrderDataType[]>(() => [
    ...defaultData,
  ]);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<number>();
  const status = ["pending", "cancelled", "delivered"];

  const columnHelper = createColumnHelper<OrderDataType>();

  const columns = [
    columnHelper.accessor("orderId", {
      id: "orderId",
      cell: (info) => (
        <i className="flex py-2 pl-2 gap-1">#{info.getValue()}</i>
      ),
      header: () => <span className="flex py-2 pl-2">OrderId</span>,
    }),
    columnHelper.accessor("date", {
      id: "date",
      cell: (info) => <i className="flex py-2 pl-2">{info.getValue()}</i>,
      header: () => <span className="flex py-2 pl-2">Date</span>,
    }),
    columnHelper.accessor("name", {
      id: "name",
      cell: (info) => <i className="flex py-2 pl-2">{info.getValue()}</i>,
      header: () => <span className="flex py-2 pl-2">Name</span>,
    }),
    columnHelper.accessor("location", {
      id: "email",
      cell: (info) => <i className="flex py-2 pl-2">{info.getValue()}</i>,
      header: () => <span className="flex py-2 pl-2">Location</span>,
    }),
    columnHelper.accessor("amount", {
      id: "amount",
      cell: (info) => <i className="flex py-2 pl-2">{info.getValue()}</i>,
      header: () => <span className="flex py-2 pl-2">Amount</span>,
    }),
    columnHelper.accessor("orderStatus", {
      header: () => <span className="flex py-2 pl-2">OrderStatus</span>,
      cell: (info) => (
        <div className="flex justify-between items-center relative pr-5">
          <p
            className={` bg-red-100 w-[100px] rounded-3xl font-normal text-lg py-1 flex justify-center cursor-pointer`}
          >
            {info.getValue()}
          </p>

          <div
            onClick={() => {
              setShowPopUp(true);
              setSelectedRow(info.row.original.id);
              console.log(info.row.original.orderId);
            }}
            className=" cursor-pointer"
          >
            <img src={orderOptionImage} alt="" />
          </div>

          {selectedRow === info.row.original.id && showPopUp && (
            <div className="absolute right-10 top-5 shadow-xl z-50 text-black h-auto w-[200px] bg-white rounded-2xl">
              <div className="relative">
                <div className="flex flex-col bg-white">
                  <p className="text-green-600 text-2xl font-medium p-2 border-b-[1px]">
                    Conform
                  </p>
                  <p className="text-red-700 text-2xl font-medium p-2">
                    Cancelled
                  </p>
                </div>
                <div
                  onClick={() => setShowPopUp(false)}
                  className="absolute h-[20px] w-[20px] text-white flex justify-center items-center right-1 top-1 rounded-full bg-redBackground cursor-pointer"
                >
                  X
                </div>
              </div>
            </div>
          )}
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div>
        <div className="w-full">
          <table className=" w-full border-borderColor border-y-[1px]">
            <thead className="w-full">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      className="border-borderColor bg-gray-100 border-x-[1px]"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className="border-borderColor border-[1px] pl-2 py-2 "
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="h-4" />
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryTable;
