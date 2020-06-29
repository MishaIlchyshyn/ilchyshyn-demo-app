import React from "react";
import s from "./LatestList.module.scss";
import ItemProduct from "../../components/ItemProduct/ItemProduct";

const LatestListComponent = ({
  list,
  isLoading,
  saveProduct,
  unsaveProduct,
  saveLoading,
  saveError,
  state,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(state);

  return (
    <div className={s.blockListProducts}>
      <div className={s.listProducts}>
        {list.map((item) => {
          return (
            <ItemProduct
              saved={item.saved}
              key={item.id}
              id={item.id}
              saveProduct={saveProduct}
              unsaveProduct={unsaveProduct}
              price={item.price}
              photos={item.photos}
              title={item.title}
              saveLoading={saveLoading}
              saveError={saveError}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestListComponent;
