const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.post("/info", (req, res) => {
  const body = req.body;
  res.send(`Your name is ${body.name} and you were born in ${body.birthday}`);
});

app.listen(3000, () => {
  console.log("Server started listening on port 3000\nhttp://localhost:3000");
});
