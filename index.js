const express = require("express");
const bodyParser = require("body-parser");

const productsRoutes = require("./routes/products");

const app = express();

app.use(bodyParser.json());

app.use("/api", productsRoutes);
app.get("/", (req, res) => res.send("Welcome to this simple exemple of a REST API !"));
app.all("*", (req, res) =>res.send("this route doesn't exist."));

// start the serveur 
const PORT = 5050;
app.listen(PORT, () => {
  console.log(`\x1b[1;33m\u26a1Running server on : http://localhost:${PORT} \u26a1\x1b[0m`);
  // the strange code inside this log is only decoration for the command line interface. It can be removed. 
});
