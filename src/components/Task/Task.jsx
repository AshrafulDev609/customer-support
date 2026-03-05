const Task = ({ task, handleCompletedTask }) => {
    return <div  className='bg-white space-y-2 p-4 rounded shadow-sm w-full mb-3'>
        <h2 className="text-xl font-bold">{task.title}</h2>
        <button className="btn bg-[#02A53B] text-white w-full" onClick={() => handleCompletedTask(task)}>Complete</button>
    </div>
}
export default Task;