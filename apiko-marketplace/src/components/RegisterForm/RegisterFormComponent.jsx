import React, { useState } from "react";
import s from "../stylesForForms.module.scss";
import { Link } from "react-router-dom";
import { routes } from "../../scenes/router";
import { Input } from "../../components";
import { useFormik } from "formik";
import { registerValidate } from "./RegisterFormContainer";
import Header from "../Header/Header";

const RegisterFormComponent = ({ handleRegister }) => {
  const [typePassword, setTypePassword] = useState("password");

  const clickIcon = () => {
    if (typePassword === "password") {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  };

  const formik = useFormik(registerValidate);

  return (
    <div>
      <Header logo="lightLogo" />

      <div className={s.Form}>
        <h2 className={s.titleForm}>Register</h2>
        <Input
          className={s.inputAuth}
          name="email"
          type="email"
          placeholder="Example@gmail.com"
          label="EMAIL"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={s.invalidFeedback}>{formik.errors.email}</div>
        ) : null}

        <Input
          className={s.inputAuth}
          name="fullName"
          type="text"
          placeholder="Tony Stark"
          label="FULL NAME"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <div className={s.invalidFeedback}>{formik.errors.fullName}</div>
        ) : null}

        <Input
          className={s.inputAuth}
          icon="switchPassword"
          name="password"
          type={typePassword}
          label="PASSWORD"
          onIconClick={clickIcon}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={s.invalidFeedback}>{formik.errors.password}</div>
        ) : null}

        <Input
          className={s.inputAuth}
          icon="switchPassword"
          name="passwordAgain"
          type={typePassword}
          label="PASSWORD AGAIN"
          onIconClick={clickIcon}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordAgain}
        />
        {formik.touched.passwordAgain && formik.errors.passwordAgain ? (
          <div className={s.invalidFeedback}>{formik.errors.passwordAgain}</div>
        ) : null}

        <button
          type="button"
          onClick={() => handleRegister(formik.values)}
          className={s.buttonAuthSubmit}
        >
          Register
        </button>
      </div>

      <div className={s.RedirectBetweenForms}>
        <span>I have no account,</span>
        <Link to={routes.login} style={{ textDecoration: "none" }}>
          {" "}
          <span className={s.textRedirect}>Log In</span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterFormComponent;
