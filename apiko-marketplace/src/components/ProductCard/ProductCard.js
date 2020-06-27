import React from "react";
import s from "./styleProductCard.module.scss";

const ProductCard = ({ photos, title, price }) => {
  return (
    <div className={s.card}>
      <div className={s.blockPhoto}>
        {photos !== null ? (
          <img
            className={s.photos}
            src={
              photos.length === 0 || photos[0] === ""
                ? "https://avtoprigon.in.ua/wp-content/uploads/2017/07/Product-Innovation-Service-icon.jpg"
                : photos[0]
            }
            alt={title}
          />
        ) : (
          ""
        )}
      </div>
      <span className={s.title}>{title}</span>
      <span className={s.price}>${price}</span>
    </div>
  );
};

export default ProductCard;
