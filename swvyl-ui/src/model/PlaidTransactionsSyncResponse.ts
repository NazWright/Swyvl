import { PlaidTransaction } from "./PlaidTransaction";

export interface PlaidTransactionSyncResponse {
  added: Array<PlaidTransaction>;
  modified: Array<PlaidTransaction>;
  removed: Array<{ transaction_id: string }>;
  next_cursor: string;
  has_more: boolean;
  request_id: string;
}
