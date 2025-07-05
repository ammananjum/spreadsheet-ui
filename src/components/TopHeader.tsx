import { Bell, Search } from "lucide-react";
import { useState } from "react";

export default function TopHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log("Searching for:", e.target.value);
  };

  const handleBellClick = () => {
    console.log("Bell icon clicked – show notifications or something");
  };

  const handleProfileClick = () => {
    console.log("Profile clicked – maybe open dropdown or profile page");
  };

  return (
    <div className="flex items-center justify-between bg-white px-4 py-2 border-b border-gray-300">
      <div className="flex items-center text-l text-gray-700">
        <div
          className="inline-block w-5 h-4 mr-2 rounded-sm border-2 border-gray-500"
          style={{
            background: `linear-gradient(to right, white 0%, white 47.66%, #16a34a 66.66%, #16a34a 100%)`
          }}
        ></div>
        Workspace &gt; Folder 2 &gt; Spreadsheet 3 ...
      </div>

      <div className="flex items-center gap-4">
        {/* 🔍 Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search within sheet"
            value={searchQuery}
            onChange={handleSearchChange}
            className="px-2 py-1 text-l border border-gray-300 rounded-md pr-8"
          />
          <Search className="absolute right-2 top-1.5 h-4 w-4 text-gray-400 pointer-events-none" />
        </div>

        {/* 🔔 Bell */}
        <div className="relative cursor-pointer" onClick={handleBellClick}>
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-green-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
        </div>

        {/* 👤 Profile */}
        <div className="flex items-center gap-1 cursor-pointer" onClick={handleProfileClick}>
          <img
            src="https://i.pinimg.com/736x/57/b6/a8/57b6a86d0cb375fa3a9e38c2c4389d21.jpg"
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="leading-tight">
            <div className="text-sm font-bold text-gray-800">John Doe</div>
            <div className="text-xs text-gray-500">johan.Doe...</div>
          </div>
        </div>
      </div>
    </div>
  );
}
