import React, { useState, useEffect } from "react";
import Api from "../../api/index";

import s from "./Header.module.scss";
import { Link, useHistory } from "react-router-dom";
import { routes } from "../../scenes/router";

const Header = () => {
  const [userData, setUserData] = useState();
  let history = useHistory();

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const logout = () => {
    Api.Auth.logout();
    history.push("/auth/login");
  };

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link to={routes.home}>A P I C O</Link>
      </div>

      {Api.Auth.isLoggedIn() ? (
        <div>
          <div className={s.login}>
            <div onClick={() => logout()} className={s.logout}>
              Logout
            </div>
            <div>{userData.user.fullName}</div>
          </div>
        </div>
      ) : (
        <div className={s.login}>
          <Link to={routes.login}>Login</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
