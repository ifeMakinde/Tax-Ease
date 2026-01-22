import React from "react";
import logo from "../assets/Vectorized logo SVG.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-200 w-full px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between">

        <div className="md:w-1/3">
          <img src={logo} alt="Tax-Ease logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed">
            We turn regulatory confusion into compliance confidence helping
            Nigerians navigate the 2026 Finance Act without the jargon or stress.
          </p>
        </div>

        <div className="flex gap-12">
          <div>
            <p className="font-semibold mb-2">Product</p>
            <p>Who it's for</p>
            <p>Features</p>
            <p>FAQ</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Company</p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Legal</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-300 mt-8">
        <div className="justify-self-center text-sm mb-4 md:mb-0 pt-5">
          © {currentYear} TaxEase NG. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
