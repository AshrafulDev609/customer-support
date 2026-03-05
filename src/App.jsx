import { Suspense, useState } from "react";
import Banner from "./components/Banner/Banner"
import CustomerTickets from "./components/CustomerTickets/CustomerTickets"
import Navbar from "./components/Navbar/Navbar"
import TicketProgress from "./components/TicketProgress/TicketProgress"
import { toast } from "react-toastify";

const ticketsPromise = fetch('data.json').then(res => res.json());

function App() {
  const [pendingTasks,  setPendingTasks] = useState([]);
  const [resolvedTasks, setResolvedTask] = useState([]);

  const handleAddTask = task => {
    const alreadyExist = pendingTasks.find(pending => pending.id === task.id);
    if(!alreadyExist) {
      toast('Task added successfully')
      setPendingTasks([...pendingTasks, task])
    } else {
      toast('Already pending this task')
    }
  }

  const handleCompletedTask = task => {
    toast('Task completed successfully')
    const remaining = pendingTasks.filter(pTask => pTask.id !== task.id);
    setResolvedTask([...resolvedTasks, task])
    setPendingTasks(remaining)
  }
  

  return (
    <div className="md:w-[1200px] mx-auto">
      <Navbar />
      <Banner pendingTasks={pendingTasks} resolvedTasks={resolvedTasks} />

      <section className="flex gap-5">
        <Suspense fallback={<h2>Loading...</h2>}>
          <CustomerTickets  handleAddTask={handleAddTask} ticketsPromise={ticketsPromise} />
        </Suspense>
        <TicketProgress pendingTasks={pendingTasks} handleCompletedTask={handleCompletedTask} resolvedTasks={resolvedTasks} />
      </section>
    </div>
  )
}

export default App
