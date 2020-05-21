import React from "react";
import s from "./OwnerCard.module.scss";

const Owner = ({ avatar, fullName, location }) => {
  return (
    <div className={s.ownerCard}>
      <div className={s.topBlock}>
        <img className={s.avatar} src={avatar} alt="avatar" />
      </div>
      <div className={s.bottomBlock}>
        <span className={s.fullName}>{fullName}</span>
        <span className={s.location}>{location}</span>
      </div>
    </div>
  );
};

export default Owner;
