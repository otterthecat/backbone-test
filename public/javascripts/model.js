var Robot = Backbone.Model.extend({

	urlRoot: '/robots',

	defaults: {
		name: 'x101',
		armor: 'titanium',
		firepower: 'pulse cannon'
	},

	initialize: function(){

		this.on('change:name', function(model){
			console.log("my name as been assigned as %s", model.get('name'));
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

var r1 = new Robot();
var r2 = new Robot({name: 'z0b0', firepower: 'mega taser'});
var r3 = new Robot({name: 'r9d4', armor: 'tin', firepower: 'potato gun'});

r1.save(r1.attributes, {
	success: function(model){
		console.log('saved this model:');
		console.log(model);
	}
});