import * as React from "react";
import { people } from "../../../../component/data/test/people";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import ToggleButton from "../../../utils/buttons/toggleButton";

type PeopleType = {
  id: number;
  name: string;
  email: string;
  contact: string;
  gender: string;
  service: string;
  modal?: string;
  dob: string;
  status: boolean;
};

const HomeTable = () => {
  const [data, setData] = React.useState<PeopleType[]>(() => [...people]);
  const columnHelper = createColumnHelper<PeopleType>();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.name, {
      id: "name",
      cell: (info) => <i>{info.getValue()}</i>,
    }),
    columnHelper.accessor("email", {
      header: () => "Email",
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("contact", {
      header: () => <span>contact</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("gender", {
      header: "gender",
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
    columnHelper.accessor("dob", {
      header: "date of Birth",
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("status", {
      header: () => "Status",
      cell: (info) => (
        <div className="flex gap-3">
          <ToggleButton
            onClick={() => {
              handleSwitchStatus(info.row.original);
            }}
            checked={info.row.original.status}
          />
          <ToggleButton
            onClick={() => {
              handleSwitchStatus(info.row.original);
            }}
            checked={info.row.original.status}
          />
        </div>
      ),
    }),
  ];

  const handleSwitchStatus = (info) => {
    console.log("mahesh you changed toggel data", info);
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
                  className="border-borderColor font-light text-sm border-x-[1px] py-2 px-1"
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
                  className="border-borderColor text-base  border-[1px] px-1 py-2"
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeTable;
