import React from "react";
import Login from "@/components/Auth/Login";
import SignUp from "@/components/Auth/SignUp";
import { useState } from "react";

function Auth() {
  const [status, setStatus] = useState("login");

  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div>
          <h2 className="text-[20px] lg:text-[24px] font-bold mb-1">
            {status === "login" ? "Welcome Back!" : "Create an Account"}
          </h2>
        </div>

        <div>
          {status === "login" ? (
            <Login switchStatus={() => setStatus("signup")} />
          ) : (
            <SignUp switchStatus={() => setStatus("login")} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Auth;
