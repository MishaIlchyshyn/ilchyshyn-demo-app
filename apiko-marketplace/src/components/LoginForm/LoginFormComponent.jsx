import React from "react";
import s from "../stylesForForms.module.scss";
import Api from "../../api/index";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";
import { routes } from "../../scenes/router";

import RedirectBetweenForms from "../RedirectBetweenForms/RedirectBetweenForms";

const redirectToRegister = {
  text: "I have no account, ",
  redirect() {
    return (
      <Link
        to={routes.register}
        style={{
          color: "#349A89",
          textDecoration: "none",
        }}
      >
        REGISTER NOW
      </Link>
    );
  },
};

class LoginFormComponent extends React.Component {
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
            password: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Email is invalid")
              .required("Email is required"),
            password: Yup.string()
              .min(6, "Password must be at least 6 characters")
              .required("Password is required"),
          })}
          onSubmit={(user) => {
            Api.Auth.login(user).then((result) => {
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
              <h1>{this.userFullName}</h1>
              <h2 className={s.titleForm}>Login</h2>

              <div>
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
              <div>
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
              <div>
                <button type="submit" className={s.buttonAuthSubmit}>
                  Continue
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <RedirectBetweenForms
          text={redirectToRegister.text}
          redirect={redirectToRegister.redirect()}
        />
      </div>
    );
  }
}

export default LoginFormComponent;
