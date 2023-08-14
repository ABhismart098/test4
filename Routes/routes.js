const controller = require('../controller/controller1')
var express = require("express");
const routes = express.Router();

var bodyParser = require("body-parser");
routes.use(bodyParser.urlencoded({extended: true}))
routes.use(bodyParser.json());

routes.post('/adduserdetails',controller.adduser)
routes.get('/user' ,controller.getalluserdetails)
routes.get('/getoneuser/:id',controller.getoneuser);
routes.put('/updateData/:id' , controller.updatedata);
routes.delete('/deleteuser/:id', controller.deletedata);

module.exports = routes