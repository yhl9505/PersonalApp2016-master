Template.comments.helpers({

	commentsdata:function(){return Comments.find({}); },

})

Template.comments.events({
	"click .js-submit-comment":function(event){
		event.preventDefault();
		const comment_text= $(".js-user-comment").val();
		if(comment_text==""){
			window.alert("you must enter a comment!");
			return;
		}
		// const comment_rating= $(".js-rating-comment").val();
		Meteor.call('createCommentobj',comment_text);
		
		$(".js-user-comment").val("");	
		
		console.log("Did we get here")
		
	}
})

Template.commentRow.events({
		"click .js-delete-comment":function(event){
		console.log("clicked on the x");
		console.dir(this);
		Comments.remove(this.comment_);

		}
	})
