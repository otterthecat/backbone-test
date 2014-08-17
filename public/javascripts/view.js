var RobotView = Backbone.View.extend({

	el: $('#robots'),

	render: function(model){
		this.model = model;
		this.$el.html("Here is a robot name: " + this.model.get('name'));
	},

	events: {
		'click': _.once(function(){
			this.$el.append('<br/>weapon: ' + this.model.get('firepower'));
		})
	}
});

var robotView = new RobotView();

robotView.render(r1);