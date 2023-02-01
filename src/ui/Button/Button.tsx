import React, { FC } from "react";

interface IButton {
  title: string | number;
  onClick: () => void;
}

const Button: FC<IButton> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
