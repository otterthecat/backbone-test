var express = require('express');
var router = express.Router();

router.param('id', function(req, res, next, id){
	next();
});

/* GET users listing. */
router.get('/:id', function(req, res) {
  res.json({
    	id: 1,
    	name: 'hal 9000',
    	firepower: 'sentient ray'
    });
});

router.post('/', function(req, res){
	// give our creations an id
	res.json({id: new Date()});
});

module.exports = router;