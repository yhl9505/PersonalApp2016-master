Room =new Meteor.Collection("room");
Comments = new Meteor.Collection("comments");
Settings = new Meteor.Collection("settings");
Events = new Meteor.Collection("events");
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







Events.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Events.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

// schema rules will go here
let EventsSchema = new SimpleSchema({
  'title': {
    type: String,
    label: 'The title of this event.'
  },
  'start': {
    type: String,
    label: 'When this event will start.'
  },
  'end': {
    type: String,
    label: 'When this event will end.'
  },
  'type': {
    type: String,
    label: 'What type of event is this?',
    allowedValues: [ 'Birthday', 'Corporate', 'Wedding', 'Miscellaneous' ]
  },
  'guests': {
    type: String,
    label: 'The number of guests expected at this event.'
  }

  // 'description': {
  //   type: String,
  //   label: 'The description of the event.'
  // }
});

Events.attachSchema( EventsSchema );