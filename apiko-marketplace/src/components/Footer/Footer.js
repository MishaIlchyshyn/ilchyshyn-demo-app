import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.Footer}>
      <span>Copyright &copy; 2020.</span>
      <span>Privacy</span>
      <span>Policy.</span>
    </div>
  );
};

export default Footer;
