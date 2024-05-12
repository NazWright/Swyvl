import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { constants } from "../../../../constants/applicationConstants";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { OnboardingStepsProps } from "../OnboardingStepsProps";
import { User } from "../../../../model/User";

export default function AddNewCardStepForm({
  handleCompletedStep,
}: OnboardingStepsProps) {
  const [last4ofCardNumber, setLast4ofCardNumber] = useState("****");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state as User);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function submitNewCardInformation(data: any) {
    console.info("Making request to backend to store user card information");
    try {
      /* TODO: Right now, a malicious user could enter in the same card information more than once. We should not allow the same card number to be entered into the database. */
      const request = {
        user_id: currentUser.sub || "unauthenticated",
        user_cards_id: uuidv4(),
        cardholder_name: data.cardHolderName,
        card_number: data.cardNumber,
        exp: data.exp,
        cvv: data.cvv,
        channel_id: "manual",
      };
      console.info(request);
      //   await API.post(constants.FINANCEAPI, "/user-cards", {
      //     body: request,
      //   });
      // store card information in redux.
      //   dispatch(setUserCards([request]));
      console.info(
        "Successfull API call to /user-cards to store user information."
      );
      console.info(
        "Add new card step complete, redirecting to choose your goals..."
      );
      handleCompletedStep();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitNewCardInformation)}>
        {/* card number field */}
        <div className="element-wrapper">
          <input
            type="number"
            className="uwallet-input h-100 w-100"
            maxLength={16}
            minLength={16}
            value={"4445939493949494"}
            {...register("cardNumber", { required: true })}
          />
          {errors["cardNumber"] && <span className="error-icon">x</span>}
        </div>
        {/* Card number field */}
        <div className="text-wrapper-20">Card Number</div>

        <div className="group-13">
          <div className="overlap-9 d-flex overflow-hidden">
            <input
              className="uwallet-input overflow-hidden"
              {...register("exp", { required: true })}
              value={"08/2024"}
            />
            {errors["exp"] && <span className="error-icon">x</span>}
          </div>

          <div className="overlap-10 d-flex">
            <input
              className="uwallet-input h-100 overflow-hidden d-flex align-items-center"
              type="number"
              maxLength={3}
              minLength={3}
              value={"546"}
              {...register("cvv", { required: true })}
            />
            {errors["cvv"] && <span className="error-icon">x</span>}
          </div>
          <div className="text-wrapper-23">CVV</div>
          <div className="text-wrapper-24">EXP</div>
        </div>
        <div className="overlap-11">
          <div className="group-14">
            <div className="rectangle-8 d-flex">
              <input
                className="uwallet-input h-100"
                {...register("cardHolderName", { required: true })}
                value={"Nazere Wright"}
              />
              {errors["cardHolderName"] && (
                <span className="error-icon">x</span>
              )}
            </div>
            <div className="text-wrapper-24">Name on Card </div>
          </div>
        </div>

        <button className="group-15 onboarding" type="submit">
          <div className="text-wrapper-26">Continue</div>
        </button>
      </form>
    </>
  );
}
