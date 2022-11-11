const router = require("express").Router();
const purchase = require("../controllers/purchase.controller");
// const auth = require("../lib/auth-admin");

router.get("/purchase-courier", purchase.findAll); // auth admin

module.exports = router;
