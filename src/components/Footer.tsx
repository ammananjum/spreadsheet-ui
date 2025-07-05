// src/components/Footer.tsx

import { Plus } from "lucide-react";

export default function BottomFooter() {
  return (
    <div className="w-full bg-white px-4 py-0 border-t border-gray-300">
      <div className="flex items-center gap-6 text-lg font-bold text-gray-600 h-12">
        <div className="bg-green-100 text-green-800 h-full flex items-center px-3">
          All Orders
        </div>
        <span>Pending</span>
        <span>Reviewed</span>
        <span>Arrived</span>
        <Plus className="w-5 h-5 text-gray-600" />
      </div>
    </div>
  );
}

