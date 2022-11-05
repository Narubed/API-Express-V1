const axios = require("axios");
require("dotenv").config();
const { Courier } = require("../../models/courier.model");
const { Partners } = require("../../models/partners.model");
exports.update = async (req, res) => {
  try {
    const tracking_code = req.body.tracking_code;
    const order_status = req.body.order_status;
    if (
      req.body &&
      order_status === "shipping" &&
      req.body.data &&
      req.body.data.datetime &&
      req.body.data.datetime.lenght !== 0
    ) {
      const result = await Courier.findOneAndUpdate(
        {
          tracking_code: tracking_code,
        },
        {
          $set: {
            courier_status: order_status,
            datetime_shipping: req.body.data.datetime,
          },
        }
      );

      await Partners.findOne({ _id: result.partner_id }).then(async (json) => {
        console.log("หาค่าเจอเเล้ว");
        if (json.partner_webhook)
          await axios.post(`${json.partner_webhook}`, {
            tracking_code: tracking_code,
            order_status: order_status,
            datetime: req.body.data.datetime,
          });
      });
    } else {
      const result = await Courier.findOneAndUpdate(
        {
          tracking_code: tracking_code,
        },
        {
          $set: {
            courier_status: order_status,
          },
        }
      );

      await Partners.findOne({ _id: result.partner_id }).then(async (json) => {
        if (json.partner_webhook)
          await axios.post(`${json.partner_webhook}`, {
            tracking_code: tracking_code,
            order_status: order_status,
          });
      });
    }
    res.status(200).send({ status: true });
  } catch (error) {
    res.status(500).send({ message: "มีบางอย่างผิดพลาด", status: false });
  }
};
