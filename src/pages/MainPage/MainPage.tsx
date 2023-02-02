import React, { FC } from "react";
import { MoneyReceiver } from "../../modules/MoneyReceiver";
import { ProductsList } from "../../modules/ProductsList";
import { IssuanceOfChange } from "../../modules/IssuanceOfChange";
import "../MainPage/MainPage.scss";

const MainPage: FC = () => {
  return (
    <div className="main-page-container">
      <ProductsList />
      <div>
        <MoneyReceiver />
        <IssuanceOfChange />
      </div>
    </div>
  );
};

export default MainPage;
