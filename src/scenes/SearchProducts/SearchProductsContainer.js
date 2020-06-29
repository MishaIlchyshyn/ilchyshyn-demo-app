import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { productsOperations } from "../../modules/products";
import SearchProductsComponent from "./SearchProductsComponent";
import { routes } from "../router";

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
  fetchSave: productsOperations.fetchSave,
  fetchUnsave: productsOperations.fetchUnsave,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    saveProduct: (props) => async (id) => {
      await props.fetchSave(id);
      props.history.push(routes.saved);
    },
    unsaveProduct: (props) => async (id) => {
      await props.fetchUnsave(id);
      props.history.push(routes.saved);
    },
    productsSearch: (props) => async (queryParams) => {
      props.history.push("/products/search" + getUrl(queryParams));
      await props.fetchProductsSearch(getUrl(queryParams));
    },
  })
);

export default enhancer(SearchProductsComponent);
