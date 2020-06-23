import { connect } from "react-redux";
import { compose, lifecycle, withHandlers } from "recompose";
import { productsOperations } from "../../modules/products";
import ProfileComponent from "./ProfileComponent";
import { userOperations } from "../../modules/user";
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
  isLoading: state.products.detail.isLoading,
  usersProducts: state.products.usersProducts.items,
  user: state.user.user.user,
  state,
});

const mapDispatchToProps = {
  fetchUsersProducts: productsOperations.fetchUsersProducts,
  fetchUserByID: userOperations.fetchUserById,
  fetchSave: productsOperations.fetchSave,
  fetchUnsave: productsOperations.fetchUnsave,
  fetchProductsSearch: productsOperations.fetchProductsSearch,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchUsersProducts(this.props.match.params.id);
      this.props.fetchUserByID(this.props.match.params.id);
    },
  }),
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

export default enhancer(ProfileComponent);
