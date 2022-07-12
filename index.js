// server express
const express = require("express");
const app = express();

// routes management
const productsRoutes = require("./routes/products");

app.use("/api", productsRoutes);
app.get("/", (req, res) => res.send("Welcome to this simple exemple of a REST API !"));
app.all("*", (req, res) =>res.send("this route doesn't exist."));

// parsing data through an HTTP request body.
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// lancement du serveur
const PORT = 5050;
app.listen(PORT, () => {
  console.log(`\x1b[1;33m\u26a1Running server on : http://localhost:${PORT} \u26a1\x1b[0m`);
});