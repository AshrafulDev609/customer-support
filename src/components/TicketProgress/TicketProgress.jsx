import ResolvedTasks from "../ResolvedTasks/ResolvedTasks";
import Task from "../Task/Task";

const TicketProgress = ({ pendingTasks, handleCompletedTask, resolvedTasks }) => {
    console.log(pendingTasks)
    return (
        <div className="md:w-[25%]">
            <div className="mb-5">
                <h2 className="text-[#34485A] text-2xl mb-3">Ticket Status</h2>
                {pendingTasks.length === 0 && <p className="text-[#627382] text-base">No pending tasks yet.</p>}
                <div>
                    {
                        pendingTasks.map(task => <Task handleCompletedTask={handleCompletedTask} task={task} />)
                    }
                </div>
            </div>
            <ResolvedTasks resolvedTasks={resolvedTasks} />
        </div>
    )
}

export default TicketProgress;