var RobotCollection = Backbone.Collection.extend({
	model: Robot
});

myRobots = new RobotCollection([r1, r2, r3]);