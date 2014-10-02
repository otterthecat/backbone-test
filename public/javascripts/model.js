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

// this code is just a sketchpad to hash out some ideas
var Foo = Backbone.Model.extend({
	initialize: function (){

		this.stuff = 'a string with stuff';
	},


	parse: function (data, options){
		console.log('options', options)
		var parsedData = {};

		parsedData.bar = data.x * 10;
		parsedData.things = this.stuff;
		if(typeof options !== 'undefined'){
			parsedData.url = options.url;
		}
		return parsedData;
	}
});

var foo1 = new Foo({x : 3}, {parse: true, url: 'www.fake.com'});
var foo2 = new Foo();
foo2.set(foo2.parse({x : 2}));