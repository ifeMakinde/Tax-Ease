import React from "react";
import ComplianceCard from "@/components/Compliance/ComplianceCards";

function Compliance() {
  return (
    <section className="py-20" id="features">
      <div className="text-center max-w-170 m-auto mb-10">
        <h2 className="text-[24px] lg:text-3xl font-semibold mb-3">
          Everything you need for tax compliance
        </h2>
        <p className="text-[14px] lg:text-base  ">
          comprehensive tools and featues desigbed to make Nigerian tax
          compliance effortless and accurate
        </p>
      </div>

      {/* card */}

      <div>
        <ComplianceCard />
      </div>
    </section>
  );
}

export default Compliance;
