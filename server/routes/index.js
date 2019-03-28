/**********************************/
/*       Java Script File         */
/*      Bhavna Pulliahgari        */
/*          300931671             */
/*       16th February, 2019      */
/**********************************/

/* JS File for Routing */
let express = require("express");
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
//router.get('/', indexController.displayHomePage);

//about
//router.get('/about', indexController.displayAboutPage );

//products
//router.get('/projects', indexController.displayProjectsPage);

//services
//router.get('/services', indexController.displayServicesPage );

//contact
//router.get('/contact', indexController.displayContactPage);

/* GET - displays the Login Page */
//router.get('/login', indexController.displayLoginPage);

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* GET - displays the User Registration Page */
//router.get('/register', indexController.displayRegisterPage);

/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);

module.exports = router;
