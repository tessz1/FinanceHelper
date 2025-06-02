export interface Account {
  id: number;
  name: string;
  balance: number;
  currency: "USD" | "RUB" | "GPB" | "EUR";
}
