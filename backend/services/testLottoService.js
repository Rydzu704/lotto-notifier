const { getDrawNumber } = require("./lottoService");

(async () => {
  try {
    const number = await getDrawNumber();
    console.log("Numer losowania:", number);
  } catch (err) {
    console.error("Błąd:", err.message);
  }
})();
