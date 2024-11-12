import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import SvgIcon from "../SvgIcon/SvgIcon";
import s from "./EditColumnForm.module.css";
import { updateColumn } from "../../redux/сolumns/operations";

const EditColumnForm = ({ title, columnId, closeModal }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
  });

  const initialValues = {
    title: title || "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const { title } = values;

    dispatch(updateColumn({ columnId, title }));

    resetForm();
    closeModal();
  };

  return (
    <div>
      <div
        className={s.modalOverlay}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <div className={s.modalContent}>
          <div className={s.modalTitleContainer}>
            <h2 className={s.modalTitle}>Edit column</h2>
            <button className={s.closeModalBtn} onClick={closeModal}>
              <SvgIcon id="icon-x-close" className={s.closeBtnIcon} />
            </button>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={s.editColumnForm}>
              <Field
                name="title"
                type="text"
                placeholder="Title"
                className={s.titleInput}
              />
              <ErrorMessage name="title" component="p" className={s.error} />
              <button type="submit" className={s.editBtn}>
                <span className={s.editIconWrap}>
                  <SvgIcon id="icon-plus" className={s.editBtnIcon} />
                </span>
                Edit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditColumnForm;
