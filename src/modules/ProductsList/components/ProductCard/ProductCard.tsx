import React, { FC } from "react";
import "./ProductCard.scss";

const ProductCard: FC = () => {
  return (
    <div className="product-card">
      <h3 className="product-card__product-name">Name</h3>
      <h4 className="product-card__product-price">Price</h4>
    </div>
  );
};

export default ProductCard;
