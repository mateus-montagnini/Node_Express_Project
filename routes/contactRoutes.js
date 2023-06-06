const express = require('express');
const router = express.Router();
const { getContacts, createContact, getContactId, updateContact, deleteContact } = require('../controllers/contactController');
const validateToken = require('../middlewares/validateToken');


router.use(validateToken)
router.route('/').get(getContacts).post(createContact)
router.route('/:id').get(getContactId).put(updateContact).delete(deleteContact)

module.exports = router;