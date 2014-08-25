var Robot = Backbone.Model.extend({

	urlRoot: '/robots',

	defaults: {
		name: 'x101',
		armor: 'titanium',
		firepower: 'pulse cannon'
	},

	initialize: function(){

		this.on('change:name', function(model){
			console.log("my name has been assigned as %s", model.get('name'));
		});

		this.on('change:armor', function(model){
			console.log('armor has been updated to %s', model.get('armor'));
		});

		this.on('change:firepower', function(model){
			console.log('now equipped with %s', model.get('firepower'));
		});

		this.on('change:id', function(model){
			console.log('i have been tagged with id %s', model.get('id'));
		});

		console.log("%s has been manufactured. beep. boop.", this.get('name'));
	}
});