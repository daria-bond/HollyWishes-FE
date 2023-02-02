import React, { FC } from "react";
import "../Button/Button.scss";

interface IButton {
  title: string | number;
  onClick: () => void;
}

const Button: FC<IButton> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="ui-button">
      {title}
    </button>
  );
};

export default Button;
