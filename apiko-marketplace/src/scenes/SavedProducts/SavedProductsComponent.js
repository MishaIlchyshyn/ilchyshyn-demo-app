import React from "react";

import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { routes } from "../router";

import s from "./SavedProducts.module.scss";
import SwitchSaveComponent from "../../components/SwitchSave/SwitchSaveComponent";

const SavedProductsComponent = ({ list, unsaveProduct, isLoading, state }) => {
  const style = {
    background: "linear-gradient(180deg, #090810 0%, #171236 100%)",
    color: "#ffffff",
  };

  return (
    <div className={s.savedItems}>
      <Header logo="darkLogo" darkTheme={style}>
        <div style={{ color: "red", position: "absolute" }}>Filter</div>
      </Header>

      <div className={s.count}>
        <span>Saved Items</span>{" "}
        <span className={s.countNumber}>({list.length})</span>
      </div>

      <div className={s.blockListProducts}>
        <div className={s.listProducts}>
          {list.map((item) => {
            return (
              <div key={item.id}>
                <SwitchSaveComponent
                  saved={item.saved}
                  id={item.id}
                  unsaveProduct={unsaveProduct}
                />
                <Link
                  key={item.id}
                  to={`${routes.products}/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ProductCard
                    key={item.id}
                    price={item.price}
                    photos={item.photos}
                    title={item.title}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SavedProductsComponent;
