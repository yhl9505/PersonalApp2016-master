Meteor.methods({
	
	removeRoom: function(pw){
		check(pw,String);
		if(pw=="123"){
			Room.remove({});
		}
			
	},

	createCommentobj:function(name,comment_text){
		check(name,String);
		check(comment_text,String);
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
		check(id,String);
		console.log(id);
		console.log("removing comment");
		Comments.remove(id);
	},


	getInfo:function(name,weight,height){
		check(name,String);
		check(weight,Number);
		check(height, Number);

		const id=this.userId;
		const result={name:name,weight:weight,height:height,createdBy:id};
		console.dir(result);
		console.log("you called the meteor method!");
		Settings.remove({createdBy:id});
		Settings.insert(result);
		
		
	},

	createRoom: function(name,numb1,numb2,date){
		check(name,Number);
		check(numb1,Number);
		check(numb2,Number);
		check(date,String);
		const starttime=numb1;
		const endtime=numb2;
		const dateReserve=date;

		console.log("you're creating the room");
		const roomOBJ={
			name:name,
			timefrom:starttime,
			timeto:endtime,
			days:dateReserve,
		}
		Room.insert(roomOBJ);
		console.log("do we get here");
	},

	





	// insertRoom: function(roomOBJ ){
	// 	//roomOBJ is the object passed in
	// 	// insert method could be Meteor.call("insertRoom", roomOBJ);
	// 	Room.insert(roomOBJ);
	// },

})