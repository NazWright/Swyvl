import React from "react";
import SignInForm from "./SignInForm";
import { SignInProperties } from "../AuthenticationProperties";

export default function SignIn({ setLoading }: SignInProperties) {
  return <SignInForm setLoading={setLoading} />;
}
