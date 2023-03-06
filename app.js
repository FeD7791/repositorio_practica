var path = require("path");
var express = require("express");
var app = express();
var fetch = require("node-fetch");
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, "public")));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("location");
});

app.get("/location/:latitude/:longitude", async (req, res) => {
  let latitude = req.params.latitude;
  let longitude = req.params.longitude;

  var URL_path =
    "http://api.weatherapi.com/v1/current.json?key=94587a69ec3844439d4142018230603&q=" +
    String(latitude) +
    "," +
    String(longitude);
  const response = await fetch(URL_path);
  const data = await response.json();
  res.render("index", { data });
});

app.use(function (req, res) {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log("listening on port:", PORT);
});
