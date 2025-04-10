export type AccountType = {
    value: string;
    label: string;
    icon: JSX.Element;
  };
  
  export type BankAccount = {
    id: string;
    name: string;
    balance: number;
    accountNumber: string;
    type: string;
  };