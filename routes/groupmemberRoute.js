const { Router } = require('express');
const router = Router();
const groupMemberController = require('../controller/groupmembercontroller');

router.post('/', groupMemberController.addGroupMember);
router.get('/group/:groupId', groupMemberController.getGroupMembers);
router.get('/', groupMemberController.getAllGroupMembers);

module.exports = router;