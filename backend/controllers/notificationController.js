const ticketQuery = require("../queries/ticketQuery");

const sendNotification = async (notification) => {
    console.log(notification)
  try {
    
    
    const [savedNotification] = await ticketQuery.addNotification(notification);
    await ticketQuery.updatePendingStatus(notification);
    return { message: "Notification updated", results: savedNotification };
  } catch (error) {
    console.error("Error in sendResults:", error);
    throw new Error("Internal server error");
  }
};

module.exports =  sendNotification ;

