import React from "react";
import s from "./OwnerCard.module.scss";
import { Link } from "react-router-dom";
import { routes } from "../../scenes/router";

const OwnerCard = ({ avatar, fullName, location, id }) => {
  return (
    <div className={s.ownerCard}>
      <div className={s.topBlock}>
        <img className={s.avatar} src={avatar} alt="avatar" />
      </div>
      <div className={s.bottomBlock}>
        <Link to={`${routes.users}/${id}/products`}>
          <span className={s.fullName}>{fullName}</span>
        </Link>
        <span className={s.location}>{location}</span>
      </div>
    </div>
  );
};

export default OwnerCard;
