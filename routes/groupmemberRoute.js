const express = require('express');

const router = express.Router();

const groupMemberController = require('../controller/groupmembercontroller');

router.post('/', groupMemberController.addGroupMember);
router.get('/group/:groupId', groupMemberController.getGroupMembers);
router.get('/', groupMemberController.getAllGroupMembers);

module.exports = router;