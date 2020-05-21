import { connect } from "react-redux";
import { compose, lifecycle, withHandlers } from "recompose";
import { productsOperations } from "../../modules/products";
import SavedProductsComponent from "./SavedProductsComponent";
import { routes } from "../router";

const mapStateToProps = (state) => ({
  list: state.products.saved.items,
  isLoading: state.products.saved.isLoading,
  state,
});

const mapDispatchToProps = {
  fetchSaved: productsOperations.fetchSaved,
  fetchUnsave: productsOperations.fetchUnsave,
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
  })
);

export default enhancer(SavedProductsComponent);
