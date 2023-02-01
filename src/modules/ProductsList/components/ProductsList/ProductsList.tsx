import React, { FC, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import ProductCard from "../ProductCard/ProductCard";
import { removeMoney } from "../../../MoneyReceiver/store/moneyReducer";
import { decrementProductQuantity } from "../../store/reducer";
import "../ProductsList/ProductsList.scss";

interface IProps {
  addProductsToOrder: (products: number[]) => void;
}

export const ProductsList: FC<IProps> = ({ addProductsToOrder }) => {
  const products = useAppSelector((state) => state.products);
  const moneyAmount = useAppSelector((state) => state.moneyAmount);
  const dispatch = useAppDispatch();

  const onClick = useCallback(
    (id: number, price: number, name: string) => {
      if (moneyAmount >= price) {
        dispatch(removeMoney(price));
        dispatch(decrementProductQuantity(id));
        addProductsToOrder([id]);
        alert(`Вы купили ${name}`);
      } else {
        alert("Денежек не хватает :(");
      }
    },
    [addProductsToOrder, dispatch, moneyAmount]
  );

  return (
    <div className="product-list-container">
      {products.map((product) => (
        <ProductCard
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
          onClick={() => onClick(product.id, product.price, product.name)}
        />
      ))}
    </div>
  );
};
