import React, { useState } from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import EditTask from "../EditTask/EditTask";
import "./ListTask.scss";

const ListTask = () => {
  const filterDoneValue = useSelector((state) => state.taskList.filterComplete);
  const filterDateValue = useSelector((state) => state.taskList.filterDate);
  const filterTermValue = useSelector((state) => state.taskList.filterTerm);
  const taskList = useSelector((state) => state.taskList.taskList);
  const toggleEditModal = useSelector((state) => state.editTaskToggle);
  const toggleFilter = useSelector((state) => state.toggleFilter);
  const [toEditTask, setToEditTask] = useState({});

  let filteredTasks = taskList
    .filter((task) =>
      filterDoneValue === "complete"
        ? task.isDone === true
        : filterDoneValue === "notComplete"
        ? task.isDone === false
        : task
    )
    .filter((task) =>
      filterDateValue !== "all" ? task.date === filterDateValue : task
    )
    .filter((task) =>
      filterTermValue !== ""
        ? task.title.toLowerCase().includes(filterTermValue.toLowerCase()) ||
          task.content.toLowerCase().includes(filterTermValue.toLowerCase())
        : task
    );

  return (
    <React.Fragment>
      <div className="section has-background-grey-dark tasks-list-wrapper">
        <div className="  container is-fluid">
          <div
            className={`block task-list-wrapper ${
              toggleFilter ? "translate" : ""
            }`}
          >
            <div className="columns is-multiline">
              {filteredTasks.map((task) => (
                <Task key={task.id} task={task} setToEditTask={setToEditTask} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {toggleEditModal && <EditTask toEditTask={toEditTask} />}
    </React.Fragment>
  );
};

export default ListTask;
