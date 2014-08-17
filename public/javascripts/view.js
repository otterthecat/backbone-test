var RobotView = Backbone.View.extend({

	el: $('#robots'),

	render: function(model){
		this.$el.html("Here is a robot name: " + model.get('name'));
	}
});

var robotView = new RobotView();

robotView.render(r1);