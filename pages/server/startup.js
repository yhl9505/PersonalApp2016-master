Meteor.startup(function(){
	Room.remove({});
	Room.insert({name:"111",location:"Farber",days:[],timefrom:[],timeto:[]});
	Room.insert({name:"112",location:"Farber",days:[],timefrom:[],timeto:[]});		
	Room.insert({name:"113",location:"Farber",days:[],timefrom:[],timeto:[]});
	Room.insert({name:"114",location:"Farber",days:[],timefrom:[],timeto:[],available:true});
	Room.insert({name:"115",location:"Farber",days:[],timefrom:[],timeto:[],available:true});
	Room.insert({name:"116",location:"Farber",days:[],timefrom:[],timeto:[],available:true});
	Room.insert({name:"117",location:"Farber",days:[],timefrom:[],timeto:[],available:true});

	Comments.insert({content:""});

})