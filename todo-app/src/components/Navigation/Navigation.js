import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleAddTaskPopUp, toggleFilterMenu } from "../../actions";
import AddTask from "../AddTask/AddTask";

import "./Navigation.scss";

const Navigation = () => {
  let d = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayIndex = d.getDay();
  const dayName = days[dayIndex];
  const day = d.getDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIndex = d.getMonth();
  const monthName = months[monthIndex];

  let date = {
    dayName,
    monthName,
    day,
  };

  const toggleAddModal = useSelector((state) => state.addTaskToggle);
  const toggleFilter = useSelector((state) => state.toggleFilter);
  const taskList = useSelector((state) => state.taskList);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="main-navigation">
        <nav className="navbar is-spaced has-background-grey-darker ">
          <div className="navbar-start pl-4">
            <div className="navbar-item">
              <div className="infos">
                <h2 className="title is-4 has-text-white">{`${date.dayName}, ${date.monthName} ${date.day}`}</h2>
                <p className="subtitle is-6 has-text-info has-text-weight-bold">
                  {taskList.filter((task) => task.isDone === false).length}{" "}
                  Active Tasks
                </p>
              </div>
            </div>
          </div>

          <div className=" navbar-end  pr-4">
            <div className="navbar-item">
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    type="text"
                    className="input  is-dark"
                    placeholder="Search for a task"
                  />
                  <span className="icon  is-left ">
                    <i className="fas fa-search fa-1x"></i>
                  </span>
                </p>
              </div>
            </div>
            <div className="navbar-item">
              <button
                className="button is-info "
                onClick={() => {
                  dispatch(toggleFilterMenu());
                }}
              >
                <i className="fa fa-sliders-h"></i>
              </button>
            </div>
            <div className="navbar-item">
              <button
                className="button is-primary"
                onClick={() => dispatch(toggleAddTaskPopUp())}
              >
                <i className="fa fa-plus fa-xs mr-2"></i>Create
              </button>
            </div>
          </div>
        </nav>

        <div
          className={`navbar is-spaced has-background-grey-light filter-wrapper ${
            toggleFilter ? "active" : ""
          }`}
        >
          <ul className="navbar-menu navbar-end pr-4">
            <li className="navbar-item">
              <div className="control">
                <label className="radio ">
                  <input type="radio" name="isComplete" value="false" />{" "}
                  Completed
                </label>
                <label className="radio ">
                  <input type="radio" name="isComplete" value="true" />{" "}
                  Incomplete
                </label>
              </div>
            </li>

            <li className="navbar-item">
              <div className="select">
                <select
                  name="dueDate"
                  id="dueDate"
                  defaultValue="Select a Date"
                >
                  {taskList.map((task) => (
                    <option key={task.title}>{task.date}</option>
                  ))}
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {toggleAddModal && <AddTask />}
    </React.Fragment>
  );
};

export default Navigation;
