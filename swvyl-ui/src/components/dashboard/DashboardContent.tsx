import React, { useState } from "react";
import { PlaidTransaction } from "../../model/PlaidTransaction";
import { PlaidAccount } from "../../model/PlaidAccount";

interface DashboardContentProps {
  accounts?: Array<PlaidAccount>;
  transactions?: Array<PlaidTransaction>;
  cardHolderName: string;
}

export default function DashboardContent({
  cardHolderName,
}: DashboardContentProps) {
  return (
    <div>
      DashboardContent
      <button>Log out</button>
    </div>
  );
}
