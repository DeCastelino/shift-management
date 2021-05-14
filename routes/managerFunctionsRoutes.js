const express = require("express");
const managerController = require("../controllers/managerController");

const router = express.Router();

router.get("/", managerController.staffProfile_index);

router.get("/staffList", managerController.staffProfile_staffList);

router.get("/shiftList", managerController.shift_shiftList);

router.get("/createStaffProfile", managerController.staffProfile_create_get);

router.get("/updateProfileDetails", managerController.staffProfile_update_get);

router.post("/", managerController.staffProfile_create_post);

router.get("/addShift", managerController.shift_create_get);

router.post("/addShift", managerController.shift_create_post);

router.get("/:id", managerController.staffProfile_details);

router.delete("/:id", managerController.staffProfile_delete);

router.put("/:id", managerController.staffProfile_put);

module.exports = router;