const express = require("express");
const bodyParser = require("body-parser");
const paginate = require("paginate-array");
const randomFailureMiddleware = require("./randomFailureMiddleware");
const randomDelay = require("./randomDelay");

const database = require("./database.json");

const app = express();
const port = 8084;

app.use(bodyParser.json());
app.use(randomDelay);
app.use(randomFailureMiddleware(0.2));

app.get("/api/cars", (req, res) => {
  const page = req.query.p;
  res.json(paginate(database, page, 100));
});

app.get("/api/cars/:id", (req, res) => {
  res.json(database.find((car) => car.id == req.params.id));
});

app.patch("/api/cars/:id", (req, res) => {
  const starred = Boolean(req.body.starred);

  database.forEach((car) => {
    if (car.id == req.params.id) car.starred = starred;
  });

  res.json(database.find((car) => car.id == req.params.id));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
