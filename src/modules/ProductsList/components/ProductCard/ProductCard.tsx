import React, { FC } from "react";
import "./ProductCard.scss";

const ProductCard: FC<IProduct> = ({ name, price, count }) => {
  return (
    <div className="product-card">
      <h3 className="product-card__product-name">{name}</h3>
      <h4 className="product-card__product-price">Цена: {price}₽</h4>
      <h4 className="product-card__product-price">Количество: {count}шт</h4>
    </div>
  );
};

export default ProductCard;
