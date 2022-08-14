const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

// router.get('/', (req, res) =>
//   User.findAll()
//     .then((users) => {
//       console.log(users);
//     })
//     .catch((err) => console.log(err))
// );
module.exports = router;
