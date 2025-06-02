import { useState } from "react";
import type { Account } from "../types/account";

const CURRENCIES = ["USD", "RUB", "GPB", "EUR"] as const;

interface Props {
    onAdd: (account: Account) => void;
    maxAccounts: number;
    currentCount: number;
}

export const AccountForm = ({ onAdd, maxAccounts, currentCount }: Props) => {
    const [form, setForm] = useState<Omit<Account, "id">>({
        name: "",
        balance: 0,
        currency: "RUB",
    });
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (currentCount >= maxAccounts) {
            setError(`Максимум ${maxAccounts} аккаунтов`);
            return;
        }

        onAdd({
            ...form,
            id: Date.now(), // временный ID
        });

        setForm({ name: "", balance: 0, currency: "RUB" });
        setError("");
    };

    // Важно: компонент должен возвращать JSX!
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Название аккаунта"
            />
            <input
                type="number"
                value={form.balance}
                onChange={(e) => setForm({ ...form, balance: +e.target.value })}
                placeholder="Баланс"
            />
            <select
                value={form.currency}
                onChange={(e) => 
                    setForm({ ...form, currency: e.target.value as typeof CURRENCIES[number] })
                }
            >
                {CURRENCIES.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <button type="submit">Добавить</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
};