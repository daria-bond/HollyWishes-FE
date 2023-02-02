import React, { FC } from "react";
import "./ProductCard.scss";
import Button from "../../../../ui/Button/Button";

interface IProps {
  name: string;
  price: number;
  quantity: number;
  onClick: () => void;
}

const ProductCard: FC<IProps> = ({ name, price, quantity, onClick }) => {
  return (
    <div className={"product-card"}>
      <h3 className="product-card__product-name">{name}</h3>
      <h4 className="product-card__product-price">Цена: {price}₽</h4>
      <h4 className="product-card__product-quantity">
        Количество: {quantity}шт
      </h4>
      {quantity === 0 && (
        <div className="product-card__product-quantity-zero">
          Товар скоро появится
        </div>
      )}
      {quantity > 0 && <Button title="Купить" onClick={onClick} />}
    </div>
  );
};

export default ProductCard;
