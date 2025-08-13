const ticketQuery = require("../queries/ticketQuery");
const { getDrawResults } = require("../services/lottoService");

const sendResults = async () => {
  try {
    const { numbers, numbers_plus } = await getDrawResults(); 
    const drawResults = { numbers, numbers_plus };
    
    const [savedResults] = await ticketQuery.updateDrawResults(drawResults);

    return { message: "Results updated", results: savedResults };
  } catch (error) {
    console.error("Error in sendResults:", error);
    throw new Error("Internal server error");
  }
};

module.exports = { sendResults };
