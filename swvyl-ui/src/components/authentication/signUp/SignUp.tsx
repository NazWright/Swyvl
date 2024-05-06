import React from "react";
import { SignUpProperties } from "../AuthenticationProperties";
import SignUpForm from "./SignUpForm";

export default function SignUp({
  setLoading,
  verificationHandler,
}: SignUpProperties) {
  return (
    <div className="mt-5">
      <SignUpForm setLoading={setLoading} />
    </div>
  );
}
