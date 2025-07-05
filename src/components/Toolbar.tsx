import { useState } from "react";
import {
  Plus,
  Upload,
  Download,
  Share2,
  ChevronsRight,
  Smartphone,
  Eye,
  EyeOff,
  ArrowUpDown,
  Filter,
} from "lucide-react";

export default function Toolbar() {
  const [hideFields, setHideFields] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <div className="flex flex-col bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-2">
        {/* 🔵 LEFT SIDE */}
        <div className="flex items-center gap-4 relative">
          {/* Toggle tool section */}
          <button
            onClick={() => setShowTools(prev => !prev)}
            className="text-sm text-gray-600 flex items-center gap-1 hover:text-black"
          >
            Tool bar{" "}
            <ChevronsRight
              className={`w-4 h-4 transition-transform ${showTools ? "rotate-90" : ""}`}
            />
          </button>

          {/* 🔽 Show inline tools */}
          {showTools && (
            <>
              {/* Hide Fields */}
              <button
                onClick={() => setHideFields(prev => !prev)}
                className="text-sm text-gray-600 hover:text-black flex items-center gap-1"
              >
                {hideFields ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                {hideFields ? "Show hidden fields" : "Hide fields"}
              </button>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(prev => !prev)}
                  className="text-sm text-gray-600 hover:text-black flex items-center gap-1"
                >
                  <ArrowUpDown className="w-4 h-4" /> Sort
                </button>
                {sortOpen && (
                  <div className="absolute z-20 mt-1 w-32 bg-white border border-gray-300 shadow rounded">
                    <button className="block px-4 py-1 text-sm w-full text-left hover:bg-gray-100">
                      Sort A → Z
                    </button>
                    <button className="block px-4 py-1 text-sm w-full text-left hover:bg-gray-100">
                      Sort Z → A
                    </button>
                  </div>
                )}
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setFilterOpen(prev => !prev)}
                  className="text-sm text-gray-600 hover:text-black flex items-center gap-1"
                >
                  <Filter className="w-4 h-4" /> Filter
                </button>
                {filterOpen && (
                  <div className="absolute z-20 mt-1 w-40 bg-white border border-gray-300 shadow rounded">
                    <div className="p-2 text-xs text-gray-500">Apply Filter:</div>
                    <button className="block px-4 py-1 text-sm w-full text-left hover:bg-gray-100">
                      Status: In-process
                    </button>
                    <button className="block px-4 py-1 text-sm w-full text-left hover:bg-gray-100">
                      Priority: High
                    </button>
                  </div>
                )}
              </div>

              {/* Cell View */}
              <button
                onClick={() => console.log("Cell view clicked")}
                className="text-sm text-gray-600 hover:text-black flex items-center gap-1"
              >
                <Smartphone className="w-4 h-4" /> Cell view
              </button>
            </>
          )}
        </div>

        {/* 🔵 RIGHT SIDE */}
        <div className="flex items-center gap-2 relative">
          {/* Export Dropdown */}
          <div className="relative">
            <button
              onClick={() => setExportOpen(prev => !prev)}
              className="flex items-center gap-1 px-2 py-1 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-100"
            >
              <Download className="w-4 h-4" /> Export
            </button>
            {exportOpen && (
              <div className="absolute right-0 z-20 mt-1 w-36 bg-white border border-gray-300 rounded shadow">
                <button className="block px-4 py-1 text-sm w-full text-left hover:bg-gray-100">Export as CSV</button>
                <button className="block px-4 py-1 text-sm w-full text-left hover:bg-gray-100">Export as Excel</button>
                <button className="block px-4 py-1 text-sm w-full text-left hover:bg-gray-100">Export as PDF</button>
              </div>
            )}
          </div>

          {/* Import Dropdown */}
          <div className="relative">
            <button
              onClick={() => setImportOpen(prev => !prev)}
              className="flex items-center gap-1 px-2 py-1 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-100"
            >
              <Upload className="w-4 h-4" /> Import
            </button>
            {importOpen && (
              <div className="absolute right-0 z-20 mt-1 w-44 bg-white border border-gray-300 rounded shadow px-4 py-2 text-sm">
                <p className="text-gray-600">Upload a CSV or Excel file</p>
                <button className="mt-2 bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700">
                  Choose File
                </button>
              </div>
            )}
          </div>

          {/* Share Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShareOpen(prev => !prev)}
              className="flex items-center gap-1 px-2 py-1 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-100"
            >
              <Share2 className="w-4 h-4" /> Share
            </button>
            {shareOpen && (
              <div className="absolute right-0 z-20 mt-1 w-44 bg-white border border-gray-300 rounded shadow">
                <button className="block px-4 py-1 text-sm w-full text-left hover:bg-gray-100">Copy Share Link</button>
                <button className="block px-4 py-1 text-sm w-full text-left hover:bg-gray-100">Invite by Email</button>
              </div>
            )}
          </div>

          {/* New Action Button */}
          <button
            onClick={() => console.log("New Action clicked")}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 ml-2"
          >
            <Plus className="w-4 h-4" /> New Action
          </button>
        </div>
      </div>
    </div>
  );
}
