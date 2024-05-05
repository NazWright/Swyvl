import React, { useState } from "react";
import { SignInProperties, SignInRequest } from "../AuthenticationProperties";
import { useForm } from "react-hook-form";
import inputBottomBorderImage from "../../../static/img/line-6.png";
import { signIn } from "aws-amplify/auth";

interface SignInFormProperties extends SignInProperties {}

export default function SignInForm({ setLoading }: SignInFormProperties) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: any) => {
    console.info("Checking user's sign in credentials... ");
    setLoading(true);
    try {
      const signInRequest = {
        username: data.email,
        password: data.password,
      } as SignInRequest;
      const signInResponse = await signIn(signInRequest);
      console.log(signInResponse);
      // const user = {
      //   username: authenticatedUserMeta.username,
      //   email: authenticatedUserMeta.attributes.email,
      //   phone_number: authenticatedUserMeta.attributes.phone_number,
      //   family_name: authenticatedUserMeta.attributes.family_name,
      //   given_name: authenticatedUserMeta.attributes.given_name,
      //   password: data.password,
      // };
      // dispatch(setUser(user));
      // //triggerVerification();
      // dispatch(setAuthenticated(true));
      //vebkat-7Jutfe-xawqif
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="overlap-91">
            <input
              className="authentication-form-control"
              placeholder="Enter Email Address"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="overlap-92">
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
          <button type="submit" className="authentication-button onboarding">
            <div className="text-wrapper-183">Log In</div>
          </button>
        </form>
      }
    </>
  );
}
