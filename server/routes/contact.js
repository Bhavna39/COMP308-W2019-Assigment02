/* JS File for contact Routing */
let express = require("express");
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

// reference to db schema - in model folder(class for db struct)
let contactController = require('../controllers/contact');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Contact List page - Read operation */
router.get("/", passport.authenticate('jwt', {session: false}), contactController.displayContactList);

/* GET Route for the Add Contact page - READ Operation */
router.get("/add", passport.authenticate('jwt', {session: false}), contactController.displayAddPage);

/* POST Route for processing the Add page*/
router.post("/add", passport.authenticate('jwt', {session: false}), contactController.processAddPage);

//GET request - display the EDIT page

router.get("/edit/:id", passport.authenticate('jwt', {session: false}), contactController.displayEditPage);

/*POST request - UPDATE database with data */

router.post("/edit/:id", passport.authenticate('jwt', {session: false}), contactController.processEditPage);

/* GET request to perform the delete action*/

router.get("/delete/:id", passport.authenticate('jwt', {session: false}), contactController.performDelete);

module.exports = router;