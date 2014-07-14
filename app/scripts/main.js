everyone.fetch().done(function(){
	new PersonView({ collection: everyone });

	var Thach = everyone.findWhere({name: 'Thach'});
	Thach.set('item','chopsticks');

	var Sharon = everyone.findWhere({name: 'Sharon'});
	Sharon.unset('item');

});