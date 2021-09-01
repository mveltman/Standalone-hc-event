import React from "react";
import { TaskViewer } from "./taskViewer";

export const Medium = () => {
    const renderTaskList = () => {
        return <TaskViewer tasks={retrieveMediumTasksFromLocalStorage()} tasktier={"mediumTasks"} />
    }

    const retrieveMediumTasksFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem("mediumTasks"));
    }

    return(
        <div className={"tasks"}>
            <div className={"mediumimage"}>
                <h1 className={"tasktitle"}>Medium</h1>
            </div>
            {renderTaskList()}
        </div>
    )
}