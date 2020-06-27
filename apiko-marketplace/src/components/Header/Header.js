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

  let isLoading = store.getState().viewer.fetchViewer.isLoading;

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

  let token = localStorage.getItem("token");

  return (
    <header style={darkTheme ? { background: darkTheme.background } : null}>
      <div className={s.header}>
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
            <Link className={s.sell} to={token ? routes.sell : routes.login}>
              sell
            </Link>
          </div>
        )}

        {Api.Auth.isLoggedIn ? (
          <div>
            {user ? (
              <div className={s.login}>
                {isLoading ? (
                  <div style={{ color: "red" }}>Loading...</div>
                ) : (
                  <div
                    className={s.profileBadge}
                    style={{ position: "absolute", right: "0" }}
                    onClick={switchProfile}
                  >
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        className={s.headerAvatar}
                        alt=""
                      />
                    ) : (
                      abbreviature(user.fullName)
                    )}
                  </div>
                )}
                <div className={s.detail} style={style}>
                  <div className={s.profile}>
                    <div className={s.profileBadge}>
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          className={s.headerAvatar}
                          alt=""
                        />
                      ) : (
                        abbreviature(user.fullName)
                      )}
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
              ""
            )}
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
        ) : history.location.pathname === "/auth/login" ||
          history.location.pathname === "/auth/register" ? (
          <Link
            to={token ? routes.saved : routes.login}
            className={s.linkToSaved}
          >
            <Icon name="saved" size="18px" />
          </Link>
        ) : (
          <Link
            to={token ? routes.saved : routes.login}
            className={s.linkToSaved}
          >
            <Icon name="linkToSaved" size="18px" />
          </Link>
        )}
      </div>

      {children}
    </header>
  );
};

export default Header;
