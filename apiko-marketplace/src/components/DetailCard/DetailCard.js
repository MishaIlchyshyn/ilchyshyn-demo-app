import React from "react";

import { Icon } from "../../Icon";

import s from "./DetailCard.module.scss";

const DetailCard = ({ item }) => {
  const date = {
    day: new Date(item.createdAt).toLocaleString("en-US", { weekday: "long" }),
    time: new Date(item.createdAt).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  return (
    <div className={s.product}>
      <div className={s.productCard}>
        <div className={s.photosContainer}>
          <img className={s.photos} src={item.photos} alt={item.title} />
          <div className={s.price}>${item.price}</div>
        </div>
        <div className={s.descriptContainer}>
          <div className={s.titleContainer}>
            <span className={s.title}>{item.title}</span>
            <span className={s.dateCreate}>{date.day + " " + date.time}</span>
            <div className={s.locationContainer}>
              <Icon name="location" size="12px" />
              <span className={s.location}>{item.location}</span>
            </div>
          </div>

          <div className={s.description}>{item.description}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
