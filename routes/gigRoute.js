const express = require('express');
const router = express.Router();

const gigController = require('../controllers/gigController');

router.route('/').get(gigController.getAll);
// .post(gigController.createUser);

module.exports = router;
