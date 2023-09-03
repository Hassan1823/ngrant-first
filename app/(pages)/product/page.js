import Bar from "@/components/Bar";
import CompBanner from "@/components/CompBanner";
import OutlawAi from "@/components/OutlawAi";
import OutlawServices from "@/components/OutlawServices";
import { productItems } from "@/utils/data";
import React from "react";

const Product = () => {
  return (
    <>
      <CompBanner title={"Products"} />
      <Bar title={"Products"} data={productItems} />

      <div>
        <OutlawAi />
        <OutlawServices />
      </div>
    </>
  );
};

export default Product;
