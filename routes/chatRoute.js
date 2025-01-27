const express = require('express');

const router = express.Router();

const chatController = require('../controller/chatcontroller');

router.post('/', chatController.createChat);
router.get('/:id', chatController.getChat);
router.get('/', chatController.getAllChats);

module.exports = router;