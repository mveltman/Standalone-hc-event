export const TaskTierOverview = ({taskCalculation, taskTier}) => {

    return (
        <div className={"taskoverviewcard"}>
            <div className={"taskoverviewtitle"}>
                <div className={`${taskTier}image2`}></div>
            </div>
            <div className={"taskoverviewcontent"}>
                You have completed {taskCalculation.numberOfCompletedTasks} out of a total of {taskCalculation.numberOfTasks} {taskTier} tasks.
            </div>
        </div>
    )
}