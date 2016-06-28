Template.myAccount.helpers({

	Rooms: function(){
		return Room.find({});
	}



})

// Template.myAccount.events({
// 	"click .js-removeAll": function(event){
// 		const pw=$(".js-password").val();
// 		Meteor.call("js-removeAll",pw);
// 	}
// })


