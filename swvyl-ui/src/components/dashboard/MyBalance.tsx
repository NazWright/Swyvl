import React from "react";

interface MyBalanceProps {
  balance: number;
}

export default function MyBalance({ balance }: MyBalanceProps) {
  return (
    <>
      <div className="BG" />
      <p className="element-20">
        <span className="span">$</span>
        <span className="text-wrapper-49">{balance}</span>
      </p>
      <div className="text-wrapper-50">My Balance</div>
      <div className="group-42">
        <div className="waves-4" />
      </div>
    </>
  );
}
