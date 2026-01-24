import React from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/");
  };
  return (
    <div>
      <h3 className="text-2xl">Welcome , This page is currently in build </h3>
      {/* <p>This page is currently in build</p> */}
      <button
        className="cursor-pointer underline text-blue-400"
        onClick={handleNav}
      >
        go back
      </button>
    </div>
  );
}

export default Product;
