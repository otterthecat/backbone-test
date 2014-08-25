var express = require('express');
var router = express.Router();

/* GET all robots */
router.get('/', function(req, res){

	res.json([
		{
			id: 1,
			name: 'ig88',
			firepower: 'atomic disruptor'
		},
		{
			id: 2,
			name: 't1000',
			armor: 'liquid metal',
			firepower: 'gatling gun'
		},
		{
			id: 3,
			name: 'johnny 5',
			armor: 'tinfoil'
		}
	])

});

/* GET users listing. */
router.get('/:id', function(req, res) {

  // return false model with ID of 1
  res.json({
    	id: 1,
    	name: 'hal 9000',
    	firepower: 'sentient ray'
    });
});

router.put('/:id', function(req, res){

	// for testing, just send back whatever
	// the saved data was
	res.json(req.body);
});

router.post('/', function(req, res){
	// give our creations an id
	res.json({id: new Date()});
});

module.exports = router;