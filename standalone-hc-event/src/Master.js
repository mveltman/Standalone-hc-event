import React from "react";
import { TaskViewer } from "./taskViewer";

export const Master = () => {
    const renderTaskList = () => {
        return <TaskViewer tasks={retrieveMasterTasksFromLocalStorage()} tasktier={"masterTasks"} />
    }

    const retrieveMasterTasksFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem("masterTasks"));
    }

    return(
        <div className={"tasks"}>
            <div className={"masterimage"}>
                <h1 className={"tasktitle"}>Master</h1>
            </div>
            {renderTaskList()}
        </div>
    )
}