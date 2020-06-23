import React from "react";

import s from "./DetailProducts.module.scss";

import Header from "../../components/Header/Header";
import DetailCard from "../../components/DetailCard/DetailCard";
import OwnerCard from "../../components/OwnerCard/OwnerCard";
import SearchComponent from "../../components/Search/SearchComponent";

const DetailProductsComponent = ({
  item,
  state,
  isLoading,
  owner,
  productsSearch,
}) => {
  const style = {
    background: "linear-gradient(180deg, #090810 0%, #171236 100%)",
    color: "#ffffff",
  };

  return (
    <div>
      <Header logo="darkLogo" darkTheme={style}>
        <SearchComponent productsSearch={productsSearch} />
      </Header>

      {isLoading ? <div>Loading...</div> : ""}

      <div className={s.detailPage}>
        <DetailCard item={item} />

        <div className={s.user}>
          {owner ? (
            <OwnerCard
              avatar={owner.avatar}
              fullName={owner.fullName}
              location={owner.location}
              id={owner.id}
            />
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailProductsComponent;
