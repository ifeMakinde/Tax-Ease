import React from "react";
import { useState } from "react";
import Freelancers from "@/components/Taxpayer/Freelancers";
import Individuals from "@/components/Taxpayer/Individuals";
import Business from "@/components/Taxpayer/SmallBusiness";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

import { LaptopMinimal, Briefcase, User } from "lucide-react";

const tabs = [
  {
    title: "Individuals",
    icon: <User size={38} strokeWidth={1} />,
  },
  {
    title: "Freelancers",
    icon: <LaptopMinimal size={38} strokeWidth={1} />,
  },
  {
    title: "Small Business",
    icon: <Briefcase size={38} strokeWidth={1} />,
  },
];

function TaxpayerComp() {
  const [activeTab, setActiveTab] = useState("Individuals");

  return (
    <section className="py-20 ">
      <div className="text-center max-w-150 m-auto mb-10">
        <h2 className="text-[26px] lg:text-3xl font-semibold mb-3">
          Built for every Nigerian taxpayer.
        </h2>
        <p className="text-[14px] lg:text-base  ">
          Whether you're earning a salary, running a business, or freelancing
          globally, TaxEase NG has you covered.
        </p>
      </div>

      <div className="m-auto w-70 max-w-[70%] px-6 flex justify-center items-center gap-2 lg:gap-4 ">
        {tabs.map((tab) => (
          <Button
            key={tab.title}
            className={`${
              activeTab === tab.title
                ? "bg-[#064E3B]"
                : "text-black bg-gray-100"
            }  text-[12px] lg:text-base`}
            onClick={() => {
              setActiveTab(tab.title);
            }}
          >
            <span>{tab.icon}</span>
            <NavLink>{tab.title}</NavLink>
          </Button>
        ))}
      </div>

      <div>
        {activeTab === "Freelancers" && <Freelancers />}
        {activeTab === "Individuals" && <Individuals />}
        {activeTab === "Small Business" && <Business />}
      </div>
    </section>
  );
}

export default TaxpayerComp;
