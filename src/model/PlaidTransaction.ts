export interface PlaidTransaction {
  account_id: string;
  account_owner?: string;
  amount: Number;
  iso_currency_code: string;
  unofficial_currency_code?: string;
  category: string;
  check_number?: string;
  counterparties: Array<CounterParty>;
  date: string;
  datetime: string;
  authorized_date: string;
  authorized_datetime: string;
  location: {
    address: string;
    city: string;
    region: string;
    postal_code: string;
    country: string;
    lat: number;
    lon: number;
    store_number: string;
  };
  name: string;
  merchant_name: string;
  merchant_entity_id: string;
  logo_url: string;
  website: string;
  payment_meta: PaymentMeta;
  payment_channel: string;
  pending: boolean;
  pending_transaction_id: string;
  personal_finance_category: {
    primary: string;
    detailed: string;
    confidence_level: string;
  };
  personal_finance_category_icon_url: string;
  transaction_id: string;
  transaction_code?: string;
  transaction_type: string;
}

export type PaymentMeta = {
  by_order_of?: string;
  payee?: string;
  payer?: string;
  payment_method?: string;
  payment_processor?: string;
  ppd_id?: string;
  reason?: string;
  reference_number?: string;
};

export type CounterParty = {
  name: string;
  type: string;
  logo_url: string;
  website: string;
  entity_id: string;
  confidence_level: string;
};
