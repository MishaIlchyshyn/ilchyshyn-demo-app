import { connect } from "react-redux";
import { compose, withHandlers, lifecycle } from "recompose";
import { productsOperations } from "../../modules/products";
import SwitchSaveComponent from "./SwitchSaveComponent";

const mapStateToProps = (state) => ({
  list: state.products.save.items,
  isLoading: state.products.save.isLoading,
  state,
});

const mapDispatchToProps = {
  fetchSave: productsOperations.fetchSave,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchLatest();
    },
  }),
  withHandlers({
    click: (props) => async (id) => {
      console.log("test");
      // props.state.products.latest.items[0].saved = true;
      // console.log(arg);
      // await props.fetchSave(id);
    },
  })
);

export default enhancer(SwitchSaveComponent);
