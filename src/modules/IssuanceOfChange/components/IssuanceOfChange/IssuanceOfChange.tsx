import React, { FC, useCallback, useState } from "react";
import Button from "../../../../ui/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import {
  banknoteDenominals,
  BanknoteEnum,
  IBanknotesState,
} from "../../../../store/types/banknoteTypes";
import { AllowingChangeBanknotes } from "../../constants/constants";
import { setMoney } from "../../../MoneyReceiver/store/moneyReducer";
import { decrementProductQuantity } from "../../../ProductsList/store/reducer";
import { setBanknotes } from "../../../MoneyReceiver/store/banknotesReducer";
import { IProduct } from "../../../../store/types/productTypes";
import ModalBox from "../../../../ui/Modal/Modal";

interface IBanknoteForChange {
  type: BanknoteEnum;
  count: number;
}

const getPossibleChangeByBanknote = (
  banknote: BanknoteEnum,
  moneyAmount: number,
  availableBanknotes: number
) => {
  const denominal = banknoteDenominals[banknote];

  const neededNumberOfBanknotes = Math.floor(moneyAmount / denominal);
  const numberOfBanknotes = Math.min(
    neededNumberOfBanknotes,
    availableBanknotes
  );

  const remainder = moneyAmount - numberOfBanknotes * denominal;
  return [numberOfBanknotes, remainder];
};

const usedBanknotesToMessage = (usedBanknotes: IBanknoteForChange[]) => {
  if (usedBanknotes.length === 0) return <></>;

  return (
    <ul>
      {usedBanknotes.map(({ type, count }) => (
        <li key={type}>{`${banknoteDenominals[type]}₽ - ${count}шт`}</li>
      ))}
    </ul>
  );
};

const getMessage = (
  remainder: number,
  usedBanknotes: IBanknoteForChange[],
  productName?: string
): JSX.Element => {
  if (!productName && usedBanknotes.length === 0)
    return (
      <div>
        Сейчас нет подходящих купюр для выдачи сдачи, обратитесь в наш
        колл-центр или купите что-то еще и попробуйте снова :)
      </div>
    );

  const banknoteMessage = usedBanknotesToMessage(usedBanknotes);
  return (
    <div>
      <div>Выдано купюр</div>
      {usedBanknotes && <div>{banknoteMessage}</div>}
      {productName && <div>Выдан товар: {productName}</div>}
    </div>
  );
};

export const IssuanceOfChange: FC = () => {
  const dispatch = useAppDispatch();

  const moneyAmount = useAppSelector((state) => state.moneyAmount);
  const banknotes = useAppSelector((state) => state.banknotes);
  const products = useAppSelector((state) => state.products);
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState<JSX.Element>(<></>);

  const handleClose = () => setOpenModal(false);

  const getReturnBanknotes = useCallback(() => {
    let remainderAmount = moneyAmount;
    const usedBanknotes: IBanknoteForChange[] = [];
    const sortedAllowingChangeBanknotes = AllowingChangeBanknotes.sort(
      (b) => banknoteDenominals[b]
    );

    for (const banknote of sortedAllowingChangeBanknotes) {
      const [banknotesNumber, remainder] = getPossibleChangeByBanknote(
        banknote,
        remainderAmount,
        banknotes[banknote]
      );

      banknotesNumber > 0 &&
        usedBanknotes.push({ type: banknote, count: banknotesNumber });

      remainderAmount = remainder;

      if (remainder === 0) break;
    }
    return {
      usedBanknotes: usedBanknotes,
      remainderAmount: remainderAmount,
    };
  }, [banknotes, moneyAmount]);

  const returnMoney = useCallback(() => {
    const banknotesWithRemainder = getReturnBanknotes();
    const usedBanknotes = banknotesWithRemainder.usedBanknotes;
    let remainderAmount = banknotesWithRemainder.remainderAmount;

    let productForChange: IProduct | undefined = undefined;
    if (remainderAmount !== 0) {
      productForChange = products.find(
        (p) => p.quantity > 0 && p.price === remainderAmount
      );
    }
    if (productForChange) {
      dispatch(decrementProductQuantity(productForChange.id));
      remainderAmount -= productForChange.price;
    }

    setModalMessage(
      getMessage(remainderAmount, usedBanknotes, productForChange?.name)
    );

    setOpenModal(true);

    const updatedBanknotes: Partial<IBanknotesState> = {};

    for (const usedBanknote of usedBanknotes) {
      updatedBanknotes[usedBanknote.type] =
        banknotes[usedBanknote.type] - usedBanknote.count;
    }

    dispatch(setMoney(remainderAmount));
    dispatch(setBanknotes(updatedBanknotes));
  }, [banknotes, dispatch, getReturnBanknotes, products]);

  return (
    <div>
      <Button
        title={"Верните мне мои деньги!"}
        onClick={() => {
          returnMoney();
        }}
      />
      <ModalBox
        onClose={handleClose}
        modalMessage={modalMessage}
        openModalBox={openModal}
      />
    </div>
  );
};
