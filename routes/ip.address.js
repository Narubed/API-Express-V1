const router = require("express").Router();
const IPAddress = require("../controllers/ip.address.controller");
const auth = require("../lib/auth-admin");

router.get("/", IPAddress.findAll); // auth admin
router.get("/:id", IPAddress.findOne); // auth admin

router.post("/", IPAddress.create); // auth admin

router.delete("/:id", IPAddress.delete); // auth admin
router.put("/:id", IPAddress.update); // auth admin

module.exports = router;
