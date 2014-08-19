var RobotCollection = Backbone.Collection.extend({
	model: Robot,
	url: '/robots'
});

myRobots = new RobotCollection();