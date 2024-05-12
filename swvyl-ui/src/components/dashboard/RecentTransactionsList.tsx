import React, { useState } from "react";
import allRecentTransactionsButton from "../../static/img/path-32.png";
import expensesIcon from "../../static/img/14-7.png";
import incomesIcon from "../../static/img/14-6.png";
import RecentTransactions from "./RecentTransactions";
import "./Dashboard.css";
import activeButtonImagePath from "../../static/img/path-30-1.png";

interface RecentTransactionsListProps {
  expenses: [any];
  incomes: [any];
}

export default function RecentTransactionsList({
  expenses,
  incomes,
}: RecentTransactionsListProps) {
  /* all | expenses | incomes */
  const [selectedFilter, setSelectedFilter] = useState("all");

  function filterTransactions() {
    const expensesWithFlag = expenses.map((expense) => {
      return {
        ...expense,
        isExpense: true,
      };
    });

    const incomesWithFlag = incomes.map((income) => {
      return {
        ...income,
        isExpense: true,
      };
    });

    return selectedFilter === "all"
      ? [...expensesWithFlag, ...incomesWithFlag]
      : selectedFilter === "expenses"
      ? expensesWithFlag
      : incomesWithFlag;
  }

  const displayedTransactions = filterTransactions();

  return (
    <div>
      <div className="payment-history">Recent Transactions</div>

      <>
        <button
          className={`payment-history-2 recent-transactions-button onboarding ${
            selectedFilter.includes("all") ? "active" : ""
          }`}
          style={{ border: "none" }}
          onClick={(event) => {
            setSelectedFilter("all");
          }}
        >
          All
        </button>
      </>

      <>
        <button
          className={`rectangle-13 onboarding recent-transactions-button ${
            selectedFilter.includes("incomes") ? "active" : ""
          }`}
          style={{ border: "none" }}
        />

        <div className="overlap-group-wrapper">
          <button
            style={{ border: "none" }}
            onClick={(event) => {
              setSelectedFilter("incomes");
            }}
          >
            <div className="payment-history-3">Incomes</div>
            <img className="element-3" alt="Element" src={incomesIcon} />
          </button>
        </div>
      </>

      <div className="scroll-group-2">
        {expenses.map((transaction) => {
          return (
            <RecentTransactions
              key={transaction.transaction_id}
              merchant={transaction.merchant_name}
              amount={transaction.amount}
              currency={transaction.iso_currency_code}
              dateAndTime={transaction.authorized_datetime}
              isExpense={transaction.isExpense}
            />
          );
        })}
      </div>

      <>
        <button
          className={`rectangle-14 onboarding recent-transactions-button ${
            selectedFilter.includes("expenses") ? "active" : ""
          }`}
          style={{ border: "none" }}
        />
        <div className="group-37">
          <button
            style={{ border: "none" }}
            onClick={(event) => {
              setSelectedFilter("expenses");
            }}
          >
            <div className="payment-history-4">Expenses</div>
            <img className="element-12" alt="Element" src={expensesIcon} />
          </button>
        </div>
      </>
    </div>
  );
}
