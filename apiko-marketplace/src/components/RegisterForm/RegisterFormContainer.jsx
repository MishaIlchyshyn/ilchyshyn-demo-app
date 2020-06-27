import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import RegisterFormComponent from "./RegisterFormComponent";
import { authOperations } from "../../modules/auth";
import { routes } from "../../scenes/router";
import { withRouter } from "react-router-dom";

export const registerValidate = {
  initialValues: {
    email: "",
    fullName: "",
    password: "",
    passwordAgain: "",
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

    if (!values.fullName) {
      errors.fullName = "Required";
    } else if (values.fullName.length <= 4) {
      errors.fullName = "Must be at least 5 characters long";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be at least 6 characters long";
    }

    if (!values.passwordAgain) {
      errors.passwordAgain = "Required";
    } else if (values.passwordAgain.length < 6) {
      errors.passwordAgain = "Must be at least 6 characters long";
    } else if (values.passwordAgain !== values.password) {
      errors.passwordAgain = "must be equal to the password";
    }

    return errors;
  },
};

function mapStateToProps(state) {
  return {
    isLoading: state.auth.register.isLoading,
  };
}

const mapDispatchToProps = {
  register: authOperations.register,
};

const enhancer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleRegister: (props) => async (user) => {
      await props.register(user);
      props.history.push(routes.login);
    },
  })
);

export default enhancer(RegisterFormComponent);
