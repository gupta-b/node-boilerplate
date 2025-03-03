const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");
const router = express.Router();



router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", currentUser)


// const { getContacts, getContact, createContact, updateContact, deleteContact } = require('../controllers/contactController')

// router.route('/').get(getContacts).post(register);
// router.route('/:id').get(getContact).delete(deleteContact).put(updateContact)

module.exports = router;