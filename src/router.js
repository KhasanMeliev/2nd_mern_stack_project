const router = require("express").Router();

const uc = require("./controller/user.controller");

router.get("/api/users", uc.getUsers);

module.exports = router;
