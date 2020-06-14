import React from "react";

import s from "./EditProfile.module.scss";
import { Input } from "../../components";
import { useFormik } from "formik";
import Header from "../../components/Header/Header";
import ReactFileReader from "react-file-reader";

const EditProfileComponent = ({
  handleEditProfile,
  state,
  viewer,
  uploadImage,
  avatarUrl,
  isLoading,
}) => {
  console.log(viewer);

  const style = {
    background: "linear-gradient(180deg, #090810 0%, #171236 100%)",
    color: "#ffffff",
  };

  const editProfileValidate = {
    initialValues: {
      fullName: viewer ? viewer.fullName : "",
      phone: viewer ? viewer.phone : "",
      location: viewer ? viewer.location : "",
    },
  };

  const handleUploadImage = (files) => {
    let file = files[0];

    let data = new FormData();
    data.append("image", file);
    uploadImage(data);
  };

  const formik = useFormik(editProfileValidate);

  console.log(formik.values);

  return (
    <div>
      <Header logo="darkLogo" darkTheme={style}></Header>

      <div className={s.editProfileBlock}>
        <span className={s.header}>Edit Profile</span>

        <div className={s.upgradePhoto}>
          {isLoading ? (
            "Loading..."
          ) : (
            <img
              className={s.userAvatar}
              src={avatarUrl ? avatarUrl : viewer.avatar}
              alt="profile avatar"
            />
          )}
          <ReactFileReader handleFiles={handleUploadImage}>
            <button className={s.upgradePhotoBtn}>Upgrade Photo</button>
          </ReactFileReader>
        </div>

        <div className={s.Form}>
          <Input
            className={s.inputAuth}
            name="fullName"
            type="text"
            placeholder="Full Name"
            label="Tony Stark"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className={s.invalidFeedback}>{formik.errors.fullName}</div>
          ) : null}

          <Input
            className={s.inputAuth}
            name="phone"
            type="text"
            label="PHONE NUMBER"
            placeholder="+38 096 7822 656"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className={s.invalidFeedback}>{formik.errors.phone}</div>
          ) : null}

          <Input
            className={s.inputAuth}
            name="location"
            type="text"
            placeholder="Jakarta, Indonesia"
            label="LOCATION"
            onChange={formik.handleChange}
            value={formik.values.location}
            onBlur={formik.handleBlur}
          />
          {formik.touched.location && formik.errors.location ? (
            <div className={s.invalidFeedback}>{formik.errors.location}</div>
          ) : null}

          <button
            type="button"
            onClick={() => handleEditProfile(formik.values)}
            className={s.buttonAuthSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileComponent;
