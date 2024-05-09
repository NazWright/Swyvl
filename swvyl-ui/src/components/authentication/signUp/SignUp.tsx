import React, { useState } from "react";
import { SignUpProperties } from "../AuthenticationProperties";
import SignUpForm from "./SignUpForm";

export default function SignUp({
  setLoading,
  verificationHandler,
}: SignUpProperties) {
  return (
    <div className="mt-5">
      <SignUpForm
        setLoading={setLoading}
        verificationHandler={verificationHandler}
      />
    </div>
  );
}
