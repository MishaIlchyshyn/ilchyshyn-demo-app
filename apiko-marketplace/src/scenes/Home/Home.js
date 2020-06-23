import React from "react";

import s from "./Home.module.scss";
import { Header } from "../../components";
import LatestList from "../LatestList/LatestListContainer";
import { Route } from "react-router-dom";
import { routes } from "../router";
import SearchComponent from "../../components/Search/SearchComponent";

const Home = ({ productsSearch }) => {
  const style = {
    background: "linear-gradient(180deg, #090810 0%, #171236 100%)",
    color: "#ffffff",
  };

  return (
    <div className={s.container}>
      <Header logo="darkLogo" darkTheme={style}>
        <SearchComponent productsSearch={productsSearch} />
      </Header>

      <Route path={routes.home} component={LatestList} />
    </div>
  );
};

export default Home;
