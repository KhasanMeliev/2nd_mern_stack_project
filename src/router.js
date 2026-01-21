const router = require("express").Router();

const uc = require("./controller/user.controller");
const uv = require("./validation/user.validation");

router.get("/users", uc.getUsers);
router.post("/add/user", uv.createUser, uc.createUser);
router.delete("/delete/user/:id", uc.deleteUser);

module.exports = router;
