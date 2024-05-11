import React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import ToggleButton from "../../../utils/buttons/toggleButton";
import { CarDataType, defaultData } from "../../../data/test/serviceData";

const ServiceTable = () => {
  const [data, setData] = React.useState<CarDataType[]>(() => [...defaultData]);

  const columnHelper = createColumnHelper<CarDataType>();

  const columns = [
    columnHelper.accessor("serviceName", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.price, {
      id: "price",
      cell: (info) => <i className="flex py-2 pl-2">${info.getValue()}</i>,
      header: () => <span className="flex py-2 pl-2">Price data</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("status", {
      header: () => "Status",
      cell: (info) => (
        <ToggleButton
          onClick={() => {
            handleSwitchStatus(info.row.original);
          }}
          checked={info.row.original.status}
        />
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

export default ServiceTable;
