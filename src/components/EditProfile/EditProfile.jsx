import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../redux/auth/operations.js";
import {
  selectUserName,
  selectUserAvatar,
  selectUserEmail,
} from "../../redux/auth/selectors.js";
import userAvaDefault from "../../images/user.png";
import s from "./EditProfile.module.css";
import icons from "../../images/icons/icons.svg";

const EditProfile = ({ onClose }) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userAva = useSelector(selectUserAvatar);
  const userEmail = useSelector(selectUserEmail);

  const [showPassword, setShowPassword] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setName(userName || "");
    setEmail(userEmail || "");
    setAvatarPreview(userAva || userAvaDefault);
  }, [userName, userEmail, userAva]);

  const handleAvatarChange = (event) => {
    const file = event.currentTarget.files[0];
    setAvatarFile(file);
    setAvatarPreview(file ? URL.createObjectURL(file) : null);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const updatedFields = {
      name: name || userName,
      email: email || userEmail,
    };

    if (avatarFile) updatedFields.avatarUrl = avatarFile;

    dispatch(updateUserProfile(updatedFields)).finally(() => {
      setIsLoading(false);
      onClose();
    });
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
        {isLoading ? (
          <span className={s.loader}></span>
        ) : (
          <form onSubmit={onSubmit} className={s.formStyle}>
            <label className={s.labelStyle}>
              <input
                className={s.inputNameImg}
                type="file"
                name="avatar"
                onChange={handleAvatarChange}
                accept="image/*"
              />
              <div className={s.imgBackground}>
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="Avatar Preview"
                    className={s.avatarPreview}
                  />
                ) : (
                  <svg width="68" height="68" className={s.img}>
                    <use xlinkHref={`${icons}#icon-user-ico`} />
                  </svg>
                )}
                <div className={s.plusIconBackground}>
                  <svg width="10" height="10" className={s.plusIcon}>
                    <use xlinkHref={`${icons}#icon-plus`} />
                  </svg>
                </div>
              </div>
            </label>

            <label className={s.labelStyle}>
              <input
                className={s.inputName}
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </label>
            <label className={s.labelStyle}>
              <input
                className={s.inputName}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </label>
            <label className={`${s.labelStyle} ${s.passwordLabel}`}>
              <input
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
                      showPassword ? "icon-eyes" : "icon-eyes-closed"
                    }`}
                  />
                </svg>
              </button>
            </label>

            <button type="submit" className={s.btnAdd}>
              Save
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EditProfile;
