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

      {history.location.pathname === "/products" ||
      history.location.pathname === "/edit-profile" ? (
        ""
      ) : (
        <div>
          <Link className={s.sell} to={routes.sell}>
            sell
          </Link>
        </div>
      )}

      {Api.Auth.isLoggedIn ? (
        <div className={s.login}>
          <div
            className={s.profileBadge}
            style={{ position: "absolute", right: "0" }}
            onClick={switchProfile}
          >
            {/* {user ? abbreviature(user.fullName) : ""} */}
          </div>
          <div className={s.detail} style={style}>
            <div className={s.profile}>
              <div className={s.profileBadge}>
                {/* {user ? abbreviature(user.fullName) : ""} */}
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
                {user ? (
                  <Link
                    to={`${routes.users}/${user.id}/products`}
                    className={s.profileLink}
                  >
                    <span>Profile</span>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className={s.edit}>
              <Link to={routes.editProfile} className={s.editProfileLink}>
                <span>Edit Profile</span>
              </Link>
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

      {history.location.pathname === "/products/saved" ? (
        <Link to={routes.saved} className={s.linkToSaved}>
          <Icon name="linkOutSaved" size="18px" />
        </Link>
      ) : (
        <Link to={routes.saved} className={s.linkToSaved}>
          <Icon name="linkToSaved" size="18px" />
        </Link>
      )}

      {children}
    </header>
  );
};

export default Header;
