const {Database, DataTypes} = require('sequelize');

const sequelize = require('../Database/db')

const userController = require('../controllers/usercontroller')

router.post('/login', userController.loginUser);
router.post('/login', userController.registerUser);

// router.get('/view_users',usercontroller.getUser)
// router.post('/create_users',usercontroller.create_Users)

// router.put('/:id',userController.updateUser)
// router.delete('/:id',userController.deleteUser)

module.exports = router;