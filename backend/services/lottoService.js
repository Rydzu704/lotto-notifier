const axios = require("axios");
const cheerio = require("cheerio");
const { addDraw } = require("../queries/ticketQuery");

async function getDrawNumber() {
  const url = "https://www.multipasko.pl/wyniki-lotto/lotto-plus/";

  const { data: html } = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      "Accept":
        "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",
      "Connection": "keep-alive"
    }
  });

  const $ = cheerio.load(html);

  const drawNumber = $("td.nrlos").first().text().trim().split("\n")[0];
  return drawNumber;
}

const getNextDrawDate = () => {
    const today = new Date();
    const day = today.getDay(); 
    const minute = today.getMinutes();
    const hour = today.getHours();;

    let nextDate = new Date(today);
    let addDays = 0;
    const beforeDraw = hour < 21 || (hour === 21 && minute < 30);

    switch (day) {
      case 0: addDays = 2; break;
      case 1: addDays = 1; break;
      case 2: if(beforeDraw){addDays = 0}else{addDays = 2}
      case 3: addDays = 1; break;
      case 4: if(beforeDraw){addDays = 0}else{addDays = 2}
      case 5: addDays = 1; break; 
      case 6: if(beforeDraw){addDays = 0}else{addDays = 3} 
    }

    nextDate.setDate(nextDate.getDate() + addDays);
    nextDate.setHours(25, 0, 0, 0);
    return nextDate;
}

module.exports = { getDrawNumber ,getNextDrawDate};
