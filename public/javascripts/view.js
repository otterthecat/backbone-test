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

	// target element in which to update view
	el: $('#robots'),

	// tag name to be auto inserted to the above el
	// if we didn't define it, would default to a div
	tagName: 'ul',

	render: function(collection){

		collection.each(function(robot){

			var roboTemplate = new RobotView();
			this.$el.append(roboTemplate.render(robot).el);
		}.bind(this));

		// return view for chaining
		return this;
	}
});

var robotColletionView = new RobotCollectionView();

// 'myRobots collection from courtesy of collection.js
robotColletionView.render(myRobots);