import * as React from "react";
import { people } from "../../../../component/data/test/people";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

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
        // <input
        //   type="checkbox"
        //   checked={info.row.original.status}
        //   onChange={() => handleSwitch(info.row.original.id)}
        //   //   onChange={() => console.log(info.row.original)}
        // />

        <>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              onChange={() => handleSwitch(info.row.original.id)}
              checked={info.row.original.status}
              value=""
              className="sr-only peer focus:outline-none"
            ></input>
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Toggle me
            </span>
          </label>
        </>
      ),
    }),
  ];

  const handleSwitch = (id: number) => {
    const updatedData = data.map((person) =>
      person.id === id ? { ...person, isActive: !person.status } : person
    );
    setData(updatedData);
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
