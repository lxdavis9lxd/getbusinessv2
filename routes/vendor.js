var express = require('express');
var router = express.Router();

// GET request for vendor information
router.get('/', function(req, res, next) {
  // Code to retrieve vendor information from the database
  res.render('vendor', { title: 'Vendor Information', vendor: vendorData });
});

// POST request for adding vendor information
router.post('/', function(req, res, next) {
  // Code to add vendor information to the database
  res.redirect('/vendor');
});

// PUT request for modifying vendor information
router.put('/:id', function(req, res, next) {
  // Code to modify vendor information in the database
  res.send('Vendor information updated');
});

// DELETE request for deleting vendor information
router.delete('/:id', function(req, res, next) {
  // Code to delete vendor information from the database
  res.send('Vendor information deleted');
});

module.exports = router;
