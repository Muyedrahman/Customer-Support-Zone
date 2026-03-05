import React from "react";

// handleTicketTask
const TicketsCard = ({ ticket, handleTicket }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  // const handleClick = () => {
  //   handleTicketTask(ticket);
  // };

  return (
    <div
      onClick={() => handleTicket(ticket)}
      className="cursor-pointer bg-white p-5 rounded-2xl shadow-lg space-y-3 hover:shadow-xl transition"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h2 className="font-bold text-lg">{title}</h2>
        <div
          className={`rounded-lg p-1 flex items-center gap-1 h-fit w-fit ${
            status === "Open"
              ? "bg-[#B9F8CF] text-[#0B5E06]"
              : "bg-[#F8F3B9] text-[#9C7700]"
          }`}
        >
          <i className="fa-solid fa-circle"></i>
          <p className="font-bold">{status}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm">
        {description.length > 120
          ? description.substring(0, 120) + "..."
          : description}
      </p>

      <div className="flex flex-col md:flex-row justify-between text-sm text-gray-700">
        <div className="flex gap-2">
          <p>#{id}</p>
          <p
            className={`font-bold ${
              priority === "High"
                ? "text-red-600"
                : priority === "Medium"
                  ? "text-orange-600"
                  : "text-green-600"
            }`}
          >
            {priority} PRIORITY
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="font-semibold">{customer}</p>
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-calendar-days"></i>
            <p>{createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsCard;
