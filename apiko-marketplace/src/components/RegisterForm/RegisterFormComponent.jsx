import React from "react";
import s from "../stylesForForms.module.scss";
import Api from "../../api/index";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";

import RedirectBetweenForms from "../RedirectBetweenForms/RedirectBetweenForms";
import { routes } from "../../scenes/router";

const redirectToLogin = {
  text: "I already have an account, ",
  redirect() {
    return (
      <Link
        to={routes.login}
        style={{
          color: "#349A89",
          textDecoration: "none",
        }}
      >
        LOG IN
      </Link>
    );
  },
};

export class RegisterFormComponent extends React.Component {
  redirectToHome = () => {
    const { history } = this.props;
    if (history) history.push("/home");
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            email: "",
            fullName: "",
            password: "",
            passwordAgain: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Email is invalid")
              .required("Email is required"),
            fullName: Yup.string().required("Full Name is required"),
            password: Yup.string()
              .min(6, "Password must be at least 6 characters")
              .required("Password is required"),
            passwordAgain: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Password Again is required"),
          })}
          onSubmit={(user) => {
            Api.Auth.register(user).then((result) => {
              if (result.token) {
                Api.Auth.setToken(result.token);
                localStorage.setItem("userData", JSON.stringify(result));
                this.redirectToHome();
              }
            });
          }}
        >
          {({ errors, touched }) => (
            <Form className={s.Form}>
              <h2 className={s.titleForm}>Register</h2>

              <div className="form-group">
                <label className={s.labelAuth}>Email</label>
                <Field
                  name="email"
                  type="text"
                  className={s.inputAuth}
                  style={
                    errors.email && touched.email
                      ? { border: "1px solid red" }
                      : null
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={s.invalidFeedback}
                />
              </div>
              <div className="form-group">
                <label className={s.labelAuth}>Full Name</label>
                <Field
                  name="fullName"
                  type="text"
                  className={s.inputAuth}
                  style={
                    errors.fullName && touched.fullName
                      ? { border: "1px solid red" }
                      : null
                  }
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className={s.invalidFeedback}
                />
              </div>
              <div className="form-group">
                <label className={s.labelAuth}>Password</label>
                <Field
                  name="password"
                  type="password"
                  className={s.inputAuth}
                  style={
                    errors.password && touched.password
                      ? { border: "1px solid red" }
                      : null
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={s.invalidFeedback}
                />
              </div>
              <div className="form-group">
                <label className={s.labelAuth}>Password Again</label>
                <Field
                  name="passwordAgain"
                  type="password"
                  className={s.inputAuth}
                  style={
                    errors.passwordAgain && touched.passwordAgain
                      ? { border: "1px solid red" }
                      : null
                  }
                />
                <ErrorMessage
                  name="passwordAgain"
                  component="div"
                  className={s.invalidFeedback}
                />
              </div>
              <div className="form-group">
                <button type="submit" className={s.buttonAuthSubmit}>
                  Register
                </button>
              </div>
              <div></div>
            </Form>
          )}
        </Formik>

        <RedirectBetweenForms
          text={redirectToLogin.text}
          redirect={redirectToLogin.redirect()}
        />
      </div>
    );
  }
}

export default RegisterFormComponent;
