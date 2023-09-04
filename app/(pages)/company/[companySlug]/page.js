import AboutUs from "@/components/AboutUs";
import Bar from "@/components/Bar";
import CompBanner from "@/components/CompBanner";
import Leadership from "@/components/Leadership";
import MissionsStatement from "@/components/MissionsStatement";
import { companyItems } from "@/utils/data";
import React from "react";

const ComapnySlug = ({ params }) => {
  const slug = params?.companySlug?.replace(/%20/g, " ") || "";
  console.log("companySlug is : ", slug);
  return (
    <>
      {/* {slug !== "About Us" ||
        slug !== "Missions Statement" ||
        (slug !== "Leadership" && slug == "Nothing Found")} */}
      <CompBanner
        title={
          slug === "About US" ||
          slug === "Missions Statement" ||
          slug === "Leadership"
            ? slug
            : "Nothing Found"
        }
      />

      <Bar title={slug} data={companyItems} />
      <div>
        {slug === "About Us" ? (
          <>
            <AboutUs />
          </>
        ) : slug === "Missions Statement" ? (
          <>
            <MissionsStatement />
          </>
        ) : slug === "Leadership" ? (
          <>
            <Leadership />
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

export default ComapnySlug;
