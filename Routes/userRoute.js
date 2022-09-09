const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getOneUser,
  addUser,
  deleteUser,
  updateUser,
} = require("../Controllers/UserController");
router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
