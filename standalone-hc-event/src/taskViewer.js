import React, {useState} from "react";

export const TaskViewer = ({ tasks, tasktier }) => {

    const [taskarray, setTasksarray] = useState(tasks.tasks);

    //terrible coding pls dont look i just cba
    const checkboxInputChange = (taskname) => {
        let tasklist = []
        taskarray.forEach(task => {
            if(task.name === taskname) {
                task.complete = !task.complete
            }
            tasklist.push(task);
        });
        console.log(tasklist)
        setTasksarray(tasklist);
        localStorage.setItem(tasktier, JSON.stringify({"tasks": tasklist}))
    }

    return (
        <div className={"taskviewer"}>
            {
                taskarray.map((task) => {
                    return (
                    <div className={"task"}>
                        <div className={"taskname"}>
                            {task.name}
                        </div>
                        <div className={"taskdescription"}>
                            {task.description}
                        </div>
                        <div className={"taskComplete"}>
                            <label>Complete? </label>
                            <input onChange={() => checkboxInputChange(task.name)} type="checkbox" checked={task.complete}/>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}