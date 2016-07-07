Room =new Meteor.Collection("room");
Comments = new Meteor.Collection("comments");
Settings = new Meteor.Collection("settings");

Comments.deny({
	insert(){return true;},
	update(){return true;},
	remove(){return true;},
});

Settings.deny({
	insert(){return true;},
	update(){return true;},
	remove(){return true;},
});
