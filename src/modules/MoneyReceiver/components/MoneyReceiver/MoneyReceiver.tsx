import React, { FC, useCallback } from "react";
import { useAppDispatch } from "../../../../hooks/redux";
import ButtonsList from "../ButtonsList/ButtonsList";
import { BanknotesForReceiving } from "../../constants/constants";
import {
  banknoteDenominals,
  BanknoteEnum,
} from "../../../../store/types/banknoteTypes";
import { addBanknote } from "../../store/reducer";

interface IProps {
  amount: number;
  setAmount: (amount: number) => void;
}

export const MoneyReceiver: FC<IProps> = ({ amount, setAmount }) => {
  const dispatch = useAppDispatch();

  const onClick = useCallback(
    (banknote: BanknoteEnum) => {
      dispatch(addBanknote({ banknote: banknote, count: 1 }));
      setAmount(amount + banknoteDenominals[banknote]);
    },
    [amount, dispatch, setAmount]
  );

  return (
    <div>
      <ButtonsList array={BanknotesForReceiving} onClick={onClick} />
      <h4>Внесено: {amount}</h4>
    </div>
  );
};
