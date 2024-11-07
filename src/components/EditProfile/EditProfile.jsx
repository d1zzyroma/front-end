import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import s from "./EditProfile.module.css";
import icons from "../../images/icons/icons.svg";

const EditProfile = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    avatar: "",
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("Submitted profile data:", values);
    onClose();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <h2 className={s.titleName}>Edit profile</h2>
        <button className={s.closeButton} onClick={onClose}>
          <svg className={s.iconClose}>
            <use href={`${icons}#icon-close`} />
          </svg>
        </button>

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {() => (
            <Form className={s.formStyle}>
              <label className={s.labelStyle}>
                <input className={s.inputNameImg} type="file" name="avatar" />
                <div className={s.imgBackground}>
                  <svg width="68" height="68" className={s.img}>
                    <use xlinkHref={`${icons}#icon-user-ico`} />
                  </svg>
                  <div className={s.plusIconBackground}>
                    <svg width="10" height="10" className={s.plusIcon}>
                      <use xlinkHref={`${icons}#icon-plus`} />
                    </svg>
                  </div>
                </div>
              </label>
              <label className={s.labelStyle}>
                <Field
                  className={s.inputName}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </label>
              <label className={s.labelStyle}>
                <Field
                  className={s.inputName}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </label>
              <label className={`${s.labelStyle} ${s.passwordLabel}`}>
                <Field
                  className={s.inputName}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={s.passwordToggle}
                  aria-label="Toggle password visibility"
                >
                  <svg className={s.iconEye}>
                    <use
                      href={`${icons}#${
                        showPassword ? "icon-eyes-closed" : "icon-eyes"
                      }`}
                    />
                  </svg>
                </button>
              </label>
              <button type="submit" className={s.btnAdd}>
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EditProfile;
