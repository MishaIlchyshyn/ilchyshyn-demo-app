import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { productsOperations } from "../../modules/products";
import SearchProductsComponent from "./SearchProductsComponent";

const getUrl = (searchParams) => {
  let arrValues = [];
  for (let value in searchParams) {
    console.log("value == " + searchParams[value]);
    if (searchParams[value] !== "") {
      arrValues.push(value + "=" + searchParams[value]);
    }
  }

  let searchUrl = "?" + arrValues.join("&");
  return searchUrl;
};

const mapStateToProps = (state) => ({
  searchProducts: state.products.searchProducts.items,
  isLoading: state.products.searchProducts.isLoading,
  state,
});

const mapDispatchToProps = {
  fetchProductsSearch: productsOperations.fetchProductsSearch,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    productsSearch: (props) => async (queryParams) => {
      props.history.push("/products/search" + getUrl(queryParams));
      await props.fetchProductsSearch(getUrl(queryParams));
    },
  })
);

export default enhancer(SearchProductsComponent);
