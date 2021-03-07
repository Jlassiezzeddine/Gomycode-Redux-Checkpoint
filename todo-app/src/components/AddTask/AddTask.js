import React from "react";
import { useDispatch } from "react-redux";
import { toggleTaskPopUp, addNewTask } from "../../actions";
import useTaskValidation from "./useTaskValidation";
import validate from "./validateInfo";
const AddTask = () => {
  const dispatch = useDispatch();

  const submitForm = () => {
    dispatch(toggleTaskPopUp());
    dispatch(addNewTask(values.title, values.content, values.date));
  };

  const { handleChange, values, handleSubmit, errors } = useTaskValidation(
    submitForm,
    validate
  );
  return (
    <div className="modal is-active">
      <div
        className="modal-background"
        onClick={() => dispatch(toggleTaskPopUp())}
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create new task</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => dispatch(toggleTaskPopUp())}
          ></button>
        </header>
        <section className="modal-card-body">
          <form action="" className="form">
            <div className="field">
              <label className="label">Task Title</label>
              <div className="control has-icons-right">
                <input
                  className={`input ${errors.title && "is-danger"}`}
                  type="text"
                  placeholder="Text input"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                />
                {errors.title && (
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                )}
              </div>
              {errors.title && <p className="help is-danger">{errors.title}</p>}
            </div>
            <div className="field">
              <label className="label">Task content</label>
              <div className="control has-icons-right">
                <textarea
                  className={`textarea ${errors.content && "is-danger"}`}
                  placeholder="e.g. Do chores"
                  name="content"
                  value={values.content}
                  onChange={handleChange}
                ></textarea>
                {errors.content && (
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                )}
              </div>
              {errors.content && (
                <p className="help is-danger">{errors.content}</p>
              )}
            </div>
            <div className="field">
              <label className="label">Task Due Date</label>
              <div className="control has-icons-right">
                <input
                  type="date"
                  className={`input ${errors.date && "is-danger"}`}
                  name="date"
                  id="date"
                  value={values.date}
                  onChange={handleChange}
                />
                {errors.date && (
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                )}
              </div>
              {errors.date && <p className="help is-danger">{errors.date}</p>}
            </div>
          </form>
        </section>
        <footer className="modal-card-foot ">
          <button className="button is-success " onClick={() => handleSubmit()}>
            Save
          </button>
          <button
            className="button is-pulled-right"
            onClick={() => dispatch(toggleTaskPopUp())}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};
export default AddTask;
