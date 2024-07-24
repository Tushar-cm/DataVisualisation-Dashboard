const express = require('express');
const router = express.Router();
const dataController = require('../controllers/datacontroller'); // Ensure this path is correct

// Define routes
router.get('/data', dataController.getData);
router.post('/data', dataController.addData);

module.exports = router;
