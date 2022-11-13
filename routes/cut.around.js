const router = require("express").Router();
const CutAround = require("../controllers/cut.around.controller");
const auth = require("../lib/auth-admin");

router.get("/partner/:id", CutAround.findByPartner);

router.get("/", CutAround.findAll); // auth admin
router.get("/:id", CutAround.findOne); // auth admin

router.post("/", CutAround.create); // auth admin

router.delete("/:id", CutAround.delete); // auth admin
router.put("/:id", CutAround.update); // auth admin

module.exports = router;
