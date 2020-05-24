import React from "react";

import s from "./ProfileUser.module.scss";

const ProfileUser = ({ avatar, fullName, location }) => (
  <div className={s.user}>
    <img src={avatar} className={s.avatar} alt="user avatar" />
    <span className={s.fullName}>{fullName}</span>
    <span className={s.location}>{location}</span>
  </div>
);

export default ProfileUser;
