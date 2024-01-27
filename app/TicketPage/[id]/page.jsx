import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id !== "new";
  let updateTicketData = {};

  const getTicketById = async (id) => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch ticket.");
    }
    return res.json();
  };

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
