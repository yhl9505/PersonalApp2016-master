

Meteor.publish("theRoom",function(){return Room.find();})
Meteor.publish("theComments",function(teachername){return Comments.find({name:teachername});})


Meteor.publish("userData",function(){
	if(this.userId){ //only if you login can you see it
		return Meteor.users.find({_id: this.userId},{fileds:{profiel:1,"services.google.email":1}});  //everyone sees everything
									//{_id: this.userId}
									//return Meteor.users.find({_id:this.userId});
	}else{
		this.ready();
	}
});


Meteor.publish("theSettings", function(){
	console.log("here meteor publish ");
	var currentUserId=this.userId;
	if(this.userId){

		return Settings.find({createdBy:currentUserId});
	}else{
		this.ready();
	}
	
})