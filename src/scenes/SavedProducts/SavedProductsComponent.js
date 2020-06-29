import React from "react";

import Header from "../../components/Header/Header";

import s from "./SavedProducts.module.scss";
import SearchComponent from "../../components/Search/SearchComponent";
import ItemProduct from "../../components/ItemProduct/ItemProduct";
import Footer from "../../components/Footer/Footer";

const SavedProductsComponent = ({
  list,
  unsaveProduct,
  isLoading,
  state,
  productsSearch,
}) => {
  const style = {
    background: "linear-gradient(180deg, #090810 0%, #171236 100%)",
    color: "#ffffff",
  };

  console.log(state);

  return (
    <div className={s.savedItems}>
      <Header logo="darkLogo" darkTheme={style}>
        <SearchComponent productsSearch={productsSearch} />
      </Header>

      <div className={s.savedItems}>
        <div className={s.count}>
          <span>Saved Items</span>{" "}
          <span className={s.countNumber}>({list.length})</span>
        </div>

        <div className={s.blockListProducts}>
          <div className={s.listProducts}>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              list.map((item) => {
                return (
                  <ItemProduct
                    saved={item.saved}
                    key={item.id}
                    id={item.id}
                    unsaveProduct={unsaveProduct}
                    price={item.price}
                    photos={item.photos}
                    title={item.title}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SavedProductsComponent;
