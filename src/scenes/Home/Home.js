import React from "react";

import s from "./Home.module.scss";
import { Header } from "../../components";
import LatestList from "../LatestList/LatestListContainer";
import { Route } from "react-router-dom";
import { routes } from "../router";
import SearchComponent from "../../components/Search/SearchComponent";
import Footer from "../../components/Footer/Footer";

const Home = ({ productsSearch, handleLogout }) => {
  const style = {
    background: "linear-gradient(180deg, #090810 0%, #171236 100%)",
    color: "#ffffff",
  };

  return (
    <div className={s.container}>
      <Header logo="darkLogo" darkTheme={style} handleLogout={handleLogout}>
        <SearchComponent productsSearch={productsSearch} />
      </Header>

      <div className={s.latestList}>
        <Route path={routes.home} component={LatestList} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
