const express = require("express");
const validationToken = require("../middleware/validationTokenHandler");
const router = express.Router();

const { getContacts, getContact, createContact, updateContact, deleteContact } = require('../controllers/contactController')

router.use(validationToken);
router.route('/').get(getContacts).post(createContact);
router.route('/:id').get(getContact).delete(deleteContact).put(updateContact)

module.exports = router;