import s from "./AddCard.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SvgIcon from "../SvgIcon/SvgIcon.jsx";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/cards/operations.js";
import { useState } from "react";

const AddCardForm = ({ closeModal, columnId }) => {
  const initialValues = {
    title: "",
    description: "",
    labelColor: "#656565", // Цвет по умолчанию для "Without priority"
    priority: "Without priority",
    deadline: new Date(),
  };
  const [selectedDate, setSelectedDate] = useState(new Date());

  const startDate = Date.now();
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required").min(3),
    description: Yup.string().required("Description is required").min(3),
    labelColor: Yup.string().required("Color is required"),
    deadline: Yup.date().required("Deadline is required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { title, description, deadline, priority } = values;
    const data = { title, description, deadline, priority };
    dispatch(addCard({ columnId, data }));
    closeModal();
  };

  const labelOptions = [
    { color: "#8fa1d0", priority: "Low" },
    { color: "#e09cb5", priority: "Medium" },
    { color: "#bedbb0", priority: "High" },
    { color: "#656565", priority: "Without priority" },
  ];

  return (
    <div
      className={s.modalOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className={s.modal}>
        <div className={s.modalcontent}>
          <h2 className={s.title}>Add Card</h2>
          <button className={s.closebtn} onClick={closeModal}>
            <SvgIcon id="icon-close" className={s.iconclose} />
          </button>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form className={s.form}>
                <div className={s.input}>
                  <Field name="title" placeholder="Title" className={s.field} />
                  <ErrorMessage
                    name="title"
                    component="p"
                    className={s.error}
                  />
                </div>

                <div className={s.input}>
                  <Field
                    as="textarea"
                    name="description"
                    placeholder="Description"
                    className={s.fielddescr}
                  />
                  <ErrorMessage
                    name="description"
                    component="p"
                    className={s.error}
                  />
                </div>

                <div className={s.input}>
                  <label>Label color</label>
                  <div className={s.labelColors}>
                    {labelOptions.map(({ color, priority }) => (
                      <label
                        key={color}
                        className={`${s.colorLabel} ${
                          values.labelColor === color ? s.selectedColor : ""
                        }`}
                      >
                        <Field
                          type="radio"
                          name="labelColor"
                          value={color}
                          className={`${s.colorRadio} ${s.colorButton}`}
                          style={{ background: color }}
                          onClick={() => setFieldValue("priority", priority)}
                        />
                      </label>
                    ))}
                  </div>
                  <ErrorMessage
                    name="labelColor"
                    component="p"
                    className={s.error}
                  />
                </div>

                <div className={s.input}>
                  <label htmlFor="deadline">Deadline</label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                      setFieldValue("deadline", date);
                      setSelectedDate(date);
                    }}
                    placeholderText="Select Date"
                    dateFormat="EEEE, MMMM dd"
                    minDate={startDate}
                    showPopperArrow={false}
                    onFocus={(e) => e.target.blur()}
                    onKeyDown={(e) => e.preventDefault()}
                  />
                  <ErrorMessage
                    name="deadline"
                    component="p"
                    className={s.error}
                  />
                </div>

                <button type="submit" className={s.btn}>
                  <div className={s.btnplus}>
                    <SvgIcon id="icon-plus" className={s.btnicon} />
                  </div>{" "}
                  <p className={s.btntext}>Add</p>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddCardForm;
