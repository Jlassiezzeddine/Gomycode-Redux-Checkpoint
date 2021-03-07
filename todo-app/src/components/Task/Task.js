import React from "react";
import "./Task.scss";

const Task = ({ task }) => {
  return (
    <div className="column is-one-quarter ">
      <div className="card">
        <header className="card-header">
          <h2 className="card-header-title">{task.title}</h2>
        </header>
        <div className="card-content">
          <div className="content">
            {task.content}

            <hr />
            <time datetime="2016-1-1">Due to : {task.date}</time>
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item">
            <i className="fa fa-check"></i>
          </div>
          <div className="card-footer-item">
            <i className="fa fa-edit"></i>
          </div>
          <div className="card-footer-item">
            <i className="fa fa-trash-alt"></i>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Task;
