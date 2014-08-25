var RobotRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
		'r2': 'beep',
		'voltron/lions': 'roar'
	}
});

var robotRouter = new RobotRouter();
robotRouter.on('route:index', function(){
	myRobots.fetch({
		success: function(collection){
			robotCollectionView.render(myRobots);
			console.log("ROBOT ARMY IS READY");
		},
		error: function(err){
			console.error("Whoah! Got and error!");
			console.log(err);
		}
	});
});

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

var renderRobots = function(){
	robotCollectionView.render(myRobots);
};

robotCollectionView.listenTo(myRobots, 'change', renderRobots);
robotCollectionView.listenTo(myRobots, 'add', renderRobots);

links[0].addEventListener('click', linkHandler);
links[1].addEventListener('click', linkHandler);

document.querySelector('button').addEventListener('click', function(e){
	e.preventDefault();
	myRobots.add(new Robot({name: 'borg', firepower: 'many'}));
});