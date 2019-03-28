/* JS File for contact Routing */
let express = require("express");
let router = express.Router();

let mongoose = require('mongoose');

// reference to db schema - in model folder(class for db struct)
let contact = require('../models/contact');

/* Get Contact list page - READ */
router.get('/', (req, res, next) =>{
    contact.find((err, contactList) =>{
      if(err)
      {
          return console.error(err);
      }else{
          console.log(contactList);

          /*
          res.render('contacts/index', {
              title: 'Contact List',
              contactList: contactList
          });
          */
      }
    });
});

module.exports = router;