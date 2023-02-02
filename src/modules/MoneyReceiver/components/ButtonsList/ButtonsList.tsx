import React, { FC } from "react";
import Button from "../../../../ui/Button/Button";
import {
  banknoteDenominals,
  BanknoteEnum,
} from "../../../../store/types/banknoteTypes";
import "../ButtonsList/ButtonsList.scss";

interface IButtonList {
  array: BanknoteEnum[];
  onClick: (arg: BanknoteEnum) => void;
}

const ButtonsList: FC<IButtonList> = ({ array, onClick }) => {
  return (
    <div className="buttons-list-container">
      {array.map((element) => (
        <Button
          title={banknoteDenominals[element]}
          onClick={() => onClick(element)}
          key={element}
        />
      ))}
    </div>
  );
};

export default ButtonsList;
