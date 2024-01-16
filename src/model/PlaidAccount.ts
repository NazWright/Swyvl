export interface PlaidAccount {
  account_id: string;
  balances: Balance;
  mask: string;
  name: string;
  official_name: string;
  subtype: string;
  type: string;
}

export type Balance = {
  available: number;
  current: number;
  iso_currency_code: string;
  limit?: null;
  unofficial_currency_code?: null;
};
