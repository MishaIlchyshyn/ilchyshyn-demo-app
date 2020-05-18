import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { productsOperations } from "../../modules/products";
import SavedProductsComponent from "./SavedProductsComponent";

const mapStateToProps = (state) => ({
  list: state.products.saved.items,
  isLoading: state.products.saved.isLoading,
  state,
});

const mapDispatchToProps = {
  fetchSaved: productsOperations.fetchSaved,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchSaved();
    },
  })
);

export default enhancer(SavedProductsComponent);
