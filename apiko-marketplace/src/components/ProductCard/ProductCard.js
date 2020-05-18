import React from "react";
import s from "./styleProductCard.module.scss";

const ProductCard = ({ photos, title, price }) => {
  return (
    <div className={s.card}>
      <div className={s.blockPhoto}>
        <img className={s.photos} src={photos} alt={title} />
      </div>
      <span className={s.title}>{title}</span>
      <span className={s.price}>${price}</span>
    </div>
  );
};

export default ProductCard;
