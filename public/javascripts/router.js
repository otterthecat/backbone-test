var RobotRouter = Backbone.Router.extend({
	routes: {
		'r2': 'beep',
		'voltron/lions': 'roar'
	}
});

var robotRouter = new RobotRouter();
robotRouter.on('route:beep', function(){
	myRobots.get(2).set({name: 'R2-D2'});
	myRobots.get(3).set({name: 'johnny 5'});
});

robotRouter.on('route:roar', function(){
	myRobots.get(2).set({name:'t1000'});
	myRobots.get(3).set({name: 'Red Lion'});
});

Backbone.history.start({pushState: true});

var links = document.querySelectorAll('a');
var linkHandler = function(e){
	e.preventDefault();
	var path = e.target.href.replace('http://localhost:3000', '');
	robotRouter.navigate(path, {trigger: true});
};

links[0].addEventListener('click', linkHandler);
links[1].addEventListener('click', linkHandler);