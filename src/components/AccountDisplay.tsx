import type { Account } from '../types/account';

interface Props {
  account: Account;
}

const AccountDisplay = ({ account }: Props) => {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded max-h-1/2">
      <h3 className="font-bold">{account.name}</h3>
      <p>Баланс: {account.balance} {account.currency}</p>
      <p className="text-sm text-gray-500">ID: {account.id}</p>
    </div>
  );
};

export default AccountDisplay;