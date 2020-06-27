import React from "react";
import { Header } from "../../components";
import s from "./SearchProducts.module.scss";
import SearchComponent from "../../components/Search/SearchComponent";
import ItemProduct from "../../components/ItemProduct/ItemProduct";
import Footer from "../../components/Footer/Footer";

const SearchProductsComponent = ({
  state,
  productsSearch,
  searchProducts,
  saveProduct,
  unsaveProduct,
  isLoading,
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

      <div className={s.searchProduct}>
        {isLoading ? (
          <div>...Loading</div>
        ) : (
          <div className={s.listProducts}>
            {searchProducts.length === 0 ? (
              <div>Not products for this search</div>
            ) : (
              searchProducts.map((item) => {
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
                  />
                );
              })
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchProductsComponent;
