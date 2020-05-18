import React from "react";

import s from "./Home.module.scss";
import { Header } from "../../components";
import LatestList from "../LatestList/LatestListContainer";
import { Route } from "react-router-dom";
import { routes } from "../router";

const Home = () => {
  const style = {
    background: "linear-gradient(180deg, #090810 0%, #171236 100%)",
    color: "#ffffff",
  };

  return (
    <div className={s.container}>
      <Header logo="darkLogo" darkTheme={style}>
        <div style={{ color: "red", position: "absolute" }}>Filter</div>
      </Header>

      <Route exact path={routes.home} component={LatestList} />
    </div>
  );
};

export default Home;
