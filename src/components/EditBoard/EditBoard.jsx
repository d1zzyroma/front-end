// import { useState } from "react";
// import css from './AddEditBoard.module.css';
// import { useDispatch } from "react-redux";
// import { Formik, Form, Field } from "formik";
// import { useSelector, } from 'react-redux';
// import { useState } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./EditBoard.module.css";
import useTheme from "../ThemeContext/ThemeContext.jsx";
import { selectBoards } from "../../redux/boards/slice.js";
import { addBoard, updateBoardById } from "../../redux/boards/slice.js";
import IconPicker from "../IconPicker/IconPicker";
import BackgroundPicker from "../BackgroundPicker/BackgroundPicker";
import AddIconButton from "../AddIconButton/AddIconButton";
import iconDefs from '../../images/icons/icons.svg"';

const boardSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
});

export default function AddEditBoard({ onClose, boardId }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [icon, setIcon] = useState("icon-board-icon-1");
  const [background, setBackground] = useState("");
  const isEditing = useSelector((state) => state.modal.isModalDisplayed);
  // const board = useSelector(selectCurrentBoard);
  const boards = useSelector(selectBoards);

  const board = boards.find((item) => item._id === boardId);

  const handleSelectedIconChange = (selectedIcon) => {
    setIcon(selectedIcon);
  };

  const handleSelectedBackgroundChange = (selectedBackground) => {
    if (selectedBackground === "default") {
      setBackground("");
    } else {
      setBackground(selectedBackground);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (!isEditing) {
        await dispatch(
          addBoard({
            title: values.title,
            background: background,
            icon: icon,
          })
        );
      } else {
        await dispatch(
          updateBoardById({
            title: values.title,
            background: background,
            icon: icon,
            id: boardId,
          })
        );
      }
      resetForm();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button className={css.closeBtn} onClick={onClose}>
        <svg
          style={{ stroke: theme.popUp.closeIconColor }}
          width="18"
          height="18"
        >
          <use xlinkHref={`${iconDefs}#icon-close`} />
        </svg>
      </button>
      <h3 style={{ color: theme.popUp.titleColor }} className={css.titleBoard}>
        {!isEditing ? "New board" : "Edit board"}
      </h3>
      <Formik
        initialValues={{
          title: isEditing ? board.title : "",
          icon: isEditing ? board.icon : icon,
          background: isEditing ? board.background : background,
        }}
        onSubmit={handleSubmit}
        validationSchema={boardSchema}
      >
        <Form>
          <label className={css.label}>
            <ErrorMessage
              className={css.errorMessage}
              name="title"
              component="p"
            />
            <Field
              style={{
                color: theme.popUp.inputTextColor,
                borderColor: theme.popUp.inputBorderColor,
                "::placeholder": { color: theme.popUp.inputPlaceholderColor },
              }}
              className={css.input}
              type="text"
              name="title"
              placeholder="Title"
            />
          </label>
          <IconPicker
            onSelectedIconChange={handleSelectedIconChange}
            defaultIcon={isEditing ? board.icon : icon}
          />
          <BackgroundPicker
            onSelectedBackgroundChange={handleSelectedBackgroundChange}
            defaultBackground={isEditing ? board.background : background}
          />
          <AddIconButton
            buttonType="submit"
            className={css.btn}
            theme={"light"}
          >
            <span
              style={{ color: theme.popUp.buttonTextColor }}
              className={css.btnSumbitAction}
            >
              {!isEditing ? "Create" : "Edit"}
            </span>
          </AddIconButton>
        </Form>
      </Formik>
    </>
  );
}
