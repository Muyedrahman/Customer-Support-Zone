import React from "react";

const ResolvedTask = ({ ticket }) => {
  return (
    <div className="space-y-3 text-black bg-white p-4 rounded shadow">
      <h2 className="font-bold">{ticket.title}</h2>
      <button className="btn rounded-xl bg-green-500 text-white w-full">
        Complete
      </button>
    </div>
  );
};

export default ResolvedTask;
