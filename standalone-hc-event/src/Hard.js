import React from "react";
import { TaskViewer } from "./taskViewer";

export const Hard = () => {
    const renderTaskList = () => {
        return <TaskViewer tasks={retrievehardTasksFromLocalStorage()} tasktier={"hardTasks"} />
    }

    const retrievehardTasksFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem("hardTasks"));
    }

    return(
        <div className={"tasks"}>
            <div className={"hardimage"}>
                <h1 className={"tasktitle"}>Hard</h1>
            </div>
            {renderTaskList()}
        </div>
    )
}