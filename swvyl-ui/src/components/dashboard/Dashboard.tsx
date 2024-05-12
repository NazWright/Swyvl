import { useDispatch, useSelector } from "react-redux";
// import "./Dashboard.css";
import DashboardContent from "./DashboardContent";
import { default as accountsGetResponseJson } from "../../data/accountsGetResponse.json";
import { default as transactionSyncJson } from "../../data/transactionsGetResponse.json";
import { RootState } from "../../app/store";

interface DashboardProps {
  accessToken?: string;
}
function Dashboard({ accessToken }: DashboardProps) {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.authSlice);

  const { accounts } = accountsGetResponseJson;

  const transactions = transactionSyncJson.added;

  return (
    <div>
      <div className="home-page">
        <div className="div-3">
          <DashboardContent
            cardHolderName={`${user.given_name} ${user.family_name}`}
          />
          uo
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
