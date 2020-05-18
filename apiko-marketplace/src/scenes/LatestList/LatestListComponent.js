import React from "react";
import s from "./LatestList.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { routes } from "../router";
import SwitchSaveComponent from "../../components/SwitchSave/SwitchSaveComponent";

const LatestListComponent = ({ list, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.blockListProducts}>
      <div className={s.listProducts}>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <SwitchSaveComponent saved={item.saved} id={item.id} />
              <Link
                key={item.id}
                to={`${routes.products}/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <ProductCard
                  id={item.id}
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
  );
};

export default LatestListComponent;
