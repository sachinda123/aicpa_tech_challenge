const express = require("express");
const sever = express();
const severPort = 3000;

sever.listen(severPort, () => {
  console.log("app is running");
});
