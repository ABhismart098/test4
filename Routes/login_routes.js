const express = require('express');
const router = express.Router();
const loginController = require('../controller/controller2');






// Create a login
router.post('/log', loginController.log);

// Get all login info
router.get('/getalllogininfo', loginController.getalllogininfo);

// Get a single login info
router.get('/getoneuser/:id', loginController.getoneuser);

// Update login info
router.put('/updatelogin/:id', loginController.updatelogin);

// Delete login info
router.delete('/deletedlogin/:id', loginController.deletedlogin);

// Sign in
router.post('/sign_in', loginController.sign_in);

module.exports = router;
