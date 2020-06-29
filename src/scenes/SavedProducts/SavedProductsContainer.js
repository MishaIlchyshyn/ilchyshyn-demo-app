import { connect } from "react-redux";
import { compose, lifecycle, withHandlers } from "recompose";
import { productsOperations } from "../../modules/products";
import SavedProductsComponent from "./SavedProductsComponent";
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
  list: state.products.saved.items,
  isLoading: state.products.saved.isLoading,
  state,
  test: state,
});

const mapDispatchToProps = {
  fetchSaved: productsOperations.fetchSaved,
  fetchUnsave: productsOperations.fetchUnsave,
  fetchProductsSearch: productsOperations.fetchProductsSearch,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchSaved();
    },
  }),
  withHandlers({
    unsaveProduct: (props) => async (id) => {
      await props.fetchUnsave(id);
      props.history.push(routes.home);
    },
    productsSearch: (props) => async (queryParams) => {
      props.history.push("/products/search" + getUrl(queryParams));
      await props.fetchProductsSearch(getUrl(queryParams));
    },
  })
);

export default enhancer(SavedProductsComponent);
