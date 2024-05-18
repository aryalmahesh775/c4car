import React, { useState } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { defaultData, CustomerDataType } from "../../../data/test/customerData";
import { Dialog } from "@headlessui/react";

const CustomerTable = () => {
  const [data, setData] = React.useState<CustomerDataType[]>(() => [
    ...defaultData,
  ]);
  const [viewImage, setViewImage] = useState<boolean>(false);
  const [viewHistory, setViewHistory] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>();
  const columnHelper = createColumnHelper<CustomerDataType>();

  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      cell: (info) => <i className="flex py-2 pl-2">{info.getValue()}</i>,
      header: () => <span className="flex py-2 pl-2">Name</span>,
    }),
    columnHelper.accessor("email", {
      id: "email",
      cell: (info) => <i className="flex py-2 pl-2">{info.getValue()}</i>,
      header: () => <span className="flex py-2 pl-2">Email</span>,
    }),
    columnHelper.accessor("number", {
      id: "number",
      cell: (info) => <i className="flex py-2 pl-2">{info.getValue()}</i>,
      header: () => <span className="flex py-2 pl-2">Number</span>,
    }),
    columnHelper.accessor("history", {
      header: () => <span className="flex py-2 pl-2">History</span>,
      cell: (info) => (
        <div className="">
          <p
            onClick={() => {
              setViewHistory(true);
              setSelectedId(info.row.original.id);
            }}
            className=" flex justify-center cursor-pointer"
          >
            View History
          </p>
          <Dialog
            open={viewHistory && selectedId === info.row.original.id}
            onClose={() => setViewHistory(false)}
            className="relative z-50"
          >
            <div className=" fixed inset-0 bg-black/30 flex w-screen items-center justify-center ">
              <div className=" relative bg-white w-[500px]">
                <div className="">
                  <div
                    onClick={() => {
                      setViewHistory(false);
                    }}
                    className="absolute h-[20px] w-[20px] bg-redBackground text-white flex justify-center items-center right-1 top-1 rounded-full cursor-pointer"
                  >
                    x
                  </div>
                  <div className="text-lg">
                    <p className="py-4 text-xl font-bold  border-borderColor border-b-[1px] px-2">
                      View History
                    </p>
                    <p className="font-semibold px-2 py-5">
                      Name:{" "}
                      <span className="font-medium pl-1">
                        {info.row.original.history.name}
                      </span>
                    </p>
                    <p className="font-semibold px-2 py-5">
                      Description:{" "}
                      <span className="font-medium pl-1">
                        {info.row.original.history.desc}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      ),
    }),
    columnHelper.accessor("image", {
      header: () => "image",
      cell: (info) => (
        <div className="">
          <p
            onClick={() => {
              setViewImage(true);
              setSelectedId(info.row.original.id);
            }}
            className="flex justify-center cursor-pointer"
          >
            View Image
          </p>

          <Dialog
            open={viewImage && selectedId === info.row.original.id}
            onClose={() => setViewImage(false)}
            className="relative z-50"
          >
            <div className=" fixed inset-0 bg-black/30 flex w-screen items-center justify-center ">
              <Dialog.Panel className="w-full flex justify-center items-center rounded">
                <div className=" relative">
                  <div className="border-borderColor ">
                    <div className="text-lg">
                      <img
                        className="h-[300px] w-[300px] rounded-full bg-cover"
                        src={info.row.original.image}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
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
      <div className="w-full">
        <table className=" w-full border-borderColor border-y-[1px]">
          <thead className="w-full">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="border-borderColor border-x-[1px]"
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="h-4" />
      </div>
    </div>
  );
};

export default CustomerTable;
