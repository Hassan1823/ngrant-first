import React from "react";
import SubscriptionCard from "./SubscriptionCard";

const OutlawAi = () => {
  return (
    <div className="w-full h-auto py-12 bg-black flex flex-col justify-center items-center gap-10">
      <h1 className="uppercase text-4xl font-bold text-red-700 hover:text-red-600 cursor-pointer">
        Hidden Layers
      </h1>
      <div className=" flex flex-wrap justify-center items-center gap-8">
        <SubscriptionCard />
      </div>
    </div>
  );
};

export default OutlawAi;
