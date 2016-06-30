Meteor.methods({
	sayhiServer: function(){
		console.log("hi");
	},

	removeRoom: function(pw){
		if(pw=="123"){
			Room.remove({});
		}
			
	},

	createCommentobj:function(name,comment_text){
		console.log("create comment log");
		const comment_obj=
		{
			name:name,
			text:comment_text,
			createAt: new Date(),
			createBy: Meteor.userId(),
			userEmail:Meteor.user().emails[0].address
		};
		Comments.insert(comment_obj);
	},


	removeCommentobj :function(id){
		console.log(id);
		console.log("removing comment");
		Comments.remove(id);
	},


	getInfo:function(name,weight,height){
		const id=this.userId;
		const result={name:name,weight:weight,height:height,createdBy:id};
		console.dir(result);
		console.log("you called the meteor method!");
		Settings.remove({createdBy:id});
		Settings.insert(result);
		
		
	},


	cretedRoom: function(number){
		console.log("you're creating the room");
		Room.insert(number);
		console.log("do we get here");
	}



	// insertRoom: function(roomOBJ ){
	// 	//roomOBJ is the object passed in
	// 	// insert method could be Meteor.call("insertRoom", roomOBJ);
	// 	Room.insert(roomOBJ);
	// },

})