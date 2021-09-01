import React, {useState} from "react";
import { TaskTierOverview } from "./TaskTierOverview";

export const TaskOverview = () => {

    const calculateTasks = (tier) => {
        let tasks = JSON.parse(localStorage.getItem(tier)).tasks;
        const numberOfTasks = tasks.length;
        let numberOfCompletedTasks = 0;
        tasks.forEach(task => {
            if(task.complete) numberOfCompletedTasks++;
        });
        const returnObject = {numberOfCompletedTasks, numberOfTasks};
        return returnObject;
    }

    const [alive, setAlive] = useState(localStorage.getItem("alive"));

    const toggleAlive = () => {
        if(localStorage.getItem("alive") === "true"){
            localStorage.setItem("alive", "false");
            setAlive("false");
        } else {
            localStorage.setItem("alive", "true");
            setAlive("true");
        }
    }

    const calculatePointTotal = () => {
        const easypointsconst = 10;
        const mediumpointsconst = 50;
        const hardpointsconst = 100;
        const elitepointsconst = 250;
        const masterpointsconst = 500;
        let easypoints = 0;
        let mediumpoints = 0;
        let hardpoints = 0;
        let elitepoints = 0;
        let masterpoints = 0;

        let easytasks = JSON.parse(localStorage.getItem("easyTasks")).tasks;
        let mediumtasks = JSON.parse(localStorage.getItem("mediumTasks")).tasks;
        let hardtasks = JSON.parse(localStorage.getItem("hardTasks")).tasks;
        let elitetasks = JSON.parse(localStorage.getItem("eliteTasks")).tasks;
        let mastertasks = JSON.parse(localStorage.getItem("masterTasks")).tasks;


        easytasks.forEach(task => {
            if(task.complete) easypoints = easypoints + easypointsconst;
        });

        mediumtasks.forEach(task => {
            if(task.complete) mediumpoints = mediumpoints + mediumpointsconst;
        });

        hardtasks.forEach(task => {
            if(task.complete) hardpoints = hardpoints + hardpointsconst;
        });

        elitetasks.forEach(task => {
            if(task.complete) elitepoints = elitepoints + elitepointsconst;
        });

        mastertasks.forEach(task => {
            if(task.complete) masterpoints = masterpoints + masterpointsconst;
        });

        let softpointTotal = easypoints + mediumpoints;
        let hardpointTotal = hardpoints + elitepoints + masterpoints;
        if(alive){
            return softpointTotal + hardpointTotal;
        }else {
            return softpointTotal + hardpointTotal/2;
        }
    }

    return(
        <div className={"taskoverview"}>
            <TaskTierOverview taskCalculation={calculateTasks("easyTasks")} taskTier={"easy"} />
            <TaskTierOverview taskCalculation={calculateTasks("mediumTasks")} taskTier={"medium"} />
            <TaskTierOverview taskCalculation={calculateTasks("hardTasks")} taskTier={"hard"} />
            <TaskTierOverview taskCalculation={calculateTasks("eliteTasks")} taskTier={"elite"} />
            <TaskTierOverview taskCalculation={calculateTasks("masterTasks")} taskTier={"master"} />
            <div className={"hardcorealive"}>
                <label>Is your hardcore alive?</label>
                <input type="checkbox" checked={(alive === "true")} onChange={() => toggleAlive()}></input>
            </div>
            <h1 className={"totalpoints"}>
                Your total amount of points is: <br/> {calculatePointTotal()}
            </h1>
        </div>
    )
}