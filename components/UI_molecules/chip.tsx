import React from "react";

function Chip({ name }: { name: string }) {
  return (
    <div className="px-3 py-1 rounded-[12px] last:mt-2 md:last:mt-0 bg-gray-200 ">
      {name}
    </div>
  );
}

export default Chip;
