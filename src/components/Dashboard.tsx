import { useDispatch, useSelector } from "react-redux";
import "./Dashboard.css";
import ProfileToolTip from "./ProfileToolTip";
import DashboardContent from "./DashboardContent";
import { default as accountsGetResponseJson } from "../data/accountsGetResponse.json";
import { default as transactionSyncJson } from "../data/transactionsGetResponse.json";
import { RootState } from "../app/store";

interface DashboardProps {
  accessToken?: string;
}

export default function Dashboard({ accessToken }: DashboardProps) {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.authSlice);

  const { accounts } = accountsGetResponseJson;

  const transactions = transactionSyncJson.added;

  return (
    <div>
      <div className="home-page">
        <div className="div-3">
          <DashboardContent
            accounts={accounts}
            transactions={transactions}
            cardHolderName={`${user.given_name} ${user.family_name}`}
          />
          <ProfileToolTip firstName={user.given_name} />
        </div>
      </div>
    </div>
  );
}
