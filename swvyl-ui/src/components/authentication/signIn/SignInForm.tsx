import React, { useState } from "react";
import { SignInProperties, SignInRequest } from "../AuthenticationProperties";
import { useForm } from "react-hook-form";
import { fetchUserAttributes, signIn } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../app/features/authSlice";
import { User } from "../../../model/User";
import { infoLogFormatter } from "../../../utils/logFormatter";

interface SignInFormProperties extends SignInProperties {}

export default function SignInForm({ setLoading }: SignInFormProperties) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    console.info("Checking user's sign in credentials... ");
    setLoading(true);
    try {
      const signInRequest = {
        username: data.email,
        password: data.password,
      } as SignInRequest;
      const signInResponse = await signIn(signInRequest);
      if (signInResponse.isSignedIn) {
        const userAttributes = await fetchUserAttributes();
        const authenticatedUser = userAttributes as User;
        dispatch(setUser(authenticatedUser));
        infoLogFormatter(
          "Successfully retrieved attributes, signing in user..."
        );
        navigate("/dashboard");
      }
      console.log(signInResponse);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "There is no user found with provided email and password."
      );
      setLoading(false);
    }
  };

  return (
    <>
      {
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-100 d-flex flex-column justify-content-center"
        >
          <div>
            <input
              className="authentication-form-control"
              placeholder="Enter Email Address"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="mt-3">
            <input
              className="authentication-form-control"
              placeholder="Enter Password"
              type="password"
              {...register("password", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}
          </div>

          {/* Button to login*/}
          <button
            type="submit"
            className="authentication-button onboarding mt-4"
          >
            <div className="text-wrapper-183">Log In</div>
          </button>
        </form>
      }
    </>
  );
}
