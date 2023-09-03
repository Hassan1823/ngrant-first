import Bar from "@/components/Bar";
import React from "react";
import { companyItems } from "@/utils/data";
import CompBanner from "@/components/CompBanner";
import AboutUs from "@/components/AboutUs";
import MissionsStatement from "@/components/MissionsStatement";
import Leadership from "@/components/Leadership";

const Company = () => {
  return (
    <>
      <CompBanner title={"Company"} />

      <Bar title={"Company"} data={companyItems} />

      <div>
        <AboutUs />
        <MissionsStatement />
        <Leadership />
      </div>
    </>
  );
};

export default Company;
