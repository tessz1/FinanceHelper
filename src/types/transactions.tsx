export interface Transactions {
    id: string,
    amount: number,
    category: string,
    date: Date,
    type: 'income' | 'expense';
    description?: string
}

