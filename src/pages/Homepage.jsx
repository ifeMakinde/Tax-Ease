import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Reform from "@/components/Reform";
import Steps from "@/components/Steps/Steps";
import Taxpayer from "@/components/Taxpayer/Taxpayers";
import Compliance from "@/components/Compliance/Compliance";
import FAQs from "@/components/FAQ/FAQs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
function Homepage() {
  return (
    <>
    <div>
      <Navigation />
      <Hero />
      <Reform />
      <Steps />
      <Taxpayer />
      <Compliance />
      <FAQs />
      <CTA />
    <Footer/>
    </div>

  
    </>
  );
}

export default Homepage;
