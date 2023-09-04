import React from "react";

// local imports
import { subsCardsData } from "@/utils/data";

const SubscriptionCard = () => {
  return (
    <>
      {subsCardsData?.map((items, index) => {
        return (
          <div
            key={index}
            className="w-[23%] h-[55vh] bg-slate-950 rounded-lg gap-4 group flex flex-col justify-around items-center text-center p-4 cursor-pointer"
          >
            <h1 className="group-hover:hidden text-2xl font-medium text-red-600 hover:text-red-600">
              {items.name}
            </h1>
            <h2 className="group-hover:hidden">{items.title}</h2>
            <div className="group-hover:hidden text-start px-5">
              <ul className="list-disc text-sm mx-auto">
                {items.points.map((points, indexPoints) => {
                  return <li key={indexPoints} className="my-2">{points}</li>;
                })}
              </ul>
            </div>

            {/* coming soon stamp */}
            <div className="w-[70%] h-14 border rounded-lg justify-center items-center text-lg hidden group-hover:flex m-auto">
              <span className="text-red-700 hover:text-red-600 font-semibold">Coming Soon</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SubscriptionCard;
