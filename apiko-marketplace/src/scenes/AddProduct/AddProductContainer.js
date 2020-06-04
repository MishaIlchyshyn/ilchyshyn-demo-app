import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { productsOperations } from "../../modules/products";
import AddProductComponent from "./AddProductComponent";

export const addProductValidate = {
  initialValues: {
    title: "",
    location: "",
    description: "",
    photos: [],
    price: "",
  },
  validate: (values) => {
    let errors = {};

    // if (!values.title) {
    //   errors.title = "Required";
    // }

    // if (!values.price) {
    //   errors.price = "Required";
    // }

    return errors;
  },
};

const mapStateToProps = (state) => ({
  item: state.products.detail.items,
  isLoading: state.products.detail.isLoading,
  owner: state.products.detail.items.owner,
  state,
});

const mapDispatchToProps = {
  fetchAddProduct: productsOperations.fetchAddProduct,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleAddProduct: (props) => async (product) => {
      await props.fetchAddProduct(product);
      product.title = "";
    },
  })
);

export default enhancer(AddProductComponent);
