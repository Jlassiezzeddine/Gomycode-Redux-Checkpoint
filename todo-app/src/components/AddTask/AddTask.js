import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskPopUp } from "../../actions";
const AddTask = () => {
  const toggleModal = useSelector((state) => state.addTaskToggle);
  const dispatch = useDispatch();
  return (
    <div className={`modal ${toggleModal && "is-active"}`}>
      <div
        className="modal-background"
        onClick={() => dispatch(toggleTaskPopUp())}
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create new task</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <form action="" className="form">
            <div className="field">
              <label className="label">Task Title</label>
              <div className="control has-icons-right">
                <input
                  className={`input `}
                  type="text"
                  placeholder="Text input"
                  name="title"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Task Body</label>
              <div className="control has-icons-right">
                <textarea
                  className={`textarea`}
                  placeholder="e.g. Do chores"
                  name="body"
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Task Due Date</label>
              <div className="control has-icons-right">
                <input type="date" className={`input `} name="date" id="date" />
              </div>
            </div>
          </form>
        </section>
        <footer className="modal-card-foot ">
          <button className="button is-success ">Save</button>
          <button className="button is-pulled-right">Cancel</button>
        </footer>
      </div>
    </div>
  );
};
export default AddTask;
