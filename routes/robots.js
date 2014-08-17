var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/', function(req, res){
	// give our creations an id
	res.json({id: new Date()});
});

module.exports = router;