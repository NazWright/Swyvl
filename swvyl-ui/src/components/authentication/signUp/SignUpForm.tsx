import React from "react";
import { useForm } from "react-hook-form";
import { SignInProperties } from "../AuthenticationProperties";

interface SignUpFormProperties extends SignInProperties {}

export default function SignUpForm({ setLoading }: SignUpFormProperties) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data: any) {}

  //   TODO: Need to add the ability to submit a photo when registering

  const formInputs = [
    {
      name: "firstName",
      type: "text",
      placeholder: "Enter your first name",
    },
    {
      name: "lastName",
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
    {
      name: "confirm-password",
      type: "password",
      placeholder: "Please confirm your password",
    },
  ];

  return (
    <form className="signup-form">
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
