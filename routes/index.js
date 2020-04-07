var express = require('express');
var router = express.Router();
var Pharmacies = require('../models/Pharmacies');

router.get('/pharmacies', (req, res) => {
  Pharmacies.find().populate('user').sort({ createdAt: -1 }).exec((err, pharmacie) => {
    res.json(pharmacie);
  });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'I need a mask' });
});

module.exports = router;
