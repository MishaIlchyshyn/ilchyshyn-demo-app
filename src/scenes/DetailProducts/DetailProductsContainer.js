import { connect } from "react-redux";
import { compose, lifecycle, withHandlers } from "recompose";
import { productsOperations } from "../../modules/products";
import DetailProductsComponent from "./DetailProductsComponent";

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
  item: state.products.detail.items,
  isLoading: state.products.detail.isLoading,
  owner: state.products.detail.items.owner,
  state,
});

const mapDispatchToProps = {
  fetchDetail: productsOperations.fetchDetail,
  fetchProductsSearch: productsOperations.fetchProductsSearch,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      console.log(this.props.match.params.id);
      this.props.fetchDetail(this.props.match.params.id);
    },
  }),
  withHandlers({
    productsSearch: (props) => async (queryParams) => {
      props.history.push("/products/search" + getUrl(queryParams));
      await props.fetchProductsSearch(getUrl(queryParams));
    },
  })
);

export default enhancer(DetailProductsComponent);
