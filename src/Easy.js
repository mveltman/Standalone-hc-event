import React from "react";
import { TaskViewer } from "./taskViewer";

export const Easy = () => {
    const renderTaskList = () => {
        return <TaskViewer tasks={retrieveEasyTasksFromLocalStorage()} tasktier={"easyTasks"} />
    }

    const retrieveEasyTasksFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem("easyTasks"));
    }

    return(
        <div className={"tasks"}>
            <div className={"easyimage"}>
                <h1 className={"tasktitle"}>Easy</h1>
            </div>
            {renderTaskList()}
        </div>
    )
}