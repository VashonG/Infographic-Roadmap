const express = require('express');
const router = express.Router();
const { getContent, updateContent } = require('../controllers/contentController');

router.route('/').get(getContent).put(updateContent);
module.exports = router;