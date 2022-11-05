const router = require("express").Router();
const partner = require("../controllers/partner.controller");
const auth = require("../lib/auth");

router.get("/", partner.findAll); // auth admin
router.get("/:id", partner.findOne); // auth admin

router.post("/",  partner.create); // auth admin

router.delete("/:id", auth, partner.delete); // auth admin
router.put("/:id", auth, partner.update); // auth admin
router.get("/token/:id", partner.createToken) // auth admin

module.exports = router;
