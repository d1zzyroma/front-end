import SvgIcon from "../SvgIcon/SvgIcon";
import styles from "./NewBoard.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

import noBack from "../../images/images-bg/images-bg-default.png";
import { addBoard } from "../../redux/boards/operations.js";
import icons from "../../images/icons/icons.js";
import backgrounds from "../../images/background/background.js";
import { useNavigate } from "react-router-dom";

export const NewBoard = ({ closeModal }) => {
  const [iconsSelected, setIconsSelected] = useState("Project");
  const [backgroundSelected, setBackgroundSelected] = useState("0"); // Изменили на null
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    const value = event.target.value;

    setTitle(event.target.value);

    if (!value.trim()) {
      setTitleError("Title is required");
    } else if (value.trim().length < 3) {
      setTitleError("Title must be at least 3 characters");
    } else {
      setTitleError("");
    }
  };

  const handleIconChange = (event) =>
    setIconsSelected(event.currentTarget.dataset.source);

  // Обработчик выбора фона
  const handleBackgroundChange = (event) => {
    const selectedBackgroundId = event.currentTarget.dataset.source;

    // Ищем сам объект фона по ID
    const selectedBackground = backgrounds.find(
      (bg) => bg.id === parseInt(selectedBackgroundId)
    );

    // Сохраняем только ID выбранного фона
    setBackgroundSelected(selectedBackground ? selectedBackground.id : "0");
  };

  const newBoardObject = {
    title,
    icon: iconsSelected,
    // Преобразуем ID фона в строку
    background: backgroundSelected ? String(backgroundSelected) : null,
  };

  const createNewBoard = () => {
    if (!title.trim()) {
      setTitleError("Title is required");
      return;
    }

    if (title.trim().length < 3) {
      setTitleError("Title must be at least 3 characters");
      return;
    }

    dispatch(addBoard(newBoardObject));
    navigate(`/home/${newBoardObject.title}`);
    closeModal();
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className={styles.divCard}>
        <h2 className={styles.textNew}>New board</h2>
        <input
          className={styles.titleInput}
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        {titleError && <p className={styles.error}>{titleError}</p>}
        <button onClick={closeModal}>
          <SvgIcon id="icon-close" className={styles.iconclose} />
        </button>
        <h3 className={styles.textIcons}>Icons</h3>
        <ul className={styles.listDarkIcons}>
          {icons.map((icon) => (
            <li key={icon.id} className={styles.iconContainer}>
              <input
                type="radio"
                data-source={icon.name}
                name="icons"
                className={styles.inputRad}
                checked={iconsSelected === icon.name}
                onChange={handleIconChange}
              />
              <SvgIcon
                id={icon.id}
                className={
                  iconsSelected === icon.name
                    ? styles.darkIcons
                    : styles.serIcons
                }
              />
            </li>
          ))}
        </ul>
        <h3 className={styles.textBackground}>Background</h3>
        <ul className={styles.listColorIcons}>
          <li
            className={
              backgroundSelected === null
                ? styles.listItemActive
                : styles.listItem
            }
          >
            <input
              type="radio"
              name="backgrounds"
              data-source="0"
              className={styles.inputBack}
              checked={backgroundSelected === null}
              onChange={handleBackgroundChange}
            />
            <img src={noBack} alt="no-background" className={styles.img_back} />
          </li>
          {backgrounds.map((bg) => (
            <li
              key={bg.id}
              className={
                backgroundSelected === bg.id
                  ? styles.listItemActive
                  : styles.listItem
              }
            >
              <input
                type="radio"
                name="backgrounds"
                data-source={bg.id} // Передаем только ID
                className={styles.inputBack}
                checked={backgroundSelected === bg.id} // Проверяем по ID
                onChange={handleBackgroundChange}
              />
              <img src={bg.min} alt={bg.alt} className={styles.img_back} />
            </li>
          ))}
        </ul>
        <button className={styles.mainButton} onClick={createNewBoard}>
          <div className={styles.plusBtnZaglushka}>
            <SvgIcon id="icon-plus" className={styles.plusIcon} />
          </div>
          Create
        </button>
      </div>
    </div>
  );
};

export default NewBoard;
