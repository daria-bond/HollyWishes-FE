import React, { FC, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import ButtonsList from "../ButtonsList/ButtonsList";
import { BanknotesForReceiving } from "../../constants/constants";
import {
  banknoteDenominals,
  BanknoteEnum,
} from "../../../../store/types/banknoteTypes";
import { addBanknote } from "../../store/banknotesReducer";
import { addMoney } from "../../store/moneyReducer";

export const MoneyReceiver: FC = () => {
  const dispatch = useAppDispatch();
  const moneyAmount = useAppSelector((state) => state.moneyAmount);

  const onClick = useCallback(
    (banknote: BanknoteEnum) => {
      dispatch(addBanknote({ banknote: banknote, count: 1 }));
      dispatch(addMoney(banknoteDenominals[banknote]));
    },
    [dispatch]
  );

  return (
    <div>
      <ButtonsList array={BanknotesForReceiving} onClick={onClick} />
      <h4>Внесено: {moneyAmount}</h4>
    </div>
  );
};
