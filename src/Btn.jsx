import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { MoveRight } from "lucide-react";

function Btn({ children }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/auth");
  }

  return (
    <Button
      className="capitalize text-[14px] lg:text-base px-4 py-4 lg:px-6 lg:py-6 bg-[#064E3B] rounded-lg text-white cursor-pointer"
      onClick={handleNavigate}
    >
      {children}
    </Button>
  );
}

export default Btn;
