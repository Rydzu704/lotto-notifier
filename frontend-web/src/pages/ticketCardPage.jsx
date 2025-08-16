import React, { useEffect, useState } from "react";
import TicketCard from "../components/card_layout/TicketCard";
import { TicketService } from "../services/TicketService";

export const TicketCardPage = () => {
 const [data, setData] = useState([])

  useEffect(() => {
    TicketService.getTicket(setData)
  }, []) 

  console.log(data)
  return <TicketCard data={data}/>;
};
