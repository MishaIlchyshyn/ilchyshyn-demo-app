import React, { useState } from "react";
import Api from "../../api/index";

import s from "./Header.module.scss";
import { Link, useHistory } from "react-router-dom";
import { routes } from "../../scenes/router";
import store from "../../store/createStore";
import { Icon } from "../../Icon";

const Header = ({ logo, darkTheme, children }) => {
  const [style, setStyle] = useState({
    display: "none",
  });

  const switchProfile = () => {
    if (style.display === "none") {
      setStyle({
        display: "block",
      });
    } else {
      setStyle({
        display: "none",
      });
    }
  };

  let user = store.getState().viewer.user;
  let history = useHistory();

  const logout = () => {
    Api.Auth.logout();
    history.push("/auth/login");
  };

  const abbreviature = (userName) => {
    return userName
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("");
  };

  return (
    <header
      className={s.header}
      style={darkTheme ? { background: darkTheme.background } : null}
    >
      <div className={s.logo}>
        <Link to={routes.home}>
          <Icon name={logo} size="86px" />
        </Link>
      </div>

      {Api.Auth.isLoggedIn ? (
        <div className={s.login}>
          <div
            className={s.profileBadge}
            style={{ position: "absolute", right: "0" }}
            onClick={switchProfile}
          >
            {user ? abbreviature(user.fullName) : ""}
          </div>
          <div className={s.detail} style={style}>
            <div className={s.profile}>
              <div className={s.profileBadge}>
                {user ? abbreviature(user.fullName) : ""}
              </div>
              <div className={s.infoUser}>
                {user ? (
                  <div>
                    <span className={s.name}>{user.fullName}</span>
                    <span className={s.email}>{user.email}</span>
                  </div>
                ) : (
                  ""
                )}
                <span className={s.profileLink}>Profile</span>
              </div>
            </div>
            <div className={s.edit}>
              <span>Edit Profile</span>
            </div>
            <div className={s.logout}>
              <span onClick={logout}>Logout</span>
            </div>
          </div>
        </div>
      ) : (
        <Link to={routes.login} style={{ textDecoration: "none" }}>
          <span
            className={s.loginLink}
            style={darkTheme ? { color: darkTheme.color } : null}
          >
            Login
          </span>
        </Link>
      )}

      {children}
    </header>
  );
};

export default Header;
