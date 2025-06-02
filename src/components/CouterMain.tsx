// Должен выводить общее кол-во денег на всех счетах.
// Счетов должно быть до 5 штук.
// Блок с отображением всех счетов.


import type { Account } from "../types/account";

interface Props {
  account: Account;
}

const CounterMain = ({ account }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="pt-12">
      ${account.balance}
      </div>
    </div>
  );
};

export default CounterMain;
