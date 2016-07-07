
Template.settings.helpers({
	personalInfo:function(){
		return Settings.find();
	},

})




Template.settings.events({


	"click .js-info-submit": function(event){
		console.log("get here");
		const settings_name= $(".js-text-name").val();
		const settings_weight= parseInt($(".js-text-weight").val());
		const settings_height= parseInt($(".js-text-height").val());
		console.log(settings_name);
		console.log(settings_weight);
		console.log(settings_height);
		const id=Meteor.userId();
		Meteor.call("getInfo",settings_name,settings_weight,settings_height);
		console.log("did you get here");
	},
})