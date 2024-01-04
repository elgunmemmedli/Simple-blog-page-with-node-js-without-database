const express = require('express');

const router = express.Router();

const adminController = require('../controller/admin');

router.get('/', adminController.getAdminIndex);

// router - GET
router.get('/about', adminController.getAbout);
router.get('/blog-add', adminController.getBlogsAdd);
router.get('/blog-list', adminController.getBlogsList);


//router - POST
router.post('/about', adminController.postAbout);
router.post('/blog-add', adminController.postBlogsAdd);



module.exports = router;