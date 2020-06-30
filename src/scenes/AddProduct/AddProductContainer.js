import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { productsOperations } from "../../modules/products";
import AddProductComponent from "./AddProductComponent";
import { viewerOperations } from "../../modules/viewer";

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

    if (!values.title) {
      errors.title = "Required";
    }

    if (!values.location) {
      errors.location = "Required";
    }

    if (!values.description) {
      errors.description = "Required";
    }

    if (!values.price) {
      errors.price = "Required";
    }

    return errors;
  },
};

const mapStateToProps = (state) => ({
  state,
  isLoading: state.products.addProduct.isLoading,
});

const mapDispatchToProps = {
  fetchAddProduct: productsOperations.fetchAddProduct,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleAddProduct: (props) => async (product, resetForm) => {
      await props.fetchAddProduct(product);
      resetForm();
    },
  })
);

export default enhancer(AddProductComponent);
