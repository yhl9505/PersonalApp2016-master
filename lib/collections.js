Room =new Meteor.Collection("room");
Comments = new Meteor.Collection("comments");
Settings = new Meteor.Collection("settings");
Bio=new Meteor.Collection("bio");

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

Room.deny({
	insert(){return true;},
	update(){return true;},
	remove(){return true;},
});