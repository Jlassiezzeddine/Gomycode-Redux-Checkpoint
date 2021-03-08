import React, { useState } from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import EditTask from "../EditTask/EditTask";
import "./ListTask.scss";

const ListTask = () => {
  const taskList = useSelector((state) => state.taskList);
  const toggleEditModal = useSelector((state) => state.editTaskToggle);
  const [toEditTask, setToEditTask] = useState({});
  return (
    <React.Fragment>
      <div className="section has-background-grey-dark tasks-list-wrapper">
        <div className="  container is-fluid">
          <div className="block ">
            <div className="columns is-multiline">
              {taskList.map((task) => (
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
