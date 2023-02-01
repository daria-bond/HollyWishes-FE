import React, { FC, useCallback, useState } from "react";
import { MoneyReceiver } from "../../modules/MoneyReceiver";
import { ProductsList } from "../../modules/ProductsList";

const MainPage: FC = () => {
  const [orderProducts, setOrderProducts] = useState<number[]>([]);

  const addProductsToOrder = useCallback(
    (ids: number[]) => {
      setOrderProducts([...orderProducts, ...ids]);
    },
    [orderProducts]
  );

  return (
    <div>
      <MoneyReceiver />
      <ProductsList addProductsToOrder={addProductsToOrder} />
    </div>
  );
};

export default MainPage;
