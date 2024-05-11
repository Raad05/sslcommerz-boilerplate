const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("App listening on port:", port);
});

app.get("/", (req, res) => {
  res.send("Server is active.");
});
