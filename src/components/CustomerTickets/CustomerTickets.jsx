import { use } from "react";
import Ticket from "../Ticket/Ticket";

const CustomerTickets = ({ ticketsPromise, handleAddTask }) => {
    const customerTickets = use(ticketsPromise);
    return (
        <div className="md:w-[75%]">
            <h3 className="text-2xl font-bold">Customer Tickets</h3>
            <div className="grid md:grid-cols-2 gap-5 mt-3">
                {
                    customerTickets.map(ticket => <Ticket handleAddTask={handleAddTask} ticket={ticket} />)
                }
            </div>
        </div>
    )
}
export default CustomerTickets;