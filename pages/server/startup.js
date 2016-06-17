Meteor.startup(function(){
	Room.remove({});
	Room.insert({name:"multipurpose room",location:"gym",days:[1,2,3,4,5],timefrom:[6],timeto:[9]})
})