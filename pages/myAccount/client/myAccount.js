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


Template.roomAvailability.onCreated(function(){
	this.libraryChosen =new ReactiveVar(false);
});




Template.roomAvailability.helpers({
	libraryChosen: function(){
		return Template.instance().libraryChosen.get();
	}
});




Template.roomAvailability.events({
	'change select':function(event, template){
		if($(event.target).val()=="library"){
			template.libraryChosen.set(true);

		}else{
			template.libraryChosen.set(false);
		}
	}
});

// Template.myAccount.events({
// 	"click .js-removeAll": function(event){
// 		const pw=$(".js-password").val();
// 		Meteor.call("js-removeAll",pw);
// 	}
// })


