import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { confirmSignUp, fetchUserAttributes } from "aws-amplify/auth";
import { infoLogFormatter } from "../../utils/logFormatter";
import { useNavigate } from "react-router-dom";

interface VerificationProps {
  email: string;
}

interface VerificationFormProps {
  email: string;
  verificationCode: string;
}

export default function Verification({ email }: VerificationProps) {
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [formDisabled, setFormDisabled] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function verifyEmailAddress(data: any) {
    setFormDisabled(true);
    const verificationFormData = data as VerificationFormProps;
    const request = {
      username: verificationFormData.email,
      confirmationCode: verificationFormData.verificationCode,
    };
    try {
      infoLogFormatter("Attempting to confirm user sign up...");
      const response = await confirmSignUp(request);
      if (response.isSignUpComplete) {
        infoLogFormatter("User confirmation is successful.");
        const userAttributes = await fetchUserAttributes();
        console.log(userAttributes);
        navigate("/onboarding");
      } else {
        throw new Error("Something went wrong while confirming user sign up.");
      }
    } catch (error: any) {
      console.error(error.message);
      setFormErrorMessage(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(verifyEmailAddress)}>
      {formErrorMessage && (
        <span className="error-text">{formErrorMessage}</span>
      )}

      <input
        readOnly={true}
        type="email"
        {...register("email", { required: true, value: email })}
      />

      {errors.email && <span>Email is required</span>}

      <input
        type="text"
        {...register("verificationCode", { required: true })}
      />

      {errors.verificationCode && <span>Verification Code is required</span>}

      <button type="submit" disabled={formDisabled}>
        Verify Email
      </button>
    </form>
  );
}
