const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Запись логов действий
app.post("/log", (req, res) => {
  const log = {
    user_id: req.body.user_id,
    action: req.body.action,
    timestamp: new Date().toISOString(),
  };

  console.log("Log:", log);

  fs.appendFileSync("log.json", JSON.stringify(log) + "\n");
  res.sendStatus(200);
});

// Telegram webhook
app.post("/telegram-webhook", (req, res) => {
  const message = req.body.message;
  if (message) {
    const user_id = message.from.id;
    const text = message.text;

    const log = {
      user_id,
      action: text,
      timestamp: new Date().toISOString(),
    };
    fs.appendFileSync("log.json", JSON.stringify(log) + "\n");

    console.log("Telegram:", log);
  }

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
