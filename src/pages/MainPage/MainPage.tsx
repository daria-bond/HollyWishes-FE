import React, { FC } from "react";
import { MoneyReceiver } from "../../modules/MoneyReceiver";
import { ProductsList } from "../../modules/ProductsList";
import { IssuanceOfChange } from "../../modules/IssuanceOfChange";

const MainPage: FC = () => {
  return (
    <div>
      <MoneyReceiver />
      <ProductsList />
      <IssuanceOfChange />
    </div>
  );
};

export default MainPage;
