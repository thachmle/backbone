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