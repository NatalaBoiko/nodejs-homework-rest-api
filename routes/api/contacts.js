const express = require("express");
const { validation, ctrlWrapper } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

// router.get("/", ctrlWrapper(ctrl.getAll));

// router.get("/:id", ctrlWrapper(ctrl.getByid));

router.post("/", validation(schemas.addSchema), ctrlWrapper(ctrl.add));

// router.put("/:id", validateMiddleware, ctrlWrapper(ctrl.updateById));

// router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;
