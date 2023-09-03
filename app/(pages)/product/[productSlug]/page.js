import Bar from "@/components/Bar";
import CompBanner from "@/components/CompBanner";
import OutlawAi from "@/components/OutlawAi";
import OutlawServices from "@/components/OutlawServices";
import { productItems } from "@/utils/data";
import React from "react";

const ProductSlug = ({ params }) => {
  const slug = params?.productSlug?.replace(/%20/g, " ") || "";
  console.log("productSlug is : ", slug);
  return (
    <>
      <CompBanner
        title={
          slug === "Outlaw AI" || slug === "Outlaw Services"
            ? slug
            : "Nothing Found"
        }
      />
      <Bar title={slug} data={productItems} />

      <div>
        {slug === "Outlaw AI" ? (
          <>
            <OutlawAi />
          </>
        ) : slug === "Outlaw Services" ? (
          <>
            <OutlawServices />
          </>
        ) : (
          <>
            <h1 className="text-red-500 hover:text-red-400 font-semibold text-2xl flex justify-center items-center my-10 mx-auto">
              Nothing Found
            </h1>
          </>
        )}
      </div>
    </>
  );
};

export default ProductSlug;
