import SvgIcon from "../SvgIcon/SvgIcon";
import styles from "./EditBoard.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

import noBack from "../../images/images-bg/images-bg-default.png";
import { updateBoard } from "../../redux/boards/operations.js";
import icons from "../../images/icons/icons.js";
import backgrounds from "../../images/background/background.js";
import { getBoardById } from "../../redux/сolumns/operations.js";

export const EditBoard = ({ closeEditBoard, boardId }) => {
  const [iconsSelected, setIconsSelected] = useState("icon-Project");
  const [backgroundSelected, setBackgroundSelected] = useState("1"); // Змінюємо на ID як в NewBoard
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleIconChange = (event) =>
    setIconsSelected(event.currentTarget.dataset.source);

  // Обробник вибору фону, аналогічний NewBoard
  const handleBackgroundChange = (event) => {
    const selectedBackgroundId = event.currentTarget.dataset.source;
    console.log("Selected background ID:", selectedBackgroundId); // Для перевірки

    // Знаходимо фон за ID
    const selectedBackground = backgrounds.find(
      (bg) => bg.id === parseInt(selectedBackgroundId)
    );
    console.log("Selected background:", selectedBackground);

    // Зберігаємо лише ID вибраного фону
    setBackgroundSelected(
      selectedBackground ? String(selectedBackground.id) : "0"
    );
  };

  const editedBoardObject = {
    title,
    icon: iconsSelected,
    background: backgroundSelected,
  };

  const createUpdatedBoard = async () => {
    console.log("Board object to dispatch:", editedBoardObject);
    dispatch(updateBoard({ boardId, editedBoardObject }));
    await dispatch(getBoardById(boardId));
    closeEditBoard();
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeEditBoard();
      }}
    >
      <div className={styles.divCard}>
        <h2 className={styles.textNew}>Edit board</h2>
        <input
          className={styles.titleInput}
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <button onClick={closeEditBoard}>
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
              backgroundSelected === "no-background"
                ? styles.listItemActive
                : styles.listItem
            }
          >
            <input
              type="radio"
              name="backgrounds"
              data-source="no-background"
              className={styles.inputBack}
              checked={backgroundSelected === "no-background"}
              onChange={handleBackgroundChange}
            />
            <img src={noBack} alt="no-background" className={styles.img_back} />
          </li>
          {backgrounds.map((bg) => (
            <li
              key={bg.id}
              className={
                backgroundSelected === String(bg.id)
                  ? styles.listItemActive
                  : styles.listItem
              }
            >
              <input
                type="radio"
                name="backgrounds"
                data-source={bg.id} // Передаємо ID
                className={styles.inputBack}
                checked={backgroundSelected === String(bg.id)} // Перевірка по ID
                onChange={handleBackgroundChange}
              />
              <img src={bg.min} alt={bg.alt} className={styles.img_back} />
            </li>
          ))}
        </ul>
        <button className={styles.mainButton} onClick={createUpdatedBoard}>
          <div className={styles.plusBtnZaglushka}>
            <SvgIcon id="icon-plus" className={styles.plusIcon} />
          </div>
          Edit
        </button>
      </div>
    </div>
  );
};

export default EditBoard;
