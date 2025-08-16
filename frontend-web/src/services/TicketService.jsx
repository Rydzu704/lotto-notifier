import axiosinstance from "./api/axiosinstance"

export const TicketService = {
    getTicket: (callback) =>{
        axiosinstance
        .get(`/ticket`)
        .then((value) =>{
            if (value.status === 200){
                callback(value.data)
            }
        });
    },
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