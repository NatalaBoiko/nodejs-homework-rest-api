const express = require("express");
const { validation } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");
const { auth: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/register", ctrlWrapper(ctrl.register));

module.exports = router;
