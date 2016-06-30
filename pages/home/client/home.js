Template.home.events({

	"click .js":function(event){
		console.log("clicked on the button");
		//get the start time
		var s1 = document.getElementById("startTime");
		var starttime = s1.options[s1.selectedIndex].value;
		var numb1= parseInt($('#startTime').val());
		console.log("starttime is"+ starttime);
		console.log("numb1 is"+ numb1);
		
		//get the end time
		var s2 = document.getElementById("endTime");
		var endtime = s1.options[s2.selectedIndex].value;
		var numb2 = parseInt($('#endTime').val());
		console.log("endtime is"+endtime);
		console.log("numb2 is "+numb2);

		//compare
		if(numb2<=numb1){
			window.alert("You must choose the right time!   The end time cannot be earlier than or same as the start time");
		}
		else{
			window.location="http://localhost:3000/map";
		}

		
	}


})


Template.home.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    color: "bg-info",
    counter: 0,

  });
  console.log("creating the template");
  console.dir(this.state);
});



Template.home.helpers({
  theColor: function(){

    const instance = Template.instance();
    return instance.state.get("color");
  },

  theCounter: function(){
    const instance = Template.instance();
    return instance.state.get("counter");
  },

})


Template.home.events({
	"change .js-color":function(event,instance){
		console.log($(".js-color").val());
		const c=instance.$(".js-color").val(); 
		instance.state.set("color",c);
		//change the color field of the satet object ..
	},

		"click .js-pusher":function(event,instance){
		// const counter= instance.state.get("counter");
		instance.state.set("counter", 1+instance.state.get("counter"));
		
	},

		// "click .js": function(){
			// it should transite user to the map page.
		// }



})









