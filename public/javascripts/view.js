// view for individual robot models
var RobotView = Backbone.View.extend({

	tagName: 'li',

	render: function(model){
		this.model = model;
		this.$el.html("Here is a robot name: " + this.model.get('name'));

		// return view for chaining
		return this;
	},

	events: {
		'click': _.once(function(){
			this.$el.append('<br/>weapon: ' + this.model.get('firepower'));
		})
	}
});

// view to run all views for collection
// acts as a sort of 'mini controller' for
// the above RobotView
var RobotCollectionView = Backbone.View.extend({

	// tag name to be auto inserted to the below target.
	// if we didn't define it, would default to a div
	tagName: 'ul',

	// custom attribute (not part of Backbone API)
	// to denote which element on the page we want
	// to insert our views into
	target: $('#robots'),

	render: function(collection){

		this.collection = this.collection || collection;
		this.$el.html('');
		this.collection.each(function(robot){

			var roboTemplate = new RobotView();
			this.$el.append(roboTemplate.render(robot).el);
		}.bind(this));

		this.target.append(this.el);
		// return view for chaining
		return this;
	}
});

var robotCollectionView = new RobotCollectionView();

// 'myRobots collection from courtesy of collection.js
// using fetch, it pings the server which returns a json object
// representing an array of robots. When returned, it populates
// robotCollection which then implements the collectionView
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

robotCollectionView.listenTo(myRobots, 'change', robotCollectionView.render);