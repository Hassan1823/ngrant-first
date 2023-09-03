"use client";

import React, { useState } from "react";

// local imports
import Link from "next/link";
// import AboutUs from "./AboutUs";
// import MissionsStatement from "./MissionsStatement";
// import Leadership from "./Leadership";

const Bar = ({ title, data }) => {
  const [selectItem, setSelectItem] = useState(title);
  const getClickedItem = (item) => {
    setSelectItem(item);
  };
  const companyItems = data;
  // console.log("Selected item is : ", selectItem);
  return (
    <div className="w-full h-auto flex flex-col">
      <div className="border w-full h-14 flex justify-center items-center gap-8">
        {/* bar comp for company page */}
        {companyItems?.map((items, index) => (
          <>
            <Link
              key={index}
              // href={`#`}
              href={`${items.prevLinks}/${items.name}`}
              className={`${
                items.name === selectItem ? "text-red-500" : "text-white"
              } `}
              onClick={() => getClickedItem(items.name)}
            >
              {items.name}
            </Link>
            {index !== companyItems.length - 1 && <span>|</span>}
          </>
        ))}
      </div>
      
      
    </div>
  );
};

export default Bar;
