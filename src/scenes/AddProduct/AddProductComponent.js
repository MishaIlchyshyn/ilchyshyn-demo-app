import React, { useState } from "react";
import s from "./AddProduct.module.scss";
import Header from "../../components/Header/Header";
import { Input } from "../../components";
import { useFormik } from "formik";
import { addProductValidate } from "./AddProductContainer";
import ReactFileReader from "react-file-reader";
import { v4 as uuidv4 } from "uuid";
import { Icon } from "../../Icon";

const AddProductComponent = ({ handleAddProduct, state, isLoading }) => {
  console.log(state);
  const [loadedFiles, setLoadedFiles] = useState({ items: [] });

  const style = {
    background: "linear-gradient(180deg, #090810 0%, #171236 100%)",
    color: "#ffffff",
  };

  const formik = useFormik(addProductValidate);

  console.log(formik.values);

  formik.values.photos = loadedFiles.items;

  const handleFiles = (files) => {
    setLoadedFiles({
      items: [...loadedFiles.items, files.base64],
    });
  };

  const removePhoto = (index) => {
    loadedFiles.items.splice(index, 1);
    setLoadedFiles({
      items: loadedFiles.items,
    });
  };

  const resetForm = () => {
    formik.resetForm();
  };

  return (
    <div>
      <Header logo="darkLogo" darkTheme={style}></Header>

      <div className={s.addProduct}>
        <form className={s.Form}>
          <h2 className={s.titleForm}>Add product</h2>
          <div className={s.containerInput}>
            <Input
              className={s.inputAddProduct}
              name="title"
              type="text"
              placeholder="For example: Iron man suit"
              label="TITLE"
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className={s.invalidFeedback}>{formik.errors.title}</div>
            ) : null}
          </div>

          <div className={s.containerInput}>
            <Input
              className={s.inputAddProduct}
              name="location"
              type="text"
              placeholder="For example: Los Angeles, CA"
              label="LOCATION"
              onChange={formik.handleChange}
              value={formik.values.location}
              onBlur={formik.handleBlur}
            />
            {formik.touched.location && formik.errors.location ? (
              <div className={s.invalidFeedback}>{formik.errors.location}</div>
            ) : null}
          </div>

          <div className={s.containerInput}>
            <label className={s.label} htmlFor="description">
              DESCRIPTION
            </label>
            <textarea
              className={s.textareaAddProduct}
              id="description"
              name="description"
              rows="10"
              onChange={formik.handleChange}
              value={formik.values.description}
              onBlur={formik.handleBlur}
            >
              For example: Iron man suit
            </textarea>
            {formik.touched.description && formik.errors.description ? (
              <div className={s.invalidFeedback}>
                {formik.errors.description}
              </div>
            ) : null}
          </div>

          <div className={s.addPhotos}>
            <span className={s.labelAddPhotos}>Photos</span>
            <div className={s.inputAddPhotos}>
              <ReactFileReader handleFiles={handleFiles} base64={true}>
                {loadedFiles.items.length < 5 ? (
                  <div className={s.addPhotosBtn}>
                    <div className={s.iconAddPhotos}>
                      <Icon name="addProductPhotos" />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </ReactFileReader>
              {loadedFiles.items.map((file, index) => {
                return (
                  <div key={uuidv4()} className={s.photoBlock}>
                    <span
                      className={s.removeIcon}
                      onClick={() => removePhoto(index)}
                    >
                      <div className={s.removeButton}>
                        <Icon name="remove" />
                      </div>
                    </span>
                    <img src={file} className={s.photo} alt={file} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className={s.containerInput}>
            <Input
              className={s.inputAddProduct}
              name="price"
              type="number"
              placeholder="For example: 1000"
              label="PRICE"
              onChange={formik.handleChange}
              value={formik.values.price}
              onBlur={formik.handleBlur}
            />
            {formik.touched.price && formik.errors.price ? (
              <div className={s.invalidFeedback}>{formik.errors.price}</div>
            ) : null}
          </div>

          <button
            type="button"
            // disabled={!(formik.isValid && formik.dirty)}
            onClick={() => handleAddProduct(formik.values, resetForm)}
            className={s.buttonAddProduct}
          >
            {isLoading ? "Loading..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductComponent;
