var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', function(req, res, next) {
  console.log('test')
  const date = new Date().getUTCFullYear()
  res.json(({year : date}))
});

module.exports = router;
