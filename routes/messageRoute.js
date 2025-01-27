const express = require('express');

const router = express.Router();

const messageController = require('../controller/messagecontroller');

router.post('/', messageController.createMessage);
router.get('/:id', messageController.getMessage);
router.get('/', messageController.getAllMessages);

module.exports = router;