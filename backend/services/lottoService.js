const axios = require("axios");
const cheerio = require("cheerio");

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

    const drawDays = [2, 4, 6]; 

    if (day === 2 && (hour < 21 || (hour === 21 && minute < 30))) {
        return today;
    }

    let nextDate = new Date(today);
    while (true) {
        nextDate.setDate(nextDate.getDate() + 1);
        if (drawDays.includes(nextDate.getDay())) {
            return nextDate;
        }
    }
}

module.exports = { getDrawNumber ,getNextDrawDate};
