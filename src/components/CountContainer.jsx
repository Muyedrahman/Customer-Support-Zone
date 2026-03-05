import React, { use, useState } from "react";
import CountBox from "./CountBox";
import Container from "./Container";
import TicketsCard from "./cards/TicketsCard";
import TaskStatus from "./cards/TaskStatus";
import { toast } from "react-toastify";
import ResolvedTask from "./cards/ResolvedTask";


const CountContainer = ({ promise }) => {
  const count = use(promise);

  const [allTickets, setAllTickets] = useState(count);

  const [tickets, setTickets] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);

  const handleTaskStatus = (ticket) => {
    console.log(ticket);

    //  aga check koro
    const isExist = tickets.find((item) => item.id == ticket.id);
    if (isExist) {
      toast.error("Buying it just now !!!");
      return;
    }
    // End  aga check koro

    //  Task Status a dukabo
    const newSetTickets = [...tickets, ticket];
    setTickets(newSetTickets);
    toast.success("In Progress");
  };

  const handleResolvedTask = (ticket) => {
    setResolvedTask([...resolvedTask, ticket]);
    setTickets(tickets.filter((item) => item.id !== ticket.id));
    setAllTickets(allTickets.filter((item) => item.id !== ticket.id));
    toast.success("Task Completed!");
  };

  return (
    <div>
      <CountBox
        ticketTotal={tickets.length}
        countTotal={count.length}
        resolvedTotal={resolvedTask.length}
      />

      <Container>
        {/* grid-cols-12 */}
        <div className="grid md:grid-cols-12 gap-3">
          {/* Left Side */}
          <div className="md:col-span-8">
            <h2 className="text-xl font-bold mb-3">Customer Tickets</h2>
            {/* space-y-10 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* count */}
              {allTickets.map((ticket) => (
                <TicketsCard
                  handleTicket={handleTaskStatus}
                  key={ticket.id}
                  ticket={ticket}
                ></TicketsCard>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="md:col-span-3 space-y-5">
            <h2 className="text-xl font-bold">Task Status</h2>
            <div className="shadow p-10 space-y-5">
              {tickets.map((ticket) => (
                <TaskStatus
                  handleResolvedTask={handleResolvedTask}
                  key={ticket.id}
                  ticket={ticket}
                ></TaskStatus>
              ))}
            </div>
            {/* <p>Select a ticket to add to Task Status</p> */}

            <h2 className="text-xl font-bold mb-3">Resolved Task</h2>
            <div className="shadow p-10 space-y-5">
              {resolvedTask.map((ticket) => (
                <ResolvedTask key={ticket.id} ticket={ticket}></ResolvedTask>
                // <h2>{order.title}</h2>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CountContainer;
