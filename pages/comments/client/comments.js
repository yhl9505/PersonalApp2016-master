Template.comments.helpers({

	commentsdata:function(){return Comments.find({}); },

})

Template.comments.events({
	"click .js-submit-comment":function(event){

		event.preventDefault();
		const name=$(".js-username").val();
		const comment_text= $(".js-user-comment").val();
		const date= new Date();
		if(comment_text==""){
			window.alert("you must enter a comment!");
			return;
		}
		Meteor.call('createCommentobj',name,comment_text,date);
		$(".js-user-comment").val("");	
		console.log("Did we get here")
		
	}
})

Template.commentRow.events({
		"click .js-delete-comment":function(event){
		console.log("clicked on the x");
		console.dir(this);
		Meteor.call("removeCommentobj", this.comment._id);

		}
	})
