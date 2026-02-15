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
import { useNavigate } from "react-router-dom";
import { Login, checkRegisteredUser } from "@/lib/storage";
import { toast } from "sonner";

function LoginForm({ switchStatus }) {
  // USER
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = { email, password };
  const navigate = useNavigate();

  // states
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    if (!email || !password) {
      setError("All field are required");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    // Check if user  email already exists in localStorage
    const registeredUser = checkRegisteredUser(email);

    if (!registeredUser) {
      setError("Account not found. Please sign up first");
      setTimeout(() => {
        setError("");
      }, 1000);
      return;
    }

    // Check if password matches
    if (registeredUser.password !== password) {
      setError("Invalid email or password");
      setTimeout(() => {
        setError("");
      }, 1000);
      return;
    }

    Login(user);
    setIsLoggedIn(true);
    toast.success("Login Successful!", {
      position: "top-center",
    });
    setEmail("");
    setPassword("");
    setError("");
    setTimeout(()=> {
      navigate("/dashboard");
    }, 4000)
  }

  return (
    <div className="">
      <div className="flex flex-col justify-center items-between m-auto p-6 pt-2 max-w-100   ">
        <div className=" flex flex-col justify-center items-center text-center mb-2">
          <p className="text-[14px] lg:text-base">
            Enter your email below to login to your account
          </p>
        </div>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup className="gap-3">
              <Field className="">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="m@example.com"
                  // required
                  className="outline outline-black focus:border focus:border-green-600"
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
                  // required
                  className="text-[20px] outline outline-black focus:border focus:border-green-600"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Field>

              <div className="text-center">
                <p className="text-red-600 text-[14px]">{error}</p>
              </div>

              <Field>
                <Button type="submit" className="bg-[#064E3B] cursor-pointer">
                  Login
                </Button>

                <FieldDescription className="text-center">
                  Don't have an account?
                  <button onClick={switchStatus} className="hover:underline">
                    Sign up
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

export default LoginForm;
