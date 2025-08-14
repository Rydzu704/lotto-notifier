const notificationQuery = require("../queries/notificationQuery");
const ticketQuery = require("../queries/ticketQuery");

const sendNotification = async (notification) => {
  try {
        const [savedNotification] = await notificationQuery.addNotification(notification);
        await ticketQuery.updatePendingStatus(notification);
        return { message: "Notification updated", results: savedNotification };
    } catch (error) {
        console.error("Error in sendResults:", error);
        throw new Error("Internal server error");
    }
};

module.exports =  sendNotification ;

