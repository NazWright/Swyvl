import React, { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { constants } from "../../constants/applicationConstants";
import { infoLogFormatter, errorLogFormatter } from "../../utils/logFormatter";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";
import "./Dashboard.css";
import ProfileToolTip from "./ProfileToolTip";
import DashboardContent from "./DashboardContent";
import { default as accountsGetResponseJson } from "../../data/accountsGetResponse.json";
import { default as transactionSyncJson } from "../../data/transactionsGetResponse.json";
import { default as incomesJson } from "../../data/incomesGetResponse.json";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { signOut } from "aws-amplify/auth";
import StatusBar from "./StatusBar";
// The usePlaidLink hook manages Plaid Link creation
// It does not return a destroy function;
// instead, on unmount it automatically destroys the Link instance

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function onSignOut() {
    try {
      setLoading(true);
      await signOut();
      navigate("/");
      infoLogFormatter(
        "User has been successfully signed out. Redirecting to sign in..."
      );
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  }

  const transactions = transactionSyncJson.added;
  const accounts = accountsGetResponseJson.accounts;
  const incomes = incomesJson.bank_income;

  return (
    <div
      className={
        loading ? constants.flexFullWidthHeightCenteredClassName : undefined
      }
    >
      {!loading && (
        <div className="home-page">
          <div className="div-3">
            {accounts.length > 0 && (
              <DashboardContent
                transactions={transactions}
                accounts={accounts}
                income={incomes}
                cardHolderName={`Nazere Wright`}
                addNewCardHandler={(event: React.MouseEvent) => {
                  console.log("added card");
                }}
              />
            )}
            <ProfileToolTip firstName="Nazere" />
            <Button onClick={onSignOut}>Sign Out</Button>
          </div>
        </div>
      )}
      {loading && <CircularProgress />}
    </div>
  );
}
