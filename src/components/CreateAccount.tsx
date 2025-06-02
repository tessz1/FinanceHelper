// src/components/AccountCreator.tsx
import { useState } from 'react';
import type { Account } from '../types/account';
import AccountDisplay from './AccountDisplay';

const AccountCreator = () => {
  const [account, setAccount] = useState<Account>({
    id: '1',
    name: 'Основной счёт',
    balance: 1000,
    currency: 'RUB',   
  });

  const updateBalance = () => {
    setAccount(prev => ({
      ...prev,
      balance: prev.balance + 100
    }));
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-xl mb-2 text-center ">Создатель счёта</h2>
      <button 
        onClick={updateBalance}
        className="bg-blue-500 text-white px-4 py-2 rounded w-1/4"
      >
        Пополнить на 100
      </button>
      <AccountDisplay account={account} />
    </div>
  );
};

export default AccountCreator;