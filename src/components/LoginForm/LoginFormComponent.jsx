import s from "../stylesForForms.module.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { routes } from "../../scenes/router";
import { Input } from "../../components";
import { loginValidate } from "./LoginFormContainer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const LoginFormComponent = ({ handleLogin, isLoading, state }) => {
  const [typePassword, setTypePassword] = useState("password");

  console.log(state);

  const clickIcon = () => {
    if (typePassword === "password") {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  };

  const formik = useFormik(loginValidate);

  return (
    <div>
      <Header logo="lightLogo" />

      <div className={s.loginPage}>
        <div className={s.Form}>
          <h2 className={s.titleForm}>Login</h2>
          <Input
            className={s.inputAuth}
            name="email"
            type="email"
            placeholder="Example@gmail.com"
            label="EMAIL"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={s.invalidFeedback}>{formik.errors.email}</div>
          ) : null}

          <Input
            className={s.inputAuth}
            icon="switchPassword"
            name="password"
            type={typePassword}
            label="PASSWORD"
            onIconClick={clickIcon}
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={s.invalidFeedback}>{formik.errors.password}</div>
          ) : null}

          <button
            type="button"
            onClick={() => handleLogin(formik.values)}
            className={s.buttonAuthSubmit}
          >
            {isLoading ? "Loading..." : "Continue"}
          </button>
        </div>

        <div className={s.RedirectBetweenForms}>
          <span>I have no account,</span>
          <Link to={routes.register} style={{ textDecoration: "none" }}>
            {" "}
            <span className={s.textRedirect}>Register Now</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginFormComponent;
