

Template.home.events({

	"click .js":function(event){
		console.log("clicked on the button");
		//get the start time
		const s1 = document.getElementById("startTime");
		const starttime = s1.options[s1.selectedIndex].value;
		const numb1= parseInt($('#startTime').val());
		//numb1 is the start time and its an int
		console.log("starttime is"+ starttime);
		console.log("numb1 is"+ numb1);
		
		//get the end time
		const s2 = document.getElementById("endTime");
		const endtime = s1.options[s2.selectedIndex].value;
		const numb2 = parseInt($('#endTime').val());
		//numb2 its the end time and its an int
		console.log("endtime is"+endtime);
		console.log("numb2 is "+numb2);

		//compare
		if(numb2<=numb1){
			window.alert("You must choose the right time!   The end time cannot be earlier than or same as the start time");
			
   		}
	
		//get the date, its a string
		const date= $(".inputdate").val();
		console.log(date);

		//randomly give the room number
		const roomNumber=parseInt((Math.random()*10)+1);
		console.log("roomNumber is "+ roomNumber);
		console.log("numb1 is"+numb1);
		console.log("numb2 is "+numb2);
		Meteor.call("createRoom",roomNumber,numb1,numb2,date);
		
	},






})




Template.home.helpers({


})













