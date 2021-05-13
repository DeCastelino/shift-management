const express = require("express");
const staffController = require("../controllers/staffController");

const router = express.Router();

router.get("/", staffController.staffProfile_index);

router.get("/createStaffProfile", staffController.staffProfile_create_get);

router.post("/", staffController.staffProfile_create_post);

router.get("/:id", staffController.staffProfile_details);

// router.delete("/:id", staffController.blog_delete);

module.exports = router;