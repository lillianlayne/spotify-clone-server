const router = require('express').Router()
const controller = require('../controllers/auth')
const middleware = require('../middleware')

// realtive to: /auth

router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
);

module.exports = router 
