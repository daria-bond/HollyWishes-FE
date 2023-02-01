import React, { FC } from "react";
import Button from "../../../../ui/Button/Button";
import {
  banknoteDenominals,
  BanknoteEnum,
} from "../../../../store/types/banknoteTypes";

interface IButtonList {
  array: BanknoteEnum[];
  onClick: (arg: BanknoteEnum) => void;
}

const ButtonsList: FC<IButtonList> = ({ array, onClick }) => {
  return (
    <div>
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
