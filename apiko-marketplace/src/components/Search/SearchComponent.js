import React from "react";

import { Input } from "..";
import { Icon } from "../../Icon";

import s from "./Search.module.scss";
import { useFormik } from "formik";

const SearchComponent = ({ productsSearch }) => {
  const searchParams = {
    initialValues: {
      keywords: "",
      location: "",
    },
  };
  let formik = useFormik(searchParams);

  return (
    <div>
      <form>
        <div className={s.searchBlock}>
          <div className={s.containerInputSearch}>
            <Input
              className={s.inputSearch}
              style={{ width: "467px" }}
              name="keywords"
              type="text"
              placeholder="Search products by name"
              onChange={formik.handleChange}
              value={formik.values.keywords}
              onBlur={formik.handleBlur}
            />
            <Icon name="search" size="18px" className={s.icon} />
          </div>

          <div className={s.containerInputSearch}>
            <Input
              className={s.inputSearch}
              style={{ width: "198px" }}
              name="location"
              type="text"
              placeholder="Location"
              onChange={formik.handleChange}
              value={formik.values.location}
              onBlur={formik.handleBlur}
            />
            <Icon name="location" size="18px" className={s.icon} />
          </div>

          <button
            type="button"
            className={s.buttonSearchSubmit}
            onClick={() => productsSearch(formik.values)}
            style={{ width: "176px" }}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
