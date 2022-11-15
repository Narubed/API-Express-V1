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

app.use("/v1/express/check-price", require("./routes/check.price")); // ออกนอก
app.use("/v1/express/booking", require("./routes/booking")); // ออกนอก
app.use("/v1/express/webhook", require("./routes/web.hook")); // ออกนอก
app.use("/v1/express/tracking", require("./routes/tracking")); // ออกนอก
app.use("/v1/express/label", require("./routes/label")); // ออกนอก

//////////////-----------------------------///////////////
app.use("/v1/express/admins", require("./routes/admin"));
app.use("/v1/express/partners", require("./routes/partners"));
app.use("/v1/express/cod-express", require("./routes/cod.express"));
app.use("/v1/express/ip-address", require("./routes/ip.address"));
app.use("/v1/express/courier", require("./routes/courier"));
app.use("/v1/express/purchase", require("./routes/purchase"));
app.use("/v1/express/cut-around", require("./routes/cut.around"));
app.use("/v1/express/check", require("./routes/check"));

const port = process.env.PORT || 9100;
app.listen(port, console.log(`Listening on port ${port}...`));
