import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { productsOperations } from "../../modules/products";
import Home from "./Home";
import { viewerOperations } from "../../modules/viewer";

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
  state,
  searchProducts: state.products.searchProducts.items,
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

export default enhancer(Home);
