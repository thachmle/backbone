var Person = Backbone.Model.extend ({

	defaults: {
		name:'',
		thing:'',
		item:'',
	},

	idAttribute:('_id'),
	initialize:function(){
		var name = this.get('name');
		console.log(name + ' has been added to the dislike list!');
	}
	
});

var Person_list = Backbone.Collection.extend({
	model: Person,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/thach"
});

var everyone = new Person_list();
var PersonView = Backbone.View.extend ({

	template:function(model){
	return _.template($('#monster_list').html());
	},

	el:$('.hero-unit ul'),

	initialize:function(){
		this.render();
		this.collection.on('change',this.render, this);
		this.collection.on('destroy',this.render, this);
	},

	render:function(){
		this.$el.html(this.template(this.collection))
	}
	
});
everyone.fetch().done(function(){
	new PersonView({ collection: everyone });

	var Thach = everyone.findWhere({name: 'Thach'});
	Thach.set('item','chopsticks');

	var Sharon = everyone.findWhere({name: 'Sharon'});
	Sharon.unset('item');

});