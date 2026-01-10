import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Reform from "@/components/Reform";
import Steps from "@/components/Steps/Steps";

function Homepage() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Reform />
      <Steps />
    </div>
  );
}

export default Homepage;
