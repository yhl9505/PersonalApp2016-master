Template.myAccount.helpers({

	Rooms: function(){
		return Room.find({});
	}



})


Template.myAccount.events({

	"click .js-room-submit": function(event){
		const roomNumber= $(".js-room").val();

		//$(".js-room").val("");	
		console.log("your room number is xxxx");
		Meteor.call("cretedRoom",roomNumber);
		console.log("here is myAccount events");
	}

})

// Template.myAccount.events({
// 	"click .js-removeAll": function(event){
// 		const pw=$(".js-password").val();
// 		Meteor.call("js-removeAll",pw);
// 	}
// })


