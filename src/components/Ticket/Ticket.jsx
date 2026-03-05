import { CiCalendar } from "react-icons/ci";

const Ticket = ({ ticket, handleAddTask }) => {
    return ( 
        <div className="bg-white rounded p-5 cursor-pointer" onClick={() => handleAddTask(ticket)}>
            <div className="flex justify-between items-center">
                <h2 className="text-lg text-[#001931] font-medium">{ticket.title}</h2>
                <p className="btn">{ticket.status}</p>
            </div>
            <p className="text-base text-[#627382] mt-3 ">{ticket.description}</p>
            <div className="flex justify-between items-center mt-3">
                <div className='flex items-center gap-2'>
                    <p    className="text-[#627382] font-medium">#{ticket.id}</p>
                    <p className={`font-medium text-sm ${ticket.priority === 'High' ? 'text-[#F83044]' : ticket.priority === 'Medium' ? 'text-[#FEBB0C]' : 'text-red-200'}`}>{ticket.priority}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="text-[#627382] font-normal">{ticket.customer}</p>
                    <p  className="flex items-center text-[#627382] font-normal "> <CiCalendar />{ticket.createdAt}</p>
                </div>
            </div>
        </div>
    )
}

export default Ticket;