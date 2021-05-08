export interface Order {
  id: string;
  status: string;
  purchase_units: any[];
  payer: {
    given_name: string;
    surname: string;
    email_address: string;
  };
}
