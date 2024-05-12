import React from "react";
import { useForm } from "react-hook-form";
import { SignUpProperties } from "../AuthenticationProperties";
import { infoLogFormatter } from "../../../utils/logFormatter";
import { signUp } from "aws-amplify/auth";
import { setUser } from "../../../app/features/authSlice";

interface SignUpFormProperties extends SignUpProperties {}

export default function SignUpForm({
  setLoading,
  verificationHandler,
}: SignUpFormProperties) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {
    setLoading(true);
    infoLogFormatter(
      "Attempting to sign up new user with provided credentials..."
    );
    try {
      // TODO: add ability to upload a picture with sign up
      const signUpResponse = await signUp({
        username: data.email,
        password: data.password,
        options: {
          userAttributes: {
            email: data.email,
            family_name: data.familyName,
            given_name: data.givenName,
            picture: "null",
          },
        },
      });

      infoLogFormatter("User has been successfully created...");
      setLoading(false);
      verificationHandler(data.email);
    } catch (error) {
      console.error(error);
    }
  }

  //   TODO: Need to add the ability to submit a photo when registering

  const formInputs = [
    {
      name: "givenName",
      type: "text",
      placeholder: "Enter your first name",
    },
    {
      name: "familyName",
      type: "text",
      placeholder: "Enter your last name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email address",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  return (
    <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
      {formInputs.map((input) => {
        return (
          <div>
            <input
              className="authentication-form-control mb-3"
              placeholder={input.placeholder}
              type={input.type}
              {...register(input.name, { required: true })}
            />
            {errors[input.name] && (
              <span className="error-text">
                {errors[input.name]?.message?.toString() ||
                  "There was a problem with your input"}
              </span>
            )}
          </div>
        );
      })}

      <button type="submit" className="authentication-button onboarding">
        <div className="text-wrapper-183">Sign Up</div>
      </button>
    </form>
  );
}
