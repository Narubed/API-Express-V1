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
app.get("/v1/express/", (req, res) => {
  res.send("Hello I'm dev in nbadigitalservice company");
});
app.use("/v1/express/signin-admin", require("./routes/signin.admin"));
app.use("/v1/express/ip-address", require("./routes/ip.address"));

app.use("/v1/express/check-price", require("./routes/check.price"));
app.use("/v1/express/booking", require("./routes/booking"));
app.use("/v1/express/webhook", require("./routes/web.hook"));
app.use("/v1/express/tracking", require("./routes/tracking"));
app.use("/v1/express/label", require("./routes/label"));

//////////////-----------------------------///////////////
app.use("/v1/express/admins", require("./routes/admin"));
app.use("/v1/express/partners", require("./routes/partners"));
app.use("/v1/express/cod-express", require("./routes/cod.express"));

const port = process.env.PORT || 9100;
app.listen(port, console.log(`Listening on port ${port}...`));
