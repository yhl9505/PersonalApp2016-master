Template.room.events({})




Template.roomAvailability.onCreated(function(){
	this.libraryChosen =new ReactiveVar(false);
	this.gymChosen =new ReactiveVar(false);
});




Template.roomAvailability.helpers({
	libraryChosen: function(){
		return Template.instance().libraryChosen.get();
	},
	gymChosen: function(){
		return Template.instance().gymChosen.get();
	}
});




Template.roomAvailability.events({
	'change select':function(event, template){
		if($(event.target).val()=="library"){
			template.libraryChosen.set(true);
			template.gymChosen.set(false);

		}else if($(event.target).val()=="gym"){
			template.gymChosen.set(true);
			template.libraryChosen.set(false);
		}
	}
});

	// const room= {
	// 	"room111","room112","room113","room114","room115"
	// }

	// Room.insert(room);
