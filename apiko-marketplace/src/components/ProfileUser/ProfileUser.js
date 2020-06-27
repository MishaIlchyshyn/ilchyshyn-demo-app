import React from "react";

import s from "./ProfileUser.module.scss";

const ProfileUser = ({ avatar, fullName, location }) => (
  <div className={s.user}>
    {avatar ? (
      <img src={avatar} className={s.avatar} alt="user avatar" />
    ) : (
      <img
        src="https://atlncs.org/wp-content/themes/ancs-sixteen/images/img_headshot.png"
        className={s.avatar}
        alt="user avatar"
      />
    )}

    <span className={s.fullName}>{fullName}</span>
    <span className={s.location}>{location}</span>
  </div>
);

export default ProfileUser;
