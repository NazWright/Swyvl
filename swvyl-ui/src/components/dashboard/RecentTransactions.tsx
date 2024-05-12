import React from "react";
import debtToAccountIcon from "../../static/img/untitled-design-26-54.png";
import creditToAccountIcon from "../../static/img/untitled-design-26-51.png";

interface RecentTransactionProps {
  isExpense: boolean;
  amount: number;
  currency: string;
  merchant: string;
  dateAndTime: string;
}

function RecentTransaction({
  isExpense = true,
  amount,
  currency,
  merchant,
  dateAndTime,
}: RecentTransactionProps) {
  const amountSign = isExpense ? "-" : "+";
  const numberOfDecimalPlaces = 2;

  return (
    <div>
      <div className="overlap-group-6">
        <div className="group-24">
          <div className="icon" />
          <div className="element-march">{dateAndTime}</div>
          <div className="deposit-from-ATL">{merchant}</div>
          <div className="text-wrapper-43">{currency}</div>
          <div className={isExpense ? "element-6" : "element-7"}>
            {`${amountSign}${amount.toFixed(numberOfDecimalPlaces)}`}{" "}
          </div>
        </div>
        <img
          className="untitled-design-6"
          alt="Untitled design"
          src={isExpense ? debtToAccountIcon : creditToAccountIcon}
        />
      </div>
    </div>
  );
}

export default React.memo(RecentTransaction);
