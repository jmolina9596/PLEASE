var express = require('express');
var router = express.Router();

const user = require("../controllers/user");

// Get all users
router.get("/", user.list);

// Save user
router.post("/user", user.create);

// Edit or create a user
router.get("/user/:id?", user.edit);



// Delete user
router.delete("/user/:id", user.delete);

module.exports = router;