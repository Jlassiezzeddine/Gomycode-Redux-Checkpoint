import React, { useState } from "react";
import "./Task.scss";
import { useDispatch } from "react-redux";
import { deleteTask, toggleEditTaskPopUp, toggleIsDone } from "../../actions";

const Task = ({ task, setToEditTask }) => {
  const [toggleDoneBadge, setToggleDoneBadge] = useState(task.isDone);
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(toggleEditTaskPopUp());
    setToEditTask({ ...task });
  };
  const handleDone = () => {
    dispatch(toggleIsDone(task.id));
    setToggleDoneBadge(!toggleDoneBadge);
  };
  return (
    <div className="column is-one-quarter ">
      <div className="card">
        <header className="card-header">
          {task.isDone ? (
            <span className="badge tag is-success">Done</span>
          ) : (
            <span className="badge tag is-danger">Not Done</span>
          )}
          <h2 className="card-header-title">{task.title}</h2>
        </header>
        <div className="card-content">
          <div className="content">
            {task.content}

            <hr />
            <time>Due to : {task.date}</time>
          </div>
        </div>
        <footer className="card-footer">
          {task.isDone ? (
            <div className="card-footer-item" onClick={handleDone}>
              <i className="fa fa-check"></i>
            </div>
          ) : (
            <div className="card-footer-item" onClick={handleDone}>
              <i className="fa fa-times"></i>
            </div>
          )}
          <div className="card-footer-item" onClick={handleEdit}>
            <i className="fa fa-edit"></i>
          </div>
          <div
            className="card-footer-item"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            <i className="fa fa-trash-alt"></i>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Task;
