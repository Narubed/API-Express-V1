const router = require("express").Router();
const codexpress = require("../controllers/cod.express.controller");
const auth = require("../lib/auth-admin");

router.get("/", codexpress.findAll); // auth admin
router.get("/:id", codexpress.findOne); // auth admin

router.post("/", codexpress.create); // auth admin

router.delete("/:id", codexpress.delete); // auth admin
router.put("/:id", codexpress.update); // auth admin

module.exports = router;
