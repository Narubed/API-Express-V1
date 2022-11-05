const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const PurchaseSchema = new mongoose.Schema({
  partner_id: { type: String, required: false, default: "" },
  purchase_id: { type: Number, required: false, default: 0 },
  total_price: { type: Number, required: false, default: 0 },
  total_discount: { type: Number, required: false, default: 0 },
  purchase_status: { type: String, required: false, default: "unpaid" },
  //   partner_service_charge: { type: Number, required: false, default: 0 },
});

PurchaseSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.partner_name, level: "partner" },
    process.env.JWTPRIVATEKEY
  );
  return token;
};

const Purchase = mongoose.model("purchase", PurchaseSchema);

const validate = (data) => {
  const schema = Joi.object({
    partner_id: Joi.string().default(""),
    purchase_id: Joi.number().default(0),
    total_price: Joi.number().default(0),
    total_discount: Joi.number().default(0),
    purchase_status: Joi.string().default("unpaid"),
    // partner_service_charge: Joi.number().default(0),
  });
  return schema.validate(data);
};

module.exports = { Purchase, validate };
