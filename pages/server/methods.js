Meteor.methods({
	sayhiServer: function(){
		console.log("hi");
	},

	removeRoom: function(pw){
		if(pw=="123"){
			Room.remove({});
		}
			
	},

	createCommentobj:function(comment_text){
		console.log("create comment log");
		const comment_obj=
		{
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



	// insertRoom: function(roomOBJ ){
	// 	//roomOBJ is the object passed in
	// 	// insert method could be Meteor.call("insertRoom", roomOBJ);
	// 	Room.insert(roomOBJ);
	// },

})