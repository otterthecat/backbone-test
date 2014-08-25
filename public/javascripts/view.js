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

		this.collection = collection;
		this.$el.html('');
		console.log('collection: ');
		console.log(this);
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