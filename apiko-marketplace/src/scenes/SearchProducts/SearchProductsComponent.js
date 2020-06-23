import React from "react";
import { Header } from "../../components";
import s from "./SearchProducts.module.scss";
import { routes } from "../router";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import SearchComponent from "../../components/Search/SearchComponent";
import SwitchSaveComponent from "../../components/SwitchSave/SwitchSaveComponent";

const SearchProductsComponent = ({
  state,
  productsSearch,
  searchProducts,
  saveProduct,
  unsaveProduct,
  isLoading,
}) => {
  console.log(state);
  const style = {
    background: "linear-gradient(180deg, #090810 0%, #171236 100%)",
    color: "#ffffff",
  };
  return (
    <div>
      <Header logo="darkLogo" darkTheme={style}>
        <SearchComponent productsSearch={productsSearch} />
      </Header>

      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <div className={s.listProducts}>
          {searchProducts.length == 0 ? (
            <div>Not products for this search</div>
          ) : (
            searchProducts.map((item) => {
              return (
                <div key={item.id}>
                  <SwitchSaveComponent
                    saved={item.saved}
                    id={item.id}
                    saveProduct={saveProduct}
                    unsaveProduct={unsaveProduct}
                  />
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
            })
          )}
        </div>
      )}
    </div>
  );
};

export default SearchProductsComponent;
