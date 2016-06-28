Meteor.startup(function(){
	Room.remove({});
	Room.insert({name:"room111",location:"gym",days:[1,2,3,4,5],timefrom:[6],timeto:[9]});
	Room.insert({name:"room112",location:"gym",days:[1,2,3,4,5],timefrom:[6],timeto:[9]});		
	Room.insert({name:"room113",location:"gym",days:[1,2,3,4,5],timefrom:[6],timeto:[9]});
	Room.insert({name:"room114",location:"gym",days:[1,2,3,4,5],timefrom:[6],timeto:[9]});
	Room.insert({name:"room115",location:"gym",days:[1,2,3,4,5],timefrom:[6],timeto:[9]});
	Room.insert({name:"room116",location:"gym",days:[1,2,3,4,5],timefrom:[6],timeto:[9]});
	Room.insert({name:"room117",location:"gym",days:[1,2,3,4,5],timefrom:[6],timeto:[9]});

	Comments.insert({content:""});

})