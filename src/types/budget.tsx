export interface Budget {
  categoryId: string;
  limit: number;
  period: "month" | "week";
}

