import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { storeUser, checkRegisteredUser } from "@/lib/storage";
// import Signup from "./Signup";

function SignUpForm({ switchStatus }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = { email, password };
  const [error, setError] = useState("");

  function handleSignUp(e) {
    e.preventDefault();

    // regex validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    if (!email || !password) {
      setError("All fields are required");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    // checks if the user already exist
    if (checkRegisteredUser(email)) setError("please login to your account");

    // otherwise, calls the store func and proceeds to store them..
    storeUser(user);
    alert("Successful! Login to your account.");
    switchStatus("login");

    // setEmail("");
    // setPassword("");
  }

  return (
    <div className="">
      <div className="flex flex-col justify-center items-between m-auto p-6 pt-2 max-w-110   ">
        <div className=" flex flex-col justify-center items-center text-center mb-2">
          <p className="text-[14px] lg:text-base">
            Welcome to Taxease, kindly register to get Started
          </p>
        </div>
        <CardContent>
          <form onSubmit={handleSignUp}>
            <FieldGroup className="gap-3">
              <Field className="">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="m@example.com"
                  className="focus:outline-none  focus:border focus:border-green-600"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  className="text-base"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Field>

              <div className="text-center">
                <p className="text-red-600 text-[14px]">{error}</p>
              </div>

              <Field>
                <Button type="submit" className="bg-[#064E3B] cursor-pointer">
                  Sign Up
                </Button>

                <FieldDescription className="text-center">
                  Already have an account ?
                  <button onClick={switchStatus} className="hover:underline">
                    Sign In
                  </button>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </div>
    </div>
  );
}

export default SignUpForm;
