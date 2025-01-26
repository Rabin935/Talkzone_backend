const { Router } = require('express');
const router = Router();
const chatController = require('../controller/chatcontroller');

router.post('/', chatController.createChat);
router.get('/:id', chatController.getChat);
router.get('/', chatController.getAllChats);

module.exports = router;