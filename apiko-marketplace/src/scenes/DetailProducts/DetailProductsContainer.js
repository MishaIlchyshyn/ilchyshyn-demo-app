import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { productsOperations } from "../../modules/products";
import DetailProductsComponent from "./DetailProductsComponent";

const mapStateToProps = (state) => ({
  item: state.products.detail.items,
  isLoading: state.products.detail.isLoading,
  state,
});

const mapDispatchToProps = {
  fetchDetail: productsOperations.fetchDetail,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchDetail(this.props.match.params.id);
    },
  })
);

export default enhancer(DetailProductsComponent);
