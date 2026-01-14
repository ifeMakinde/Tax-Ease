import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Reform from "@/components/Reform";
import Steps from "@/components/Steps/Steps";
import Taxpayer from "@/components/Taxpayer/Taxpayers";

function Homepage() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Reform />
      <Steps />
      <Taxpayer />
    </div>
  );
}

export default Homepage;
