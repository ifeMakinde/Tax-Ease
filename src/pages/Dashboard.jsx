import React from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { CheckCheck } from "lucide-react";

const container = {
  hidden: {
    opacity: 0,
    scale: 0.75,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

function Dashboard() {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/");
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="m-auto max-w-180 h-[80vh] mt-20 text-center flex flex-col justify-center gap-6 item-center shadow-xl bg-white rounded-3xl p-3 "
    >
      <div>
        <CheckCheck
          className="text-[#064E3B] p-6 rounded-full bg-[#f3f6f5] mx-auto"
          size={80}
          strokeWidth={1}
        />
      </div>
      <h3 className="text-base lg:text-[18px] mb-4">
        Welcome to <span className="font-semibold">Taxease !</span>
      </h3>

      <p className="text-gray-500 text-[14px] text-center lg:text-base mx-auto w-full md:w-130">
        We're currently building the full product experince so you can manage
        your tax and comply with ease 🏗️
      </p>

      <p className="text-gray-500 text-[14px] lg:text-base text-center">
        We’ll notify you once the dashboard is live
      </p>

      <motion.button
        whileTap={{ scale: 0.85 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
        className="capitalize mx-auto w-[90%] md:w-50 text-[14px] p-3 bg-[#064E3B] rounded-xl text-white cursor-pointer mb-8"
        onClick={handleNav}
      >
        Return to Home
      </motion.button>

      <p className="text-gray-400 text-[12px] mb-4">
        Thank you for joining in early - exciting thing are coming{" "}
      </p>
    </motion.div>
  );
}

export default Dashboard;
