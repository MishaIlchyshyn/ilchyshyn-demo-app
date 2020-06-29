import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import LoginFormComponent from "./LoginFormComponent";
import { authOperations } from "../../modules/auth";
import { routes } from "../../scenes/router";
import { withRouter } from "react-router-dom";
import { viewerOperations } from "../../modules/viewer";

export const loginValidate = {
  initialValues: {
    email: "",
    password: "",
  },
  validate: (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  },
};

function mapStateToProps(state) {
  return {
    state,
    isLoading: state.auth.login.isLoading,
  };
}

const mapDispatchToProps = {
  login: authOperations.login,
  fetchViewer: viewerOperations.fetchViewer,
};

const enhancer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleLogin: (props) => async (user) => {
      await props.login(user);
      props.fetchViewer();
      props.history.push(routes.home);
    },
  })
);

export default enhancer(LoginFormComponent);
