import React, { useState } from "react";
import SendRequestMoney from "./SendRequestMoney";
import AdditionalCards from "./AdditionalCards";
import Footer from "../shared/Footer";
import MyBalance from "./MyBalance";
import CreditCard from "../shared/CreditCard";
import RecentTransactionsList from "./RecentTransactionsList";
import SpendingActivity from "./SpendingActivity";
import { PlaidAccount } from "../../model/PlaidAccount";
import { PlaidTransaction } from "../../model/PlaidTransaction";

interface DashboardContentProps {
  addNewCardHandler: (event: React.MouseEvent) => void;
  accounts: PlaidAccount[];
  cardHolderName: string;
  transactions: PlaidTransaction[];
  income: any;
}

export default function DashboardContent({
  addNewCardHandler,
  accounts,
  cardHolderName,
  transactions,
  income,
}: DashboardContentProps) {
  const [selectedAccountId, setSelectedAccountId] = useState(
    accounts[0]["account_id"]
  );

  let accountColor; // consistency for the card color, to my balance, spending activity, etc..

  const selectedAccount = accounts.filter(
    (account: any) => account["account_id"] === selectedAccountId
  )[0];

  const { balances } = selectedAccount;

  const selectCard = React.useCallback(
    function (event: React.MouseEvent, accountId: string) {
      event.preventDefault();
      if (accountId !== selectedAccountId) {
        console.info("loading information for accountId: ", accountId);
        setSelectedAccountId(accountId);
      }
    },
    [selectedAccountId]
  );

  return (
    <>
      <div className="overlap-14">
        {/*Dashboard content start */}
        <div className="overlap-15">
          <SpendingActivity />
          <SendRequestMoney />
          <RecentTransactionsList
            expenses={transactions.filter(
              (transaction) => transaction.account_id === selectedAccountId
            )}
            incomes={income}
          />
          {/* Credit card */}
          <div className="scroll-group-3">
            {accounts.map((account: any, index: number) => {
              const cardIndex = index === 0 ? 3 : 2;
              const accountId = account["account_id"];
              return (
                <CreditCard
                  key={accountId}
                  index={cardIndex}
                  cardNumber={
                    account.mask ||
                    account.card_number.substring(
                      account.card_number.length - 4
                    )
                  }
                  validThru={"** / **"}
                  cardHolderName={cardHolderName}
                  onClickHandler={(event: React.MouseEvent) =>
                    selectCard(event, accountId)
                  }
                />
              );
            })}
          </div>
          {/* Credit card End */}
          {/* TODO: Update balance type to be dynamic */}
          <MyBalance balance={selectedAccount.balances.available || 0} />
        </div>
        <AdditionalCards addNewCardHandler={addNewCardHandler} />
        <Footer />
      </div>
    </>
  );
}
