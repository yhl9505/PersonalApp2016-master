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



	removeBio :function(id){
		check(id,String);
		console.log(id);
		console.log("removing bio");
		Bio.remove(id);
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
		// check(name,String);
		// check(numb1,Number);
		// check(numb2,Number);
		// check(date,Number);
		const roomname=name;
		const starttime=numb1;
		const endtime=numb2;
		const dateReserve=date;

		console.log("you're creating the room");
		const roomOBJ={
			name:roomname,
			timefrom:starttime,
			timeto:endtime,
			days:dateReserve,
		}
		Room.insert(roomOBJ);
		console.log("This is after insert the roomOBJ");
	},

	createBio: function(name,bio_content){
		check(name,String);
		check(bio_content,String);
		const username=name;
		const bio=bio_content;
		const bioOBJ={
			name:name,
			content:bio,

		}
		Bio.insert(bioOBJ);

	},

	addEvent( event ) {
    	check( event, {
      		title: String,
      		start: String,
      		end: String,
      		type: String,
      		guests: Number
    	});

    	try {
      		return Events.insert( event );
    	} catch ( exception ) {
      		throw new Meteor.Error( '500', `${ exception }` );
    	}
  },


  	editEvent( event ) {
    	check( event, {
      		_id: String,
      		title: Match.Optional( String ),
      		start: String,
      		end: String,
      		type: Match.Optional( String ),
      		guests: Match.Optional( Number )
    	});
    try {
      return Events.update( event._id, {
      $set: event
      });
    } catch ( exception ) {
    	throw new Meteor.Error( '500', `${ exception }` );
   	}
  },


  	removeEvent( event ) {
    	check( event, String );
    	try {
      		return Events.remove( event );
    	} catch ( exception ) {
      		throw new Meteor.Error( '500', `${ exception }` );
    	}
  	},


  	addRating(rating_OBJ){
  		Rating.insert(rating_OBJ);
  	}




	// insertRoom: function(roomOBJ ){
	// 	//roomOBJ is the object passed in
	// 	// insert method could be Meteor.call("insertRoom", roomOBJ);
	// 	Room.insert(roomOBJ);
	// },

});