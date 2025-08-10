import axiosinstance from "./api/axiosinstance"

export const TicketService = {

    addTicket: (ticketData) => {
        axiosinstance
        .post(`/ticket`,ticketData)
        .then((response) =>{
            console.log(response.status);
        })
        .catch((err)=>{
            console.log("Axios Error: ",err);
        })
    }
};