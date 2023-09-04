import { OutlawServices } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <>
      {OutlawServices?.map((data, index) => {
        return (
          <div key={index} className="flex w-full h-56 p-8 items-center my-4">
            {/* left side */}
            <div className="w-1/2">
              {/* title */}
              <h1 className="text-3xl font-bold mb-3">{data.title}</h1>
              {/* paragraph */}
              <p className="text-sm">
                {data.desc}
              </p>
            </div>

            {/* right side  */}
            <div className="w-1/2 flex justify-center items-center">
              <Image
                src={data.imgLink}
                alt="image"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Service;
