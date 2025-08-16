const ticketQuery = require("../queries/ticketQuery");
const drawQuery = require("../queries/drawQuery");
const { getDrawNumber, getNextDrawDate } = require("../services/lottoService");

const sendTicket = async (req, res) => {
  try {
    const draw_id = await getDrawNumber();
    const draw_date = await getNextDrawDate();
    const { numbers, lottoPlusIsTrue } = req.body;

    const drawData = { draw_id, draw_date };
    const ticketData = { draw_id, numbers, lottoPlusIsTrue };
    
    const drawExists = await drawQuery.checkDrawExists(draw_id);
    if(!drawExists){
        await drawQuery.addDraw(drawData);
    }
    
    const [savedTicket] = await ticketQuery.addTicket(ticketData);

    res.status(201).json({ message: "Ticket saved", ticket: savedTicket });
  } catch (error) {
    console.error("Error in sendTicket:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getTicket = async (req, res) => {
  try {
    const [rows] =  await ticketQuery.getDataOfPending();
    res.json(rows);
  }catch(error){
    console.error(error)
  }
}

module.exports = { sendTicket ,getTicket};
