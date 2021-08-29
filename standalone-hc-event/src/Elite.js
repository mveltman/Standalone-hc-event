import React from "react";
import { TaskViewer } from "./taskViewer";

export const Elite = () => {
    const renderTaskList = () => {
        return <TaskViewer tasks={retrieveeliteTasksFromLocalStorage()} tasktier={"eliteTasks"} />
    }

    const retrieveeliteTasksFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem("eliteTasks"));
    }

    return(
        <div className={"tasks"}>
            <div className={"eliteimage"}>
                <h1 className={"tasktitle"}>Elite</h1>
            </div>
            {renderTaskList()}
        </div>
    )
}