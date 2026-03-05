import ResolvedTask from "../ResolvedTask/ResolvedTask";

const ResolvedTasks = ({ resolvedTasks }) => {
    console.log(resolvedTasks)
    return ( 
        <div>
            <h2 className="text-[#34485A] text-2xl mb-3">Resolved Task</h2>
            {resolvedTasks.length === 0 && <p className="text-[#627382] text-base">No resolved tasks yet.</p>}
            <div>
                {
                    resolvedTasks.map(resolved => <ResolvedTask resolved={resolved} />)
                }
            </div>
        </div>
    )
}

export default ResolvedTasks;