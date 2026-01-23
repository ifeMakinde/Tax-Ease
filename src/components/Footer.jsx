import React from "react";
import logo from "../assets/Vectorized logo SVG.png";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between">

        <div className="md:w-1/3">
          <img src={logo} alt="Tax-Ease logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed">
            We turn regulatory confusion into compliance confidence helping
            Nigerians navigate the 2026 Finance Act without the jargon or stress.
          </p>
          
          <div className="flex gap-4 mt-4">
  <a href="#" aria-label="X (Twitter)">
    <X size={18} className="text-slate-600 hover:text-green transition" />
  </a>

  <a href="#" aria-label="Instagram">
    <Instagram size={18} className="text-slate-600 hover:text-green-600 transition" />
  </a>

  <a href="#" aria-label="LinkedIn">
    <Linkedin size={18} className="text-slate-600 hover:text-green-600 transition" />
  </a>

  <a href="#" aria-label="Facebook">
    <Facebook size={18} className="text-slate-600 hover:text-green-700 transition" />
  </a>
</div>

        </div>

        <div className="flex gap-12">
          <div>
            <p className="font-semibold mb-2">Product</p>
            <p className="text-sm ">Who it's for</p>
            <p className="text-sm ">Features</p>
            <p className="text-sm ">FAQ</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Company</p>
            <p className="text-sm ">About</p>
            <p className="text-sm ">Blog</p>
            <p className="text-sm ">Contact</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Legal</p>
            <p className="text-sm ">Terms & Conditions</p>
            <p className="text-sm ">Privacy Policy</p>
            <p className="text-sm ">Cookie Policy</p>
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
