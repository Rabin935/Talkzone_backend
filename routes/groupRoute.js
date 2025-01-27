const express = require('express');

const router = express.Router();

const groupController = require('../controller/groupcontroller');

router.post('/', groupController.createGroup);
router.get('/:id', groupController.getGroup);
router.get('/', groupController.getAllGroups);

module.exports = router;
