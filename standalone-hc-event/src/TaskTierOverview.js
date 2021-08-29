export const TaskTierOverview = ({taskCalculation, taskTier}) => {

    return (
        <div className={"taskoverviewcard"}>
            <div className={"taskoverviewtitle"}>
                
                <p><div className={`${taskTier}image2`}></div></p>
            </div>
            <div className={"taskoverviewcontent"}>
                You have completed {taskCalculation.numberOfCompletedTasks} out of a total of {taskCalculation.numberOfTasks} {taskTier} tasks.
            </div>
        </div>
    )
}