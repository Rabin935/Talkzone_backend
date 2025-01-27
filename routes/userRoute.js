const express = require('express');

const router = express.Router();

const userController = require('../controller/usercontroller');


// router.post('/login', userController.loginUser);
// router.post('/signup', userController.registerUser);

router.get('/view_users',userController.getUser)
router.post('/create_users',userController.createUsers)

router.put('/:id',userController.updateUser)
router.delete('/:id',userController.deleteUser)

module.exports = router;