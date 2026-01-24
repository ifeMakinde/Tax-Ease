import React from "react";
// import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Login({ switchStatus }) {
  return <SignupForm switchStatus={switchStatus} />;
}

export default Login;
