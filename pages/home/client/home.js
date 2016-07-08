

Template.home.events({

	"click .js":function(event){
		console.log("clicked on the button");
		//get the start time
		const s1 = document.getElementById("startTime");
		const starttime = s1.options[s1.selectedIndex].value;
		const numb1= parseInt($('#startTime').val());
		console.log("starttime is"+ starttime);
		console.log("numb1 is"+ numb1);
		
		//get the end time
		const s2 = document.getElementById("endTime");
		const endtime = s1.options[s2.selectedIndex].value;
		const numb2 = parseInt($('#endTime').val());
		console.log("endtime is"+endtime);
		console.log("numb2 is "+numb2);

		//compare
		if(numb2<=numb1){
			window.alert("You must choose the right time!   The end time cannot be earlier than or same as the start time");
			function checkForm(){
				return false;
  		     }
  		 }else{
    		function checkForm(){
    			return true;
    		}
   		}
	
		
		//get the date
		const date= $(".inputdate").val();
		console.log(date);

		const roomNumber=parseInt((Math.random()*1000)+1);
		console.log("roomNumber is "+ roomNumber);
		console.log("numb1 is"+numb1);
		console.log("numb2 is "+numb2);
		Meteor.call("createRoom",roomNumber,numb1,numb2,date);
		
	},






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


})


Template.home.events({
	"change .js-color":function(event,instance){
		console.log($(".js-color").val());
		const c=instance.$(".js-color").val(); 
		instance.state.set("color",c);
		//change the color field of the satet object ..
	},


})











