const ticketQuery = require("../queries/ticketQuery");
const { getDrawNumber, getNextDrawDate } = require("../services/lottoService");

const sendTicket = async (req, res) => {
  try {
    const draw_id = await getDrawNumber();
    const draw_date = await getNextDrawDate();
    const { numbers, lottoPlusIsTrue } = req.body;

    const drawData = { draw_id, draw_date };
    const ticketData = { draw_id, numbers, lottoPlusIsTrue };
    console.log(draw_id);
    
    const drawExists = await ticketQuery.checkDrawExists(draw_id);
    if(!drawExists){
        await ticketQuery.addDraw(drawData);
    }
    
    const [savedTicket] = await ticketQuery.addTicket(ticketData);

    res.status(201).json({ message: "Ticket saved", ticket: savedTicket });
  } catch (error) {
    console.error("Error in sendTicket:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { sendTicket };
