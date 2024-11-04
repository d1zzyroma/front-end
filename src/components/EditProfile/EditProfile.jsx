import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import css from "./EditProfile.module.css";

import icons from "../../images/icons/icons.svg";

const EditProfile = ({ onClose }) => {
  const initialValues = {
    avatar: "",
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    // Логіка для обробки форми (наприклад, збереження змін)
    console.log("Submitted profile data:", values);
    onClose();
  };

  return (
    <div className={css.modal}>
      <h2 className={css.titleName}>Edit profile</h2>
      <button className={css.closeButton} onClick={onClose}>
        <svg className={css.iconClose}>
          <use href={`${icons}#icon-close`} />
        </svg>
      </button>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {() => (
          <Form className={css.formStyle}>
            <label className={css.labelStyle}>
              <input className={css.inputNameImg} type="file" name="avatar" />
              <div className={css.imgBackground}>
                <svg width="68" height="68" className={css.img}>
                  <use xlinkHref={`${icons}#icon-user-ico`} />
                </svg>
                <div className={css.plusIconBackground}>
                  <svg width="10" height="10" className={css.plusIcon}>
                    <use xlinkHref={`${icons}#icon-plus`} />
                  </svg>
                </div>
              </div>
            </label>
            <label className={css.labelStyle}>
              <Field
                className={css.inputName}
                type="text"
                name="name"
                placeholder="Name"
              />
            </label>
            <label className={css.labelStyle}>
              <Field
                className={css.inputName}
                type="email"
                name="email"
                placeholder="Email"
              />
            </label>
            <label className={css.labelStyle}>
              <Field
                className={css.inputName}
                type="password"
                name="password"
                placeholder="Password"
              />
            </label>
            <button type="submit" className={css.btnAdd}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

EditProfile.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EditProfile;
