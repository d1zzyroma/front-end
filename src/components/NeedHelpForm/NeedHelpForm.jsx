import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./NeedHelpForm.module.css";
import SvgIcon from "../SvgIcon/SvgIcon";
import { useDispatch } from "react-redux";
import { needHelp } from "../../redux/auth/operations";

const NeedHelpForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Enter a valid email address"
      )
      .required("Email is required"),
    message: Yup.string().min(7).max(230).required("Message is required"),
  });

  const initialValues = {
    email: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const { email, message } = values;
    const formData = { email, message };

    dispatch(needHelp(formData));

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
            <h2 className={s.modalTitle}>Need Help</h2>
            <button onClick={closeModal} className={s.closeModalBtn}>
              <SvgIcon id="icon-x-close" className={s.closeBtnIcon} />
            </button>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={s.needHelpForm}>
              <Field
                name="email"
                type="email"
                placeholder="Email address"
                className={s.emailInput}
              />
              <ErrorMessage name="email" component="p" className={s.error} />
              <Field
                as="textarea"
                name="message"
                placeholder="Message"
                rows="4"
                className={s.messageInput}
              />
              <ErrorMessage name="message" component="p" className={s.error} />
              <button type="submit" className={s.sendBtn}>
                Send
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default NeedHelpForm;
