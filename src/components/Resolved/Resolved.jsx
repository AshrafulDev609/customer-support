const Resolved = ({ resolvedTasks }) => {
    return (
        <div className="text-center flex items-center justify-center md:w-5/10 secondary-bg rounded-md p-10">
            <div className="text-white">
                <p>Resolved</p>
                <h2 className="text-4xl font-bold ">{resolvedTasks.length}</h2>
            </div>
        </div>
    )
}

export default Resolved;