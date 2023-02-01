import React, { FC, useState } from "react";
import { MoneyReceiver } from "../../modules/MoneyReceiver";

const MainPage: FC = () => {
  const [amountMoney, setAmountMoney] = useState(0);

  return (
    <div>
      <MoneyReceiver amount={amountMoney} setAmount={setAmountMoney} />
    </div>
  );
};

export default MainPage;
