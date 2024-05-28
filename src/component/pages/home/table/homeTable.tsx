import * as React from "react";
import { people } from "../../../../component/data/test/people";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import AcceptButton from "../../../staticButtons/acceptButton";
import RejectButton from "../../../staticButtons/rejectButton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { leftIcon, rightIcon } from "../../../../assets";

type PeopleType = {
  name: string;
  date: string;
  email: string;
  contact: string;
  service: string;
  modal?: string;
  status: boolean;
};
// type PeopleType = {
//   id: number;
//   name: string;
//   email: string;
//   contact: string;
//   gender: string;
//   service: string;
//   modal?: string;
//   dob: string;
//   status: boolean;
// };

const HomeTable = () => {
  const [data, setData] = React.useState<PeopleType[]>(() => [...people]);
  const columnHelper = createColumnHelper<PeopleType>();

  const columns = [
    columnHelper.accessor((row) => row.name, {
      header: () => "Name",
      id: "name",
      cell: (info) => <i>{info.getValue()}</i>,
    }),
    columnHelper.accessor("date", {
      header: "Date",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("email", {
      header: () => "Email",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("contact", {
      header: () => <span>Contact</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("service", {
      header: "Service Header",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("modal", {
      header: "Modal no",
      footer: (info) => info.column.id,
    }),

    columnHelper.accessor("status", {
      header: () => "Status",
      cell: (info) => (
        <div className="flex gap-3 justify-center">
          <AcceptButton />
          <RejectButton />
        </div>
      ),
    }),
  ];

  const handleSwitchStatus = (info) => {
    console.log("User you changed toggle data", info);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="">
      <table className="w-full border-borderColor border-y-[1px]">
        <thead className="w-full">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="border-borderColor font-medium text-sm border-x-[1px] py-2 px-1"
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
                  className="border-borderColor text-base font-medium  border-[1px] px-1 py-2"
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-3 gap-10">
        <div className="px-4 py-2 cursor-pointer border-gray-300 rounded-sm flex items-center border-[1px]">
          <img src={leftIcon} alt="" />
        </div>
        <div className="flex gap-5">
          <div className="px-4 py-2 cursor-pointer border-redBackground text-redBackground rounded-sm border-[1px]">
            {" "}
            1{" "}
          </div>
          <div className="px-4 py-2 cursor-pointer border-gray-200 rounded-sm border-[1px]">
            {" "}
            2{" "}
          </div>
          <div className="px-4 py-2 cursor-pointer border-gray-200 rounded-sm border-[1px]">
            {" "}
            3{" "}
          </div>
          <div className="px-4 py-2 cursor-pointer border-gray-200 rounded-sm border-[1px]">
            {" "}
            4{" "}
          </div>
          <div className="px-4 py-2 cursor-pointer border-gray-200 rounded-sm border-[1px]">
            {" "}
            5{" "}
          </div>
        </div>
        <div className="px-4 py-2 cursor-pointer border-gray-200 rounded-sm flex items-center border-[1px]">
          {" "}
          <img src={rightIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeTable;
