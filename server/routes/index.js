var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('Pages/index', { title: 'The Purr-fect Place',
    displayName: req.user ? req.user.displayName: ''
   });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('Pages/index', { title: 'The Purr-fect Place',
    displayName: req.user ? req.user.displayName: ''
   });
});
/* GET about us page. */
router.get('/aboutus', function(req, res, next) {
  res.render('Pages/about', { title: 'About Us',
    displayName: req.user ? req.user.displayName: ''
   });
});
/* GET Product page. */
router.get('/product', function(req, res, next) {
  res.render('Pages/products', { title: 'Product',
    displayName: req.user ? req.user.displayName: ''
   });
});
/* GET Services page. */
router.get('/service', function(req, res, next) {
  res.render('Pages/services', { title: 'Service',
    displayName: req.user ? req.user.displayName: ''
   });
});
/* GET contact me page. */
router.get('/contactus', function(req, res, next) {
  res.render('Pages/contact', { title: 'Contact us',
    displayName: req.user ? req.user.displayName: ''
   });
});

module.exports = router;
