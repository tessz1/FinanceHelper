import { useState, useEffect } from "react";
import "./index.css";
import "./styles/fonts.css";
import CounterMain from "./components/CouterMain";
import { AccountForm } from "./components/AccountForm";
import type { Account } from "./types/account"; 

function App() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const maxAccounts = 5;
  
  useEffect(() => {
    const saved = localStorage.getItem("accounts");
    if (saved) setAccounts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  const handleAddAccount = (newAccount: Account) => {
    setAccounts([...accounts, newAccount]);
  };

  return (
    <div>
      <CounterMain
        account={{ id: 1, name: "Основной", balance: 1000, currency: "USD" }}
      />
      <div>
        <AccountForm
          onAdd={handleAddAccount}
          maxAccounts={maxAccounts}
          currentCount={accounts.length}
        />
      </div>
    </div>
  );
}

export default App;
