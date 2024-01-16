import { PlaidAccount } from "./PlaidAccount";

export interface PlaidAccountsGetResponse {
  accounts: Array<PlaidAccount>;
  item: Item;
  request_id: string;
}

export type Item = {
  available_products: Array<string>;
  billed_products: Array<string>;
  consent_expiration_time?: null;
  error?: string | undefined;
  institution_id: string;
  item_id: string;
  webhook: string;
};
