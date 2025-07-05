
import { Plus, Link2, RefreshCcw } from "lucide-react";
import React, { useState, useEffect } from "react";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";
import {
  Briefcase,
  CalendarDays,
  CircleChevronDown,
  UserRound,
  Globe,
  Smile,
  GitFork,
} from "lucide-react";
// Define table row type
type RowData = {
  id: number;
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  value: string;
};

// Sample data
const data: RowData[] = [
  {
    id: 1,
    jobRequest: "Launch social media campaign for product X",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    value: "6,200,000",
  },
  {
    id: 2,
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanp...",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    value: "3,500,000",
  },
  {
    id: 3,
    jobRequest: "Finalize user testing feedback for app...",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohns....",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    value: "4,750,000",
  },
  {
    id: 4,
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen...",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    value: "5,900,000",
  },
  {
    id: 5,
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabro...",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    value: "2,800,000",
  },
  ...Array.from({ length: 23 }, (_, i) => ({
    id: i + 6,
    jobRequest: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    value: "",
  })),
];

// Table column definitions
const columns: ColumnDef<RowData>[] = [
  {
  accessorKey: "id",
  header: "#",
  cell: info => (
    <span className="w-1 text-sm text-gray-400 text-left block">{info.getValue() as number}</span>
  ),
},
{
    accessorKey: "jobRequest",
    header: () => (
      <div className="flex items-center gap-1">
        <Briefcase className="w-4 h-4 text-gray-500 fill-gray-500" />
        Job Request
      </div>
    ),
    cell: info => (
      <span className="text-xs text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis block">
        {info.getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "submitted",
    header: () => (
      <div className="flex items-center gap-1">
        <CalendarDays className="w-4 h-4 text-gray-500" />
        Submitted
      </div>
    ),
  },

{
  accessorKey: "status",
  header: () => (
    <div className="flex items-center gap-1">
      <CircleChevronDown className="w-4 h-4 text-gray-500" />
      Status
    </div>
  ),
  cell: (info) => {
    const value = info.getValue() as string;
    const rowIndex = info.row.index;

    // Only style for first 5 rows
    if (rowIndex >= 5 || !value) return <span className="text-xs text-gray-500">{value}</span>;

    let className = "text-xs font-semibold px-2 py-0.5 rounded-full border";

    if (value === "In-process") {
      className += " bg-yellow-100 text-orange-800 border-orange-300";
    } else if (value === "Need to start") {
      className += " bg-gray-200 text-black border-gray-300";
    } else if (value === "Complete") {
      className += " bg-green-100 text-green-800 border-green-300";
    } else if (value === "Blocked") {
      className += " bg-red-100 text-red-800 border-red-300";
    }

    return <span className={className}>{value}</span>;
  },
},

  {
    accessorKey: "submitter",
    header: () => (
      <div className="flex items-center gap-1">
        <UserRound className="w-4 h-4 text-gray-600" />
        Submitter
      </div>
    ),
  },
  {
    accessorKey: "url",
    header: () => (
      <div className="flex items-center gap-1">
        <Globe className="w-4 h-4 text-gray-500" />
        URL
      </div>
    ),
    cell: info => (
      <span className="text-xs text-blue-700 underline cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis block">
        {info.getValue() as string}
      </span>
    ),
  },
  {
  accessorKey: "assigned",
  header: () => (
    <div className="flex items-center gap-1 text-gray-600">
      <Smile className="w-4 h-4 text-gray-500" />
      <span>Assigned</span>
    </div>
  ),
},
 {
  accessorKey: "priority",
  header: "Priority",
  cell: (info) => {
    const value = info.getValue() as string;
    const rowIndex = info.row.index;

    if (rowIndex >= 5 || !value) {
      return <span className="text-xs text-gray-500">{value}</span>;
    }

    let className = "text-l font-semibold";

    if (value === "Medium") {
      className += " text-yellow-600"; // mustard
    } else if (value === "High") {
      className += " text-red-700";
    } else if (value === "Low") {
      className += " text-blue-700";
    }

    return <span className={className}>{value}</span>;
  },
},
   {
  accessorKey: "value",
  header: "Est. Value",
  cell: (info) => {
    const value = info.getValue() as string;
    const rowIndex = info.row.index;

    // Only format first 5 rows
    if (rowIndex < 5 && value) {
      return (
        <span className="block w-full text-right text-xs font-medium text-gray-800">
          {value}₹
        </span>
      );
    }

    return (
      <span className="block w-full text-right text-l text-gray-500">
        {value}
      </span>
    );
  },
},


  { accessorKey: "dueDate", header: "Due Date" },
 
  {
    id: "actions",
    header: "",
    cell: () => <button className="text-blue-500">⋮</button>,
  },
];

// Main component
export default function SpreadsheetTable() {
  const [selectedCell, setSelectedCell] = useState({ rowIndex: 0, colIndex: 0 });

const [columnVisibility, setColumnVisibility] = useState(() => {
  const initialVisibility: Record<string, boolean> = {};
  columns.forEach((col) => {
    if ('accessorKey' in col && col.accessorKey) {
      initialVisibility[col.accessorKey] = true;
    }
  });
  return initialVisibility;
});


const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  state: {
    columnVisibility, 
  },
  onColumnVisibilityChange: setColumnVisibility,
});


useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    setSelectedCell((prev) => {
      let { rowIndex, colIndex } = prev;

      if (e.key === "ArrowDown") rowIndex++;
      if (e.key === "ArrowUp") rowIndex--;
      if (e.key === "ArrowRight") colIndex++;
      if (e.key === "ArrowLeft") colIndex--;

      rowIndex = Math.max(0, Math.min(rowIndex, data.length - 1));
      colIndex = Math.max(0, Math.min(colIndex, columns.length - 1));

      return { rowIndex, colIndex };
    });
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, []);

  return (
     <>
    <div className="overflow-x-auto w-full">
      {/* Custom Header Boxes Row */}
      <div
        className="grid border border-b-0 text-sm font-medium"
        style={{
          gridTemplateColumns: "50px 200px repeat(9, 1fr)", 

        }}
      >
        <div className="border-r border-white-300" /> 
        <div className="col-start-2 col-end-6 bg-gray-200 border-r border-gray-300 flex items-center px-4 py-2">
          <div className="bg-gray-200 px-3 py-1 rounded border border-gray-300 flex items-center">
            <Link2 className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-600 hover:underline cursor-pointer">
              Q3 Financial Overview
            </span>
            <RefreshCcw className="w-5 h-3.5 ml-2 text-red-400 animate-spin" />
          </div>
        </div>
        <div className="bg-white border-r border-gray-300" />
        <div className="bg-green-100 text-green-800 flex items-center justify-center gap-1 border-r border-gray-300 px-2">
  <GitFork className="w-4 h-4 text-green-800 rotate-180" />
  <span className="text-sm font-medium">ABC ...</span>
</div>
<div className="col-span-2 bg-purple-100 text-purple-800 flex items-center justify-center gap-1 border-r border-gray-300 px-2">
  <GitFork className="w-4 h-4 text-white-300 rotate-180 rounded p-0.5" />
  <span className="text-sm font-medium">Answer a question...</span>
</div>

        <div className="bg-orange-100 text-orange-800 flex items-center justify-center gap-1 border-r border-gray-300 px-2">
  <GitFork className="w-5 h-4 text-white-300 rotate-180 rounded p-0.5" />
  <span className="text-sm font-medium">Extract ...</span>
</div>

        <div className="bg-gray-100 text-gray-800 flex items-center justify-center font-bold text-lg border-r border-gray-300">
          <Plus className="w-5 h-5" />
        </div>
      </div>

      {/* Table Section */}
      <table className="w-full border border-gray-300 table-fixed">
        <colgroup>
  <col style={{ width: "50px" }} />  
  <col style={{ width: "200px" }} /> 
  {Array.from({ length: 9 }).map((_, idx) => (
    <col key={idx} style={{ width: `${(150 - 250) / 9}%` }} />
  ))}
</colgroup>

        <thead className="bg-gray-100 text-gray-700 text-sm">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, idx) => (
                <th
                  key={header.id}
                  className={`py-2 border-b border-gray-300 text-left ${
                    idx === 0 ? "px-1 text-left" : "px-3"
                  } ${idx < headerGroup.headers.length - 1 ? "border-r" : ""}`}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="text-sm text-gray-800">
  {table.getRowModel().rows.map((row, rowIdx) => (
    <tr key={row.id} className="hover:bg-gray-50">
      {row.getVisibleCells().map((cell, colIdx) => {
        const isSelected = selectedCell.rowIndex === rowIdx && selectedCell.colIndex === colIdx;
        return (
          <td
            key={cell.id}
            onClick={() => setSelectedCell({ rowIndex: rowIdx, colIndex: colIdx })}
            className={`py-2 border-b border-gray-200 ${
              colIdx === 0 ? "px-1 text-left" : "px-3"
            } ${colIdx < row.getVisibleCells().length - 1 ? "border-r" : ""} ${
              isSelected ? "ring-2 ring-blue-500 ring-offset-1" : ""
            }`}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
    </tr>
  ))}
</tbody>

      </table>                
    </div>
    </>
  );
}  