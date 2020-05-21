import React from "react";

import s from "./DetailProducts.module.scss";

import Header from "../../components/Header/Header";
import DetailCard from "../../components/DetailCard/DetailCard";
import OwnerCard from "../../components/OwnerCard/OwnerCard";

const DetailProductsComponent = ({ item, state, isLoading, owner }) => {
  const style = {
    background: "linear-gradient(180deg, #090810 0%, #171236 100%)",
    color: "#ffffff",
  };

  console.log(owner);

  return (
    <div>
      <Header logo="darkLogo" darkTheme={style}>
        <div style={{ color: "red", position: "absolute" }}>Filter</div>
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
