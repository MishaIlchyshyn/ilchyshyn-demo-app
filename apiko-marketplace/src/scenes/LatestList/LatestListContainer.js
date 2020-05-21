import { connect } from "react-redux";
import { compose, lifecycle, withHandlers } from "recompose";
import { productsOperations } from "../../modules/products";
import LatestListComponent from "./LatestListComponent";
import { routes } from "../router";

const mapStateToProps = (state) => ({
  list: state.products.latest.items,
  isLoading: state.products.latest.isLoading,
  state,
});

const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatest,
  fetchSave: productsOperations.fetchSave,
  fetchUnsave: productsOperations.fetchUnsave,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchLatest();
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
  })
);

export default enhancer(LatestListComponent);
