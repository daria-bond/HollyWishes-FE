import React, { FC, useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import ProductCard from "../ProductCard/ProductCard";
import { removeMoney } from "../../../MoneyReceiver/store/moneyReducer";
import { decrementProductQuantity } from "../../store/reducer";
import "../ProductsList/ProductsList.scss";
import ModalBox from "../../../../ui/Modal/Modal";

export const ProductsList: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState<JSX.Element>(<></>);
  const products = useAppSelector((state) => state.products);
  const moneyAmount = useAppSelector((state) => state.moneyAmount);
  const dispatch = useAppDispatch();

  const handleClose = () => setOpenModal(false);

  const onClick = useCallback(
    (id: number, price: number, name: string) => {
      if (moneyAmount >= price) {
        dispatch(removeMoney(price));
        dispatch(decrementProductQuantity(id));
        setModalMessage(<div>Вы купили {name}</div>);
      } else {
        setModalMessage(<div>Денежек не хватает :(</div>);
      }
      setOpenModal(true);
    },
    [dispatch, moneyAmount]
  );

  return (
    <>
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
      <ModalBox
        onClose={handleClose}
        modalMessage={modalMessage}
        openModalBox={openModal}
      />
    </>
  );
};
