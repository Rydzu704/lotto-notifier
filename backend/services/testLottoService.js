const { getDrawNumber } = require("./lottoService");
const { getNextDrawDate } = require("./lottoService");

(async () => {
  try {
    //const number = await getDrawNumber();
    const date = await getNextDrawDate();
    console.log("Draw date is:", date);
    //console.log("Numer losowania:", number);
  } catch (err) {
    console.error("Błąd:", err.message);
  }
})();
