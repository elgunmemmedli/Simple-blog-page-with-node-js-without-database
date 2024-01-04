const express = require('express');

const router = express.Router();

const frontController = require('../controller/front');

router.get('/', frontController.getIndex);
router.get('/about', frontController.getAbout);
router.get('/contact', frontController.getContact);
router.get('/blogs/:id', frontController.getBlogOne);



module.exports = router;