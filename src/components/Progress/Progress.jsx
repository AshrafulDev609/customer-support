const Progress = ({ pendingTasks }) => {
    return (
        <div className="text-center flex items-center justify-center md:w-5/10 primary-bg rounded-md p-10">
            <div className="text-white">
                <p>In-Progress</p>
                <h2 className="text-4xl font-bold ">{pendingTasks.length}</h2>
            </div>
        </div>
    )
}

export default Progress;