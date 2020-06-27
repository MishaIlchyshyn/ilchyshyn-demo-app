import React from "react";
import SwitchSaveComponent from "../SwitchSave/SwitchSaveComponent";
import ProductCard from "../../components/ProductCard/ProductCard";
import { routes } from "../../scenes/router";
import { Link } from "react-router-dom";
import s from "./ItemProduct.module.scss";

const ItemProduct = ({
  saved,
  id,
  saveProduct,
  unsaveProduct,
  saveLoading,
  saveError,
  price,
  photos,
  title,
}) => {
  return (
    <div className={s.itemProduct}>
      <SwitchSaveComponent
        saved={saved}
        id={id}
        saveProduct={saveProduct}
        unsaveProduct={unsaveProduct}
        saveLoading={saveLoading}
        saveError={saveError}
      />
      <Link
        key={id}
        to={`${routes.products}/${id}`}
        style={{ textDecoration: "none" }}
      >
        <ProductCard id={id} price={price} photos={photos} title={title} />
      </Link>
    </div>
  );
};

export default ItemProduct;
