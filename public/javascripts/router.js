var RobotRouter = Backbone.Router.extend({
	routes: {
		'r2': 'beep',
		'voltron/lions': 'roar'
	}
});

var robotRouter = new RobotRouter();
robotRouter.on('route:beep', function(){
	console.log('I forgot how to fly in the later movies');
});

robotRouter.on('route:roar', function(){
	console.log('Use Laser Sword!!');
});

Backbone.history.start({pushState: true});

var links = document.querySelectorAll('a');

links[0].addEventListener('click', function(e){
	e.preventDefault();
	robotRouter.navigate('r2', {trigger: true});
});

links[1].addEventListener('click', function(e){
	e.preventDefault();
	robotRouter.navigate('voltron/lions', {trigger: true});
});