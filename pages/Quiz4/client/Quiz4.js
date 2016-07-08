Template.Quiz4.helpers({

	bioData:function(){return Bio.find({}); },
})


Template.Quiz4.events({
	"click .js-updateBio":function(event){

		event.preventDefault();
		const name=$(".js-name").val();
		const bio_text= $(".js-content").val();
		
		if(bio_text==""){
			window.alert("you must enter a Bio!");
			return;
		}
		Meteor.call('createBio',name,bio_text);
	
		
		
	}

})

Template.bioReview.events({
		"click .js-delete":function(event){
		console.log("clicked on the x");
		console.dir(this);
		Meteor.call("removeBio", this.bio._id);

		}
	})