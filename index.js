require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./config/db");
connection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

// Hello worlds
app.get("/v1/shippop/", (req, res) => {
  res.send("Hello I'm dev in nbadigitalservice company");
});

app.use("/v1/shippop/check-price", require("./routes/check.price"));
app.use("/v1/shippop/booking", require("./routes/booking"));
app.use("/v1/shippop/webhook", require("./routes/web.hook"));
app.use("/v1/shippop/tracking", require("./routes/tracking"));

//////////////-----------------------------///////////////
app.use("/v1/shippop/admin", require("./routes/admin"));
app.use("/v1/shippop/partners", require("./routes/partners"));
app.use("/v1/shippop/cod-express", require("./routes/cod.express"));

const port = process.env.PORT || 9100;
app.listen(port, console.log(`Listening on port ${port}...`));
