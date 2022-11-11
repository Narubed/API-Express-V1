const router = require("express").Router();
const courier = require("../controllers/courier.controller");
const auth = require("../lib/auth-admin");

router.get("/", auth, courier.findAll); // auth admin
router.get("/:id", courier.findOne); // auth admin

router.post("/", courier.create); // auth admin

router.delete("/:id", auth, courier.delete); // auth admin
router.put("/:id", auth, courier.update); // auth admin
router.get("/tracking/:id", courier.findByTracking); // auth admin

module.exports = router;
