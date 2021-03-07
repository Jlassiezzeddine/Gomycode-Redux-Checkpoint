import React from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import "./ListTask.scss";
const ListTask = () => {
  const taskList = useSelector((state) => state.taskList);
  return (
    <div className="section has-background-grey-dark tasks-list-wrapper">
      <div className="  container is-fluid">
        <div className="block ">
          <div className="columns is-multiline">
            {taskList.map((task) => (
              <Task task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTask;
