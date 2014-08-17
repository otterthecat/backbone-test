var Robot = Backbone.Model.extend({

	urlRoot: '/robot',

	defaults: {
		name: 'x101',
		armor: 'titanium',
		firepower: 'pulse cannon'
	},

	initialize: function(){
		console.log("%s has been manufactured. beep. boop.", this.get('name'));
	}
});

var r1 = new Robot();
var r2 = new Robot({name: 'z0b0', firepower: 'mega taser'});
var r3 = new Robot({name: 'r9d4', armor: 'tin', firepower: 'potato gun'});


var RobotCollection = Backbone.Collection.extend({
	model: Robot
});

myRobots = new RobotCollection([r1, r2, r3]);